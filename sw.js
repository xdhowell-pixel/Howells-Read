/* Howell Reads — service worker.
 *
 * The job is one line long: once the site has been opened with a connection,
 * it should still open without one. Everything here is resolved against this
 * file's own URL rather than against the domain, because the same build is
 * served both from the root of a host (InfinityFree) and from a sub-path
 * (GitHub Pages) — a worker that assumed "/" would work on the first and
 * quietly find nothing on the second.
 *
 * Two caches, deliberately split:
 *   shell   — the page itself, the type, the icons, the fonts. Survives
 *             "remove the download", because without it there is no site.
 *   library — the covers and story texts. Written as you read, or all at once
 *             by "Take it all offline", and removable as one piece.
 */

const SHELL_CACHE = 'howell-reads-shell-v1';
const LIBRARY_CACHE = 'howell-reads-library-v1';

// `cache: 'reload'` so a warm HTTP cache cannot hand back a stale copy of the
// shell and leave an old service worker standing guard over old files.
const SHELL = [
    './',
    'css/style.css',
    'js/script.js',
    'favicon.svg',
    'manifest.webmanifest',
    'icons/icon-192.png',
    'icons/icon-512.png',
    'icons/icon-maskable-512.png',
    'icons/apple-touch-icon.png',
];

const abs = (path) => new URL(path, self.location.href).href;

function openShell() { return caches.open(SHELL_CACHE); }
function openLibrary() { return caches.open(LIBRARY_CACHE); }

// Covers and story text, by pathname rather than by origin: on a sub-path
// install the files are still /Howells-Read/texts/… , and matching on
// "/texts/" alone would never fire there.
function isLibraryAsset(url) {
    return /\/(images|texts)\//.test(new URL(url).pathname);
}

/* --- Installing ------------------------------------------------------- */

async function cacheStylesheets(cache) {
    const index = await cache.match(abs('./'));
    if (!index) return;

    const html = await index.clone().text();
    const sheetRefs = [];
    const linkRe = /<link[^>]+href="(https:\/\/[^"]+)"/g;
    let match;
    while ((match = linkRe.exec(html))) {
        // Only actual stylesheets: the preconnect hints in the head are also
        // <link href="https://…"> and fetching them would just 404.
        if (/\/css2\?|\.css(\?|$)/.test(match[1])) sheetRefs.push(match[1]);
    }

    await Promise.all(sheetRefs.map(async (sheetUrl) => {
        let sheet;
        try {
            sheet = await fetch(sheetUrl);
            if (!sheet.ok) return;
            await cache.put(sheetUrl, sheet.clone());
        } catch (err) {
            return; // a font that will not come is not worth failing install for
        }

        // The rules inside a stylesheet point at the files that actually carry
        // the type. Parse them rather than guessing: Google Fonts and Font
        // Awesome address those differently — one absolute, one relative — and
        // `new URL(…, sheetUrl)` settles both.
        const css = await sheet.text();
        const fontRefs = [];
        const urlRe = /url\(\s*['"]?([^'")]+)['"]?\s*\)/g;
        let font;
        while ((font = urlRe.exec(css))) {
            if (!/\.(woff2?|ttf|otf)(\?|$)/i.test(font[1])) continue;
            fontRefs.push(new URL(font[1], sheetUrl).href);
        }

        await Promise.all(fontRefs.map(async (fontUrl) => {
            try {
                const res = await fetch(fontUrl);
                if (res.ok) await cache.put(fontUrl, res);
            } catch (err) { /* leave it to the network when there is one */ }
        }));
    }));
}

async function install() {
    const cache = await openShell();

    await Promise.all(SHELL.map(async (path) => {
        const url = abs(path);
        try {
            const res = await fetch(new Request(url, { cache: 'reload' }));
            if (res.ok) await cache.put(url, res);
        } catch (err) {
            // Tolerated rather than thrown: a missing icon should not cost
            // someone the whole site. Failures are still visible in DevTools.
            console.warn('shell not cached:', path, err);
        }
    }));

    // The typefaces and the icon font are deliberately *not* fetched here.
    // There are sixty-odd of them, on other origins, and holding activation
    // open until they land is how a service worker ends up getting killed
    // half-installed on a slow phone. They are pulled in by the message
    // handler below instead, once the worker is active and in no hurry.
    await self.skipWaiting();
}

/* --- Activating ------------------------------------------------------- */

async function activate() {
    const keep = new Set([SHELL_CACHE, LIBRARY_CACHE]);
    const names = await caches.keys();
    await Promise.all(names.map((name) => {
        // Anything else is a previous shell build, left behind by a deploy.
        if (name.startsWith('howell-reads-shell-') && !keep.has(name)) {
            return caches.delete(name);
        }
        return undefined;
    }));
    await self.clients.claim();
}

/* --- Serving ---------------------------------------------------------- */

async function navigation(request) {
    // Network first: the moment a new build is pushed, the next page load
    // should get it rather than sit behind this worker's copy.
    try {
        const res = await fetch(request);
        if (res && res.ok) {
            const cache = await openShell();
            await cache.put(abs('./'), res.clone());
        }
        return res;
    } catch (err) {
        const cache = await openShell();
        const hit = await cache.match(abs('./'), { ignoreSearch: true });
        if (hit) return hit;

        // Never cached — someone has followed a link to a story they have
        // never opened, with no connection. Answer in the site's own voice
        // rather than handing back the browser's blank error page.
        return new Response(
            '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">' +
            '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
            '<title>Howell Reads — offline</title></head><body style="margin:0;' +
            'background:#fdfaf2;color:#33302a;font-family:Georgia,serif;' +
            'display:flex;align-items:center;justify-content:center;' +
            'min-height:100vh;text-align:center;padding:2rem">' +
            '<div><p style="font-size:.7rem;letter-spacing:3px;text-transform:uppercase;' +
            'color:#8b2c2c">Howell Reads</p>' +
            '<h1 style="font-size:1.6rem;font-weight:400">Not saved on this device yet</h1>' +
            '<p style="max-width:32ch;line-height:1.7">This page has not been opened ' +
            'with a connection, so there is no copy of it here. Open the collection ' +
            'once while you are online and it will be kept.</p></div></body></html>',
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
        );
    }
}

async function swap(request) {
    // Two caches are searched in order: what has been downloaded outranks what
    // was merely opened, and both outrank the network.
    const shell = await openShell();
    const hit = await shell.match(request, { ignoreVary: true });
    if (hit) return hit;

    const library = await openLibrary();
    const libraryHit = await library.match(request, { ignoreVary: true });
    if (libraryHit) return libraryHit;

    try {
        const res = await fetch(request);
        if (res && res.ok) {
            const target = isLibraryAsset(request.url) ? library : shell;
            await target.put(request, res.clone());
        }
        return res;
    } catch (err) {
        // Offline, and never fetched: a failed request is the right answer —
        // returning a crafted 404 would just confuse the handler that made it.
        return Response.error();
    }
}

self.addEventListener('install', (event) => {
    event.waitUntil(install());
});

self.addEventListener('activate', (event) => {
    event.waitUntil(activate());
});

// The typeface pull, started by the page once this worker is active. Routing
// it through a message rather than doing it in install() keeps activation
// quick, and event.waitUntil() here is what stops the worker being stopped
// out from under a download that is halfway done.
self.addEventListener('message', (event) => {
    const data = event.data;
    if (!data || data.type !== 'cache-assets') return;
    event.waitUntil((async () => {
        const cache = await openShell();
        await cacheStylesheets(cache);
    })());
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    // Anything that is not a plain GET passes straight through — there is no
    // reason to intercept a write, and doing so would break anything posting.
    if (request.method !== 'GET') return;

    if (request.mode === 'navigate') {
        event.respondWith(navigation(request));
        return;
    }
    event.respondWith(swap(request));
});
