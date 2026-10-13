// --- Howell Reads Data ---
//
// HOW TO ADD A STORY
//   1. Drop the cover into images/ (name it lowercase-with-hyphens).
//   2. Copy any story( ... ) line below, change the values, save the file.
//   The story appears in the grid, the genre filters and the dashboard
//   automatically - no other edits needed.
//
// image   : path to the cover inside images/. Leave it empty ("") and the site
//           shows a generated placeholder cover instead.
// synopsis: shown on the card and in the reader. PENDING until you write one.
//
// Each story is one line (wrapped for readability).

const PENDING = "Synopsis coming soon.";

const story = (id, title, author, genre, image, synopsis) => ({
    id,
    title,
    author,
    genre,
    image,
    synopsis,
    chapterTitle: "Introduction",
    content: synopsis + "\n\nThe complete story text will be added shortly."
});

const books = [
    // ---- Synopses provided ----
    story(1, "The Tell-Tale Heart", "Edgar Allan Poe", "Psychological", "images/tell-tale-heart.jpg",
        "A psychological breakdown of a murderer plagued by the imagined guilt of a beating heart."),
    story(2, "The Yellow Wallpaper", "Charlotte Perkins Gilman", "Psychological", "images/yellow-wallpaper.jpg",
        "A powerful exploration of isolation, confinement, and a descent into madness."),
    story(3, "The Monkey's Paw", "W. W. Jacobs", "Supernatural", "images/monkeys-paw.jpg",
        "A classic supernatural tale about a cursed talisman that grants three wishes with terrifying consequences."),
    story(4, "The Signal-Man", "Charles Dickens", "Ghost Story", "images/signal-man.jpg",
        "A lonely railway worker haunted by eerie premonitions of impending tragedy."),
    story(5, "The Horla", "Guy de Maupassant", "Horror", "images/horla.jpg",
        "A chilling account of an invisible, parasitic entity slowly taking over a man's mind."),

    // ---- Synopses still to write: replace PENDING with your own line ----
    story(6, "At the Mountains of Madness", "H. P. Lovecraft", "Cosmic Horror", "images/at-the-mountains-of-madness.jpg", PENDING),
    story(7, "The Call of Cthulhu", "H. P. Lovecraft", "Cosmic Horror", "images/the-call-of-ctulhu.jpeg", PENDING),
    story(8, "The Dunwich Horror", "H. P. Lovecraft", "Cosmic Horror", "images/the-dunwich-horror.jpeg", PENDING),
    story(9, "The Shadows over Innsmouth", "H. P. Lovecraft", "Cosmic Horror", "images/the-shadows-over-innsmouth.jpg", PENDING),
    story(10, "The Last Question", "Isaac Asimov", "Sci-Fi", "images/the-last-question.jpg", PENDING),
    story(11, "The Sound of Thunder", "Ray Bradbury", "Sci-Fi", "images/the-sound-of-thunder.jpg", PENDING),
    story(12, "There Will Come Soft Rains", "Ray Bradbury", "Sci-Fi", "images/there-will-come-soft-rains.jpg", PENDING),
    story(13, "Exhalation", "Ted Chiang", "Sci-Fi", "images/exhalation.jpg", PENDING),
    story(14, "The Adventure of the Speckled Band", "Arthur Conan Doyle", "Mystery", "images/the-adventure-of-the-speckled-band.jpeg", PENDING),
    story(15, "A Scandal in Bohemia", "Arthur Conan Doyle", "Mystery", "images/a-scandal-in-bohemia.jpg", PENDING),
    story(16, "The Murders in the Rue Morgue", "Edgar Allan Poe", "Mystery", "images/the-murders-in-the-rue-morgue.jpg", PENDING),
    story(17, "An Occurrence at Owl Creek Bridge", "Ambrose Bierce", "Classic", "images/an-occurrence-at-owl-creek-bridge.jpeg", PENDING),
    story(18, "Rip Van Winkle", "Washington Irving", "Fantasy", "images/rip-van-winkle.jpeg", PENDING),
    story(19, "The Legend of Sleepy Hollow", "Washington Irving", "Horror", "images/the-legend-of-sleepy-hollow.jpeg", PENDING),
    story(20, "Bartleby, the Scrivener", "Herman Melville", "Classic", "images/bartleby-the-scrivener.webp", PENDING),
    story(21, "Hills Like White Elephants", "Ernest Hemingway", "Classic", "images/hills-like-white-elephants.jpeg", PENDING),
    story(22, "Lamb to the Slaughter", "Roald Dahl", "Mystery", "images/lamb-to-the-slaughter.jpeg", PENDING),
    story(23, "The Lady with the Dog", "Anton Chekhov", "Classic", "images/the-lady-with-the-dog.jpeg", PENDING),
    story(24, "The Magic Shop", "H. G. Wells", "Fantasy", "images/the-magic-shop.jpeg", PENDING),
    story(25, "The Metamorphosis", "Franz Kafka", "Psychological", "images/the-metamorphosis.jpeg", PENDING),
    story(26, "The Most Dangerous Game", "Richard Connell", "Adventure", "images/the-most-dangerous-game.jpeg", PENDING),
    story(27, "The Happy Prince", "Oscar Wilde", "Fantasy", "images/the-happy-prince.jpg", PENDING),
    story(28, "The Nose", "Nikolai Gogol", "Fantasy", "images/the-nose.jpg", PENDING),
    story(29, "The Lottery", "Shirley Jackson", "Horror", "images/the-lottery.jpg", PENDING),
    story(30, "The Dead", "James Joyce", "Classic", "images/the-dead.jpeg", PENDING),
];

// --- State Management ---
let allBooks = [];
let currentGenre = 'All';
let currentSearch = '';
let currentSort = 'default';
let showingBookshelf = false;
// Updated key for Howell Reads
let favorites = JSON.parse(localStorage.getItem('howell-reads-favorites')) || [];
// Reading history: most recent first, used by the dashboard
let readingHistory = JSON.parse(localStorage.getItem('howell-reads-history')) || [];

// --- Initialize Data ---
function initializeData() {
    allBooks = [...books];
    generateGenreFilters();
    renderBooks();
}

// --- Render Functions ---
function generateGenreFilters() {
    const genres = ['All', ...new Set(allBooks.map(b => b.genre))];
    const container = document.getElementById('genre-filters');
    container.innerHTML = genres.map(genre => 
        `<button class="filter-chip ${genre === 'All' ? 'active' : ''}" onclick="filterByGenre('${genre}')">${genre}</button>`
    ).join('');
}

function renderBooks() {
    const grid = document.getElementById('book-grid');
    grid.innerHTML = '';

    let filtered = showingBookshelf 
        ? allBooks.filter(b => favorites.includes(b.id)) 
        : [...allBooks];

    if (currentGenre !== 'All') filtered = filtered.filter(b => b.genre === currentGenre);

    if (currentSearch) {
        const search = currentSearch.toLowerCase();
        filtered = filtered.filter(b => 
            b.title.toLowerCase().includes(search) || 
            b.author.toLowerCase().includes(search) || 
            b.genre.toLowerCase().includes(search)
        );
    }

    if (currentSort === 'title') filtered.sort((a, b) => a.title.localeCompare(b.title));
    if (currentSort === 'author') filtered.sort((a, b) => a.author.localeCompare(b.author));

    document.getElementById('results-count').textContent = 
        `Showing ${filtered.length} book${filtered.length !== 1 ? 's' : ''}${showingBookshelf ? ' in your shelf' : ''}`;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-feather-pointed"></i>
                <h3>No books found</h3>
                <p>Try adjusting your search or filters.</p>
            </div>`;
        return;
    }

    filtered.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.style.animationDelay = `${index * 0.03}s`;
        card.onclick = (e) => openBook(book.id, e.currentTarget);

        const imgUrl = book.image || `https://picsum.photos/seed/${book.id}/400/600`;
        const isFav = favorites.includes(book.id);
        const isRead = readingHistory.includes(book.id);

        card.innerHTML = `
            <span class="read-badge ${isRead ? '' : 'hidden'}"><i class="fa-solid fa-check"></i> Read</span>
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${book.id}, this)">
                <i class="fa-solid fa-heart"></i>
            </button>
            <img src="${imgUrl}" alt="${book.title} Cover" loading="lazy">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="author">By ${book.author}</p>
                <div class="read-link">
                    Read Story <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- Interaction Functions ---
function filterByGenre(genre) {
    currentGenre = genre;
    showingBookshelf = false;
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.toggle('active', chip.textContent === genre);
    });
    renderBooks();
}

function toggleFavorite(id, btn) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
        btn.classList.remove('active');
    } else {
        favorites.push(id);
        btn.classList.add('active');
    }
    localStorage.setItem('howell-reads-favorites', JSON.stringify(favorites));
    if (showingBookshelf) renderBooks();
}

function showBookshelf() {
    showingBookshelf = true;
    currentGenre = 'All';
    currentSearch = '';
    document.getElementById('search-input').value = '';
    document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.remove('active'));
    document.querySelector('.filter-chip').classList.add('active');
    document.querySelector('.hero-section h1').textContent = "Your Personal Shelf";
    document.querySelector('.hero-section p').textContent = "The stories you've saved to read later.";
    renderBooks();
    document.getElementById('library-view').classList.remove('hidden');
    document.getElementById('reader-view').classList.add('hidden');
    document.getElementById('dashboard-view').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showLibrary() {
    showingBookshelf = false;
    currentGenre = 'All';
    currentSearch = '';
    document.getElementById('search-input').value = '';
    document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.remove('active'));
    document.querySelector('.filter-chip').classList.add('active');
    document.querySelector('.hero-section h1').textContent = "The Howell Reads Collection";
    document.querySelector('.hero-section p').textContent = "A hand-picked library of short stories and novels. Read freely, collect endlessly.";
    renderBooks();
    document.getElementById('library-view').classList.remove('hidden');
    document.getElementById('reader-view').classList.add('hidden');
    document.getElementById('dashboard-view').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Reading History ---
function markAsRead(id) {
    readingHistory = readingHistory.filter(bookId => bookId !== id);
    readingHistory.unshift(id);
    if (readingHistory.length > 60) readingHistory = readingHistory.slice(0, 60);
    localStorage.setItem('howell-reads-history', JSON.stringify(readingHistory));
}

// --- Dashboard ---
function showDashboard() {
    showingBookshelf = false;
    renderDashboard();
    document.getElementById('library-view').classList.add('hidden');
    document.getElementById('reader-view').classList.add('hidden');
    document.getElementById('dashboard-view').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDashboard() {
    const total = allBooks.length;
    const readCount = readingHistory.filter(id => allBooks.some(b => b.id === id)).length;
    const savedCount = favorites.filter(id => allBooks.some(b => b.id === id)).length;
    const genreCount = new Set(allBooks.map(b => b.genre)).size;
    const percent = total > 0 ? Math.round((readCount / total) * 100) : 0;

    // --- Stat cards ---
    document.getElementById('stat-grid').innerHTML = `
        <div class="stat-card progress-card">
            <div class="ring" style="--p: ${percent * 3.6}deg"><span>${percent}%</span></div>
            <p class="stat-label">Collection Complete</p>
        </div>
        <div class="stat-card">
            <i class="fa-solid fa-book-open-reader"></i>
            <p class="stat-value">${readCount}</p>
            <p class="stat-label">Stories Read</p>
        </div>
        <div class="stat-card">
            <i class="fa-solid fa-heart"></i>
            <p class="stat-value">${savedCount}</p>
            <p class="stat-label">On Your Shelf</p>
        </div>
        <div class="stat-card">
            <i class="fa-solid fa-layer-group"></i>
            <p class="stat-value">${genreCount}</p>
            <p class="stat-label">Genres Available</p>
        </div>
    `;

    // --- Genre breakdown: bar = share of collection, label = how many you've read ---
    const genreTotals = {};
    allBooks.forEach(b => { genreTotals[b.genre] = (genreTotals[b.genre] || 0) + 1; });

    const genreReads = {};
    readingHistory.forEach(id => {
        const book = allBooks.find(b => b.id === id);
        if (book) genreReads[book.genre] = (genreReads[book.genre] || 0) + 1;
    });

    const maxTotal = Math.max(...Object.values(genreTotals), 1);
    document.getElementById('genre-chart').innerHTML = Object.entries(genreTotals)
        .sort((a, b) => b[1] - a[1])
        .map(([genre, count]) => {
            const done = genreReads[genre] || 0;
            const width = Math.round((count / maxTotal) * 100);
            return `
                <div class="bar-row">
                    <div class="bar-head">
                        <span>${genre}</span>
                        <span class="count">${done}/${count} read</span>
                    </div>
                    <div class="bar-track">
                        <div class="bar-fill" style="width: ${width}%"></div>
                    </div>
                </div>`;
        }).join('');

    // --- Recently read ---
    const recent = readingHistory
        .map(id => allBooks.find(b => b.id === id))
        .filter(Boolean)
        .slice(0, 5);

    document.getElementById('recent-list').innerHTML = recent.length === 0
        ? `<div class="dash-empty">
               <i class="fa-solid fa-book-skull"></i>
               <p>Nothing yet. Open a story and it will show up here.</p>
           </div>`
        : recent.map((book, i) => `
            <div class="recent-item" onclick="openBook(${book.id}, this)">
                <span class="recent-num">${i + 1}</span>
                <div class="recent-meta">
                    <h4>${book.title}</h4>
                    <p>By ${book.author}</p>
                </div>
                <span class="genre-tag">${book.genre}</span>
            </div>`).join('');
}

function resetStats() {
    if (!confirm('Clear your reading history and saved shelf?')) return;
    readingHistory = [];
    favorites = [];
    localStorage.removeItem('howell-reads-history');
    localStorage.removeItem('howell-reads-favorites');
    renderDashboard();
}

// --- Dark Mode Toggle ---
const themeToggle = document.getElementById('theme-toggle');
if (localStorage.getItem('howell-reads-theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
function updateThemeIcon() {
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.querySelector('i').className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('howell-reads-theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    updateThemeIcon();
});

// --- Synopsis Toggle ---
document.getElementById('toggle-synopsis').addEventListener('click', function () {
    const isHidden = document.getElementById('synopsis-wrapper').classList.toggle('hidden');
    this.textContent = isHidden ? 'Read Synopsis' : 'Hide Synopsis';
});

// --- Search & Sort Listeners ---
document.getElementById('search-input').addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderBooks();
});

document.getElementById('sort-select').addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderBooks();
});

// --- Custom Cursor ---
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
    cursorOutline.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 500, fill: "forwards" });
});
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.book-card') || e.target.closest('.btn') || e.target.closest('.filter-chip')) {
        cursorOutline.classList.add('hover-active');
    }
});
document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.book-card') || e.target.closest('.btn') || e.target.closest('.filter-chip')) {
        cursorOutline.classList.remove('hover-active');
    }
});

// --- Progress Bar ---
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    document.getElementById('progress-bar').style.width = scrolled + '%';
});

// --- Mendo Dynamic Background ---
function getDominantColor(imageUrl, callback) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        canvas.width = img.width; canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        let r = 0, g = 0, b = 0, count = 0;
        for (let i = 0; i < imageData.length; i += 40) {
            r += imageData[i]; g += imageData[i + 1]; b += imageData[i + 2]; count++;
        }
        callback(`rgb(${Math.floor(r/count)}, ${Math.floor(g/count)}, ${Math.floor(b/count)})`);
    };
    img.src = imageUrl;
}

// --- Open Book with 3D Transition ---
function openBook(id, cardElement) {
    const book = allBooks.find(b => b.id === id);
    if (!book) return;

    cardElement.classList.add('opening');

    setTimeout(() => {
        document.getElementById('story-title').textContent = book.title;
        document.getElementById('story-author').textContent = book.author;
        document.getElementById('story-genre').textContent = book.genre;
        document.getElementById('story-synopsis').querySelector('p').textContent = book.synopsis;
        document.getElementById('chapter-title').textContent = book.chapterTitle;
        // content is split into paragraphs on blank lines, so you can write
        // several paragraphs by separating them with an empty line.
        document.getElementById('chapter-content').innerHTML = String(book.content)
            .split(/\n\s*\n/)
            .map(paragraph => `<p>${paragraph.trim()}</p>`)
            .join('');

        const readerImg = book.image || `https://picsum.photos/seed/${book.id}/800/500`;
        document.getElementById('story-image').src = readerImg;

        // Reset the synopsis panel for each new story
        document.getElementById('synopsis-wrapper').classList.add('hidden');
        document.getElementById('toggle-synopsis').textContent = 'Read Synopsis';

        // Dark base so the white reader text is never unreadable,
        // then blend in the cover's dominant colour if it loads.
        const reader = document.getElementById('story-reader-container');
        reader.style.backgroundImage = 'linear-gradient(rgba(24,18,18,0.78), rgba(24,18,18,0.86)), #2a2a2a';
        getDominantColor(readerImg, (color) => {
            reader.style.backgroundImage = `linear-gradient(rgba(24,18,18,0.78), rgba(24,18,18,0.86)), ${color}`;
        });

        // Record the story in reading history for the dashboard
        markAsRead(book.id);

        document.getElementById('library-view').classList.add('hidden');
        document.getElementById('dashboard-view').classList.add('hidden');
        document.getElementById('reader-view').classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        cardElement.classList.remove('opening');
    }, 600);
}

// --- Boot ---
initializeData();

