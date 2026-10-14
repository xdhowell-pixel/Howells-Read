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
        "A man insists he is not mad, and then describes the murder of an old man he loves, whose pale blue eye \u2014 a film over it, like a vulture's \u2014 has kept him awake for a hundred nights. He watches the old man sleep until that eye opens, and acts. The body goes under the floorboards in pieces. Two officers arrive about a scream in the night, and he sets them down on the very chair above the spot."),
    story(2, "The Yellow Wallpaper", "Charlotte Perkins Gilman", "Psychological", "images/yellow-wallpaper.jpg",
        "A woman with what her physician husband calls a temporary nervous depression is taken to a rented country house for the summer and shut into an upstairs room papered in a foul, creeping yellow. He forbids her to write, so she watches the pattern instead. At night the paper moves. By daylight she can count the bars behind it, and the figure that shakes those bars comes out by degrees until it is creeping the room on all sides \u2014 and her husband has to break the door."),
    story(3, "The Monkey's Paw", "W. W. Jacobs", "Supernatural", "images/monkeys-paw.jpg",
        "A sergeant-major stops at a fire in an English cottage and, warning against it even as he hands it over, leaves behind a shrivelled monkey's paw that grants three wishes. The old man wishes for two hundred pounds and laughs. A week later the money arrives as compensation for his son, killed at the machinery in his works. His wife makes him wish the boy back. There is a knock at the door, and what stands on the step is not quite their son \u2014 which is what the third wish is for."),
    story(4, "The Signal-Man", "Charles Dickens", "Ghost Story", "images/signal-man.jpg",
        "A traveller leans over a footbridge to speak to a signalman in the deep cutting below, and is met with the flat accusation that he has no business signalling from up there. The man is not rude so much as undone. Twice he has seen a figure standing where no figure can stand, waving an arm and calling something none of them could hear, and twice the line beneath the cutting has answered with wreckage. The third time, the traveller sees the figure as well \u2014 though not, he will find, the same one."),
    story(5, "The Horla", "Guy de Maupassant", "Horror", "images/horla.jpg",
        "Nerves, a doctor says, and a little sea air. Then a three-masted ship from Brazil lies at Havre with every soul aboard dead and one survivor praying aloud to something none of them can see. Back at home a man finds his carafe empty by morning, hears a tread on his stair and a breathing at his pillow, and comes at last to understand that he has a guest he cannot see, cannot strike, and cannot keep out of his own glass. He begins a journal, kept with terrible care, to record it."),

    // ---- Synopses below written for this project ----
    story(6, "At the Mountains of Madness", "H. P. Lovecraft", "Cosmic Horror", "images/at-the-mountains-of-madness.jpg",
        "A scientific expedition to Antarctica finds an earlier party dead and scattered, and follows their trail inland to a city of black stone larger than anything built by man. In the frozen rock they uncover fossils of a life form older than the whole history of life on Earth. What is carved into the walls of that city ends the expedition, and nearly ends Dyer."),
    story(7, "The Call of Cthulhu", "H. P. Lovecraft", "Cosmic Horror", "images/the-call-of-ctulhu.jpeg",
        "When a great-uncle dies, a man inherits a box of papers describing a clay idol found in a Louisiana swamp and a worldwide brotherhood worshipping something that sleeps beneath the Pacific. The trail runs from Sydney to the Arctic, gathering witnesses who all saw the same thing and none of whom agree on what it was. It ends where it began: a ship, an island, and something that should not have been woken."),
    story(8, "The Dunwich Horror", "H. P. Lovecraft", "Cosmic Horror", "images/the-dunwich-horror.jpeg",
        "In the back hills of Massachusetts, a farming family keeps a second child hidden from the world, and no one asks why. Whippoorwills call at the wrong hours, livestock are found dead, and something tears the barn apart from the inside. When the thing finally comes to town in daylight, three men and a book are all that stand between it and the rest of the state."),
    story(9, "The Shadows over Innsmouth", "H. P. Lovecraft", "Cosmic Horror", "images/the-shadows-over-innsmouth.jpg",
        "A young man tracing his family tree stops in a decaying New England fishing town that nobody will discuss and nobody will enter after dark. The churches are empty, the gold coins are a century old, and the boats go out at night without lights. By the time he understands what the town has become, he has also worked out what he is becoming."),
    story(10, "The Last Question", "Isaac Asimov", "Sci-Fi", "images/the-last-question.jpg",
        "In 2061, a junior technician idly asks the most powerful computer in existence whether the entropy of the universe can be reversed. The answer is the same for every age that follows: data insufficient. Millions of years later the question is still being asked by minds that no longer resemble the ones who first asked it, and the answer finally comes, but not for them."),
    story(11, "The Sound of Thunder", "Ray Bradbury", "Sci-Fi", "images/the-sound-of-thunder.jpg",
        "Eckels pays a great deal of money to hunt a tyrannosaur in the distant past, under strict instructions: stay on the metal path, touch nothing, kill only what the guide permits. On the way back out he steps off the path. When he reaches 2055 again the spelling has changed, the language has changed, and the result of the election has changed with it."),
    story(12, "There Will Come Soft Rains", "Ray Bradbury", "Sci-Fi", "images/there-will-come-soft-rains.jpg",
        "The house wakes first: watering the lawn, sweeping the porch, baking and announcing the time to a family that is not there. All day it works steadily through its list, and all day the family never comes home. By evening it has finished the last chore on its list, and there is nothing left for it to do."),
    story(13, "Exhalation", "Ted Chiang", "Sci-Fi", "images/exhalation.jpg",
        "A being made of brass and pistons cuts open its own skull so it can watch its own thoughts forming. It works out how thinking happens, then it works out how thinking ends: the compressed air that powers every mind is running out, everywhere, and it cannot be replaced. So the message goes out, and every mind turns to the same problem."),
    story(14, "The Adventure of the Speckled Band", "Arthur Conan Doyle", "Mystery", "images/the-adventure-of-the-speckled-band.jpeg",
        "A young woman watched her dying sister sit up in the night, hear a whistling sound, and speak of a spotted band moving in the dark. Holmes takes the case with almost no evidence, because there is almost no evidence, and because the same whistle has come for the surviving sister. What is loose in that bedroom is not what the family believes is loose in it."),
    story(15, "A Scandal in Bohemia", "Arthur Conan Doyle", "Mystery", "images/a-scandal-in-bohemia.jpg",
        "The King of Bohemia wants one photograph destroyed, and he wants it done without a scandal anyone will hear about. Holmes takes the case, sets a careful trap, and loses it more or less cleanly to Irene Adler, who out-planned him before he arrived. He keeps her photograph, and her note, and never calls it a defeat."),
    story(16, "The Murders in the Rue Morgue", "Edgar Allan Poe", "Mystery", "images/the-murders-in-the-rue-morgue.jpg",
        "Two women are found dead in a locked apartment on the fourth floor: the windows shut, the chimney too narrow for anything larger than a cat, and the neighbours all heard a voice speaking a language none of them recognised. The police have a confession, a suspect and no way to explain how any of it happened. The explanation Dupin reaches is not one the police would ever have arrived at."),
    story(17, "An Occurrence at Owl Creek Bridge", "Ambrose Bierce", "Classic", "images/an-occurrence-at-owl-creek-bridge.jpeg",
        "A Southern farmer, tied beneath a Union railway bridge with a rope around his neck and a plank under his feet, is given a moment to pray before the drop. It takes Bierce three pages to get him to his own front gate, and one sentence to take the whole thing away."),
    story(18, "Rip Van Winkle", "Washington Irving", "Fantasy", "images/rip-van-winkle.jpeg",
        "A farmer who would rather work than go home to his wife walks into the Catskills with his dog and a rifle, and meets strangers playing ninepins in a mountain hollow. He drinks with them and wakes the next morning to a grey beard, an empty glen, and a village that has never heard of him. The country he comes back to is not the one he left."),
    story(19, "The Legend of Sleepy Hollow", "Washington Irving", "Horror", "images/the-legend-of-sleepy-hollow.jpeg",
        "A schoolmaster arrives in a quiet Dutch valley and sets about charming the richest girl in the district, which puts him head-on against the girl's rough suitor. Both men know the valley's favourite story about the rider who carries his own head. On his way home one night from a party he has drunk too much at, Ichabod meets something on the bridge."),
    story(20, "Bartleby, the Scrivener", "Herman Melville", "Classic", "images/bartleby-the-scrivener.webp",
        "A Wall Street lawyer hires a quiet copyist who works steadily and without complaint until the day he is asked to proofread instead. Then he says he would prefer not to, and declines to explain why. The lawyer is patient and reasonable about it for a very long time, which turns out to be exactly the wrong response."),
    story(21, "Hills Like White Elephants", "Ernest Hemingway", "Classic", "images/hills-like-white-elephants.jpeg",
        "A man and a woman wait at a Spanish railway station for a train to Madrid, and spend the afternoon ordering drinks. They argue, agree, argue again, and agree that the operation is very simple. Neither of them ever says what the operation is actually for, and the train is coming."),
    story(22, "Lamb to the Slaughter", "Roald Dahl", "Mystery", "images/lamb-to-the-slaughter.jpeg",
        "Mary Maloney is a devoted housewife waiting patiently for her husband to come home from work. When he gets there, he tells her something that makes her kill him quite calmly with a frozen leg of lamb. She cooks it, offers it to the men hunting for the murder weapon, and eats it with them."),
    story(23, "The Lady with the Dog", "Anton Chekhov", "Classic", "images/the-lady-with-the-dog.jpeg",
        "A married man takes a holiday in Yalta, meets a young woman who is also married to someone else, and fully intends the affair to end with the season. It does not end. Both of them go back to their own lives and find those lives suddenly unbearable, not because of anything that happened in Yalta, but because of what they now know they are capable of."),
    story(24, "The Magic Shop", "H. G. Wells", "Fantasy", "images/the-magic-shop.jpeg",
        "A father takes his son into a shop to buy a toy and finds a shopkeeper who sells things that work on the people buying them. The tricks are not tricks at all: the toy grins back at him, and the shopkeeper refuses to take the bill. Getting out of the shop turns out to be the harder part."),
    story(25, "The Metamorphosis", "Franz Kafka", "Psychological", "images/the-metamorphosis.jpeg",
        "Gregor Samsa wakes one morning as a monstrous insect, and his first worry is that he will miss the early train. His family cannot get into the room, and when they finally do, they are not pleased. The months that follow are mostly about how quickly a family can decide that a burden has an expiry date."),
    story(26, "The Most Dangerous Game", "Richard Connell", "Adventure", "images/the-most-dangerous-game.jpeg",
        "Rainsford falls from his yacht onto an island where the host, General Zaroff, has hunted everything that runs and has grown bored of all of it. Zaroff has found something else to hunt instead, and he has rules about it, and a house full of trophies. Rainsford has three days before it is his turn."),
    story(27, "The Happy Prince", "Oscar Wilde", "Fantasy", "images/the-happy-prince.jpg",
        "A gold-and-jewel statue stands over a city and, for the first time, can see how poor the people under him are. A swallow stays behind past the season to help him give everything away, feather by feather and ruby by ruby. By the end the statue is scrap metal and the bird is dead, and both of them are thrown on a heap in the square."),
    story(28, "The Nose", "Nikolai Gogol", "Fantasy", "images/the-nose.jpg",
        "A minor official in St Petersburg shaves one morning and finds his nose is no longer on his face. It turns up in a shop, in a church, in a carriage, and it outranks him politely declining to explain itself. He tries to get it back, and nobody will take him seriously, because nobody can."),
    story(29, "The Lottery", "Shirley Jackson", "Horror", "images/the-lottery.jpg",
        "On a clear June morning the villagers gather in the square for the annual lottery, which takes under two hours and is run about as casually as a fire drill. The box is old, the slips are black, and people joke about the households that usually lose. It is not until the last few pages that the reader works out what the prize is."),
    story(30, "The Dead", "James Joyce", "Classic", "images/the-dead.jpeg",
        "Gabriel goes to his aunts' annual Christmas dinner and spends the evening being awkward, proud, and a little tired of his students and his relatives. At the door on the way out, his wife tells him about a boy who once sang for her and then died of it. He goes home through the snow, thinks about the boy, and then thinks about something else entirely."),

    // ---- Apocalypse / end-of-the-world set, added after the first 30 ----
    // All eight are public domain, so each carries a full text in texts/.
    story(31, "The Poison Belt", "Arthur Conan Doyle", "Apocalypse", "images/the-poison-belt.jpg",
        "Professor Challenger notices subtle changes in light spectra and strange behaviour in wildlife, and realises the solar system is drifting into a cloud of poisonous cosmic ether. The story tracks the slow, dread-filled days leading up to the moment the poison reaches Earth, as people watch society quiet down and collapse outside their sealed windows."),
    story(32, "The Machine Stops", "E. M. Forster", "Apocalypse", "images/the-machine-stops.jpg",
        "Humanity lives in isolated underground rooms, completely reliant on a giant global Machine for food, communication and air. The build-up begins when minor glitches start happening: a hum out of tune, a button that answers late. People ignore the warning signs until the whole infrastructure decays toward total failure."),
    story(33, "The Empire of the Ants", "H. G. Wells", "Apocalypse", "images/empire-of-the-ants.jpg",
        "Reports filter in from remote jungle outposts about an oddly intelligent, aggressive species of ant. A gunboat crew sent to investigate finds abandoned villages and dead livestock, and realises the ants are evolving, making tools, and spreading outwards."),
    story(34, "The Last Man", "Mary Shelley", "Apocalypse", "images/the-last-man.jpg",
        "Written by the author of Frankenstein, this is considered one of the first true post-apocalyptic novels in modern history. Set in the late twenty-first century, it follows a group of friends as news of an unstoppable global plague spreads across Europe, turning small rumours into nationwide panic and the dissolution of society."),
    story(35, "The Star", "H. G. Wells", "Apocalypse", "images/the-star.jpg",
        "Astronomers spot a vast dark body crossing the solar system and work out it will pass close to Earth. For a few weeks the world agrees to behave well, then the figures are revised and the newspapers lose interest. When it finally passes, the oceans have moved and the northern hemisphere has been scoured clean."),
    story(36, "A Jury of Her Peers", "Susan Glaspell", "Mystery", "images/a-jury-of-her-peers.jpg",
        "A farmer's wife has been arrested for murdering her husband, and two women are driven out to the empty house to look for evidence. The men search for a motive and find nothing worth discussing. The women find a quilt, a sewing box, and a dead bird."),
    story(37, "The Damned Thing", "Ambrose Bierce", "Horror", "images/the-damned-thing.jpg",
        "At an inquest into a man's death, the witnesses describe something they saw in a ravine, and no two of them saw it the same way. The dead man's own account, read aloud, settles nothing. Whatever killed him hunts by a colour that human eyes cannot see."),
    story(38, "2 B R 0 2 B", "Kurt Vonnegut", "Apocalypse", "images/2-b-r-0-2-b.jpg",
        "Population is fixed at forty million and ageing is a choice, so a man reporting to a suicide bureau brings his whole family along when his grandfather refuses to go quietly. The future is cheerful, efficient, and has run out of room. Nobody alive remembers what the letters in the title used to spell."),

    // ---- Second wave, added with their own cover art ----
    story(39, "The War of the Worlds", "H. G. Wells", "Apocalypse", "images/war-of-the-worlds.jpg",
        "Cylinders land on Horsell Common and the people who walk out to meet them are not negotiators. The army is broken in an afternoon, London empties in a week, and the machines walk north with nothing behind them but smoke. The narrator keeps moving, and the story ends with him walking back into a city that has gone quiet."),
    story(40, "Youth", "Isaac Asimov", "Sci-Fi", "images/youth.jpg",
        "Two visiting aliens park their ship on an undeveloped planet and ask a local boy to help them study its native life form. The report they file afterwards is about animals, migration, and whether the species is ready for contact. It is only at the end that the reader works out which species they were describing."),
    story(41, "Omnilingual", "H. Beam Piper", "Sci-Fi", "images/omnilingual.jpg",
        "An archaeologist on Mars finds a dead city and a library of records in a language nobody can read. Every other discipline gives up on the glyphs, so the linguistics team works backwards from the periodic table, which any technical civilisation has to have encoded the same way. The breakthrough is not the reading of the records but what the records say about why they stopped being written."),
    story(42, "A Traveler in Time", "August Derleth", "Fantasy", "images/a-traveler-in-time.jpg",
        "A man taking a holiday in England finds himself slipping backwards into the same few weeks of 1585, drawn into the household where Mary Queen of Scots is being held. Each return is shorter than the last, and the people around him begin to remember who he is. He cannot leave, and he cannot quite arrive."),
];

// --- Stories with a full public-domain text in texts/ ---
// Add or remove a line here; the reader picks it up automatically.
const FULL_TEXTS = {
    1: "texts/tell-tale-heart.txt",
    2: "texts/yellow-wallpaper.txt",
    3: "texts/monkeys-paw.txt",
    4: "texts/signal-man.txt",
    5: "texts/horla.txt",
    6: "texts/at-the-mountains-of-madness.txt",
    7: "texts/the-call-of-ctulhu.txt",
    8: "texts/the-dunwich-horror.txt",
    9: "texts/the-shadows-over-innsmouth.txt",
    14: "texts/the-adventure-of-the-speckled-band.txt",
    15: "texts/a-scandal-in-bohemia.txt",
    16: "texts/the-murders-in-the-rue-morgue.txt",
    17: "texts/an-occurrence-at-owl-creek-bridge.txt",
    18: "texts/rip-van-winkle.txt",
    19: "texts/the-legend-of-sleepy-hollow.txt",
    20: "texts/bartleby-the-scrivener.txt",
    21: "texts/hills-like-white-elephants.txt",
    23: "texts/the-lady-with-the-dog.txt",
    24: "texts/the-magic-shop.txt",
    26: "texts/the-most-dangerous-game.txt",
    27: "texts/the-happy-prince.txt",
    28: "texts/the-nose.txt",
    30: "texts/the-dead.txt",
    // Apocalypse set
    31: "texts/the-poison-belt.txt",
    32: "texts/the-machine-stops.txt",
    33: "texts/the-empire-of-the-ants.txt",
    34: "texts/the-last-man.txt",
    35: "texts/the-star.txt",
    36: "texts/a-jury-of-her-peers.txt",
    37: "texts/the-damned-thing.txt",
    38: "texts/2-b-r-0-2-b.txt",
    39: "texts/war-of-the-worlds.txt",
};

// Stories 10, 11, 12, 13, 22, 29, 40, 41 and 42 are still under copyright, so
// they carry a synopsis only. Story 25 has no free English translation yet.
// Never paste any of their full text into this repository.
books.forEach(book => {
    book.text = FULL_TEXTS[book.id] || "";
    book.chapterTitle = book.text ? "The Complete Text" : "About This Story";
});

// --- State Management ---
let allBooks = [];
let currentGenre = 'All';
let currentSearch = '';
let currentSort = 'default';
let showingBookshelf = false;
// Which shelf tab is showing. The shelf is a view of the favourites list, not
// a second list of its own, so Saved is the base and Reading/Finished are that
// same list split by scroll progress.
let currentShelf = 'saved';
// Updated key for Howell Reads
let favorites = JSON.parse(localStorage.getItem('howell-reads-favorites')) || [];
// Reading history: most recent first, used by the dashboard
let readingHistory = JSON.parse(localStorage.getItem('howell-reads-history')) || [];
// How far through each story the reader got, 0..1, keyed by book id
let readingProgress = JSON.parse(localStorage.getItem('howell-reads-progress')) || {};
// Your 1-5 rating for each story, keyed by book id
let ratings = JSON.parse(localStorage.getItem('howell-reads-ratings')) || {};

// --- Initialize Data ---
function initializeData() {
    allBooks = [...books];
    renderSortOptions();
    generateGenreFilters();
    renderBooks();
}

// --- Render Functions ---
function generateGenreFilters() {
    // On the shelf these are built from the shelf, not the whole collection.
    // Otherwise a three-book shelf shows eleven chips, nearly all of which
    // filter down to nothing.
    const source = showingBookshelf ? shelfBooks() : allBooks;
    const genres = ['All', ...new Set(source.map(b => b.genre))];
    const container = document.getElementById('genre-filters');
    container.innerHTML = genres.map(genre =>
        `<button class="filter-chip ${genre === currentGenre ? 'active' : ''}" onclick="filterByGenre('${genre}')">${genre}</button>`
    ).join('');
}

// --- Shelf ---
// Everything here is derived from data the site already collects: favourites
// for what you saved, scroll depth for how far you got, ratings for what you
// finished. Nothing is filed by hand, which is the reason it stays accurate.
const SHELF_TABS = [
    { key: 'saved',    label: 'Saved' },
    { key: 'reading',  label: 'Reading' },
    { key: 'finished', label: 'Finished' },
];

function savedBooks() {
    return favorites.map(id => allBooks.find(b => b.id === id)).filter(Boolean);
}

function shelfBooks(tab = currentShelf) {
    const saved = savedBooks();
    if (tab === 'reading')  return saved.filter(b => bookState(b) === 'reading');
    if (tab === 'finished') return saved.filter(b => bookState(b) === 'finished');
    return saved;
}

function shelfCounts() {
    const saved = savedBooks();
    return {
        saved:    saved.length,
        reading:  saved.filter(b => bookState(b) === 'reading').length,
        finished: saved.filter(b => bookState(b) === 'finished').length,
    };
}

// Favourites are an append-only array, so a story's index in it is the order
// it was saved: index 0 is the oldest, the last slot the newest. That gives
// "date added" for free, with no timestamps and no extra storage key.
function addedRank(book) {
    return favorites.indexOf(book.id);
}

function averageRating(list) {
    const rated = list.map(b => ratings[b.id]).filter(Boolean);
    if (!rated.length) return 0;
    return rated.reduce((a, b) => a + b, 0) / rated.length;
}

function renderShelfTabs() {
    const counts = shelfCounts();
    SHELF_TABS.forEach(tab => {
        const btn = document.querySelector(`.shelf-tab[data-shelf="${tab.key}"]`);
        if (!btn) return;
        btn.classList.toggle('active', currentShelf === tab.key);
        btn.setAttribute('aria-selected', currentShelf === tab.key);
        const badge = btn.querySelector('.tab-count');
        if (badge) badge.textContent = counts[tab.key];
    });
}

function selectShelf(tab) {
    currentShelf = tab;
    currentGenre = 'All';
    currentSearch = '';
    document.getElementById('search-input').value = '';
    renderShelfTabs();
    generateGenreFilters();
    renderBooks();
}

// The library and the shelf want different sort lists. Shelf-only sorts have
// no meaning against the full collection, so they are swapped out rather than
// left there doing nothing.
const SORTS = {
    library: [
        ['default', 'Sort: Featured'],
        ['title',   'Title (A-Z)'],
        ['author',  'Author (A-Z)'],
    ],
    shelf: [
        ['default',  'Sort: Date Added'],
        ['added',    'Date Added (Newest)'],
        ['rating',   'Your Rating'],
        ['progress', 'How Far You Got'],
        ['title',    'Title (A-Z)'],
        ['author',   'Author (A-Z)'],
    ],
};

function renderSortOptions() {
    const sel = document.getElementById('sort-select');
    if (!sel) return;
    const options = showingBookshelf ? SORTS.shelf : SORTS.library;
    if (!options.some(([value]) => value === currentSort)) currentSort = 'default';
    sel.innerHTML = options.map(([value, label]) =>
        `<option value="${value}"${value === currentSort ? ' selected' : ''}>${label}</option>`
    ).join('');
}

function renderBooks() {
    const grid = document.getElementById('book-grid');
    grid.innerHTML = '';

    let filtered = showingBookshelf ? shelfBooks() : [...allBooks];

    if (currentGenre !== 'All') filtered = filtered.filter(b => b.genre === currentGenre);

    if (currentSearch) {
        const search = currentSearch.toLowerCase();
        filtered = filtered.filter(b => 
            b.title.toLowerCase().includes(search) || 
            b.author.toLowerCase().includes(search) || 
            b.genre.toLowerCase().includes(search)
        );
    }

    if (currentSort === 'title')    filtered.sort((a, b) => a.title.localeCompare(b.title));
    if (currentSort === 'author')   filtered.sort((a, b) => a.author.localeCompare(b.author));
    if (currentSort === 'added')    filtered.sort((a, b) => addedRank(b) - addedRank(a));
    if (currentSort === 'rating')   filtered.sort((a, b) => (ratings[b.id] || 0) - (ratings[a.id] || 0));
    if (currentSort === 'progress') filtered.sort((a, b) => (readingProgress[b.id] || 0) - (readingProgress[a.id] || 0));

    const results = document.getElementById('results-count');
    if (showingBookshelf) {
        // On the shelf this line carries the shelf's own tallies rather than
        // the library's count, so the tabs and the numbers always agree.
        const counts = shelfCounts();
        const avg = averageRating(savedBooks());
        const parts = [
            `${counts.saved} saved`,
            `${counts.reading} in progress`,
            `${counts.finished} finished`,
        ];
        if (avg) parts.push(`avg ${avg.toFixed(1)} / 5`);
        results.textContent = parts.join('  \u00b7  ');
    } else {
        results.textContent = `Showing ${filtered.length} book${filtered.length !== 1 ? 's' : ''}`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = emptyStateHtml();
        return;
    }

    filtered.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.style.animationDelay = `${index * 0.03}s`;
        card.onclick = (e) => openBook(book.id, e.currentTarget);

        const imgUrl = book.image || `https://picsum.photos/seed/${book.id}/400/600`;
        const isFav = favorites.includes(book.id);
        const state = bookState(book);
        const finished = state === 'finished';

        card.innerHTML = `
            <span class="read-badge ${finished ? '' : 'hidden'}"><i class="fa-solid fa-check"></i> Finished</span>
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${book.id}, this)">
                <i class="fa-solid fa-heart"></i>
            </button>
            <img src="${imgUrl}" alt="${book.title} Cover" loading="lazy">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="author">By ${book.author}</p>
                ${finished ? `<div class="rating-row">${starsHtml(book)}</div>` : ''}
                <div class="read-link">
                    ${readLinkLabel(state)} <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        `;

        if (finished) {
            card.querySelectorAll('.star').forEach(star => {
                star.addEventListener('click', (e) => {
                    e.stopPropagation();
                    setRating(book.id, Number(star.dataset.value));
                });
            });
        }

        grid.appendChild(card);
    });
}

// --- Empty states ---
// An empty grid means something different depending on why it is empty.
// Telling someone to "try adjusting your search" when their shelf is simply
// unfilled blames them for doing nothing wrong.
function emptyStateHtml() {
    if (showingBookshelf && favorites.length === 0) {
        return emptyState('fa-heart', 'Your shelf is empty',
            'Tap the heart on any story to keep it here.',
            'Browse the collection', 'showLibrary()');
    }

    const tabCopy = {
        reading:  ['Nothing in progress',
                   'Open a story and it shows up here while you read it.'],
        finished: ['Nothing finished yet',
                   'Read a story through and it lands here, ready to rate.'],
    };

    if (showingBookshelf && currentShelf !== 'saved' && currentGenre === 'All' && !currentSearch) {
        const [title, text] = tabCopy[currentShelf] || ['Nothing here yet', ''];
        return emptyState('fa-book-open', title, text, 'Back to Saved', "selectShelf('saved')");
    }

    return emptyState('fa-feather-pointed', 'No books found',
        'Try adjusting your search or filters.');
}

function emptyState(icon, title, text, action, actionFn) {
    return `
        <div class="empty-state">
            <i class="fa-solid ${icon}"></i>
            <h3>${title}</h3>
            <p>${text}</p>
            ${action ? `<button class="btn outline-btn" onclick="${actionFn}">${action}</button>` : ''}
        </div>`;
}

// --- Interaction Functions ---
function filterByGenre(genre) {
    currentGenre = genre;
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
    if (showingBookshelf) {
        // Un-hearting the last story of a genre leaves a chip that filters to
        // nothing, so the chips are rebuilt from whatever the shelf now holds.
        const stillThere = shelfBooks().some(b => b.genre === currentGenre);
        if (currentGenre !== 'All' && !stillThere) currentGenre = 'All';
        renderShelfTabs();
        generateGenreFilters();
        renderBooks();
    }
}

function setHero(eyebrow, title, blurb) {
    const hero = document.querySelector('.hero-section');
    hero.querySelector('.eyebrow').textContent = eyebrow;
    hero.querySelector('h1').textContent = title;
    hero.querySelector('p').textContent = blurb;
}

function showView(id) {
    ['library-view', 'reader-view', 'dashboard-view'].forEach(view =>
        document.getElementById(view).classList.toggle('hidden', view !== id));
    // Leaving a story should not leave its settings panel floating over
    // whatever comes next.
    if (id !== 'reader-view') {
        const panel = document.getElementById('rs-drawer');
        if (panel && panel.classList.contains('open')) setReaderPanel(false);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showBookshelf() {
    showingBookshelf = true;
    currentShelf = 'saved';
    currentGenre = 'All';
    currentSearch = '';
    document.getElementById('search-input').value = '';
    setHero('Your Shelf \u2014 Kept by Heart', 'My Shelf',
        "Every story you've kept. Saved, part-read and finished sort themselves out as you read.");
    document.getElementById('shelf-tabs').classList.remove('hidden');
    renderSortOptions();
    renderShelfTabs();
    generateGenreFilters();
    renderBooks();
    showView('library-view');
}

function showLibrary() {
    showingBookshelf = false;
    currentGenre = 'All';
    currentSearch = '';
    document.getElementById('search-input').value = '';
    setHero('Est. 2026 \u2014 Curated Stories', 'The Howell Reads Collection',
        'A hand-picked library of short stories and novels. Read freely, collect endlessly.');
    document.getElementById('shelf-tabs').classList.add('hidden');
    renderSortOptions();
    generateGenreFilters();
    renderBooks();
    showView('library-view');
}

// --- Reading streak ---
// The history is a list of story ids in order and carries no dates at all, so
// it cannot answer "did you read today". The streak keeps its own record: one
// ISO date per day you showed up, deduped, oldest dropped first.
const ACTIVITY_KEY = 'howell-reads-activity';
const ACTIVITY_CAP = 400;

function loadActivityDates() {
    try {
        const raw = JSON.parse(localStorage.getItem(ACTIVITY_KEY) || '[]');
        if (!Array.isArray(raw)) return [];
        return [...new Set(raw.filter(d => typeof d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d)))].sort();
    } catch (e) {
        return [];
    }
}

let activityDates = loadActivityDates();

function isoDay(offsetDays, from) {
    let d;
    if (typeof from === 'string') {
        // Parse as a local calendar date. new Date("2026-10-14") is UTC
        // midnight, which in a negative-offset zone is still the 13th locally,
        // and the arithmetic would then return the 14th instead of the 15th.
        const [y, m, dd] = from.split('-').map(Number);
        d = new Date(y, m - 1, dd);
    } else {
        d = new Date();
    }
    d.setDate(d.getDate() + (offsetDays || 0));
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function markActivity() {
    const today = isoDay(0);
    if (activityDates[activityDates.length - 1] === today) return;
    activityDates.push(today);
    activityDates.sort();
    if (activityDates.length > ACTIVITY_CAP) activityDates = activityDates.slice(-ACTIVITY_CAP);
    localStorage.setItem(ACTIVITY_KEY, JSON.stringify(activityDates));
}

// A streak survives a day you have not had yet: yesterday's reading still
// counts as unbroken at 9am, and it only lapses once a whole day is missed.
function currentStreak() {
    if (!activityDates.length) return 0;
    const days = new Set(activityDates);
    let cursor;
    if (days.has(isoDay(0))) cursor = isoDay(0);
    else if (days.has(isoDay(-1))) cursor = isoDay(-1);
    else return 0;

    let run = 0;
    while (days.has(cursor)) {
        run++;
        cursor = isoDay(-1, cursor);
    }
    return run;
}

function bestStreak() {
    let best = 0, run = 0, prev = null;
    for (const day of activityDates) {
        run = (prev !== null && isoDay(1, prev) === day) ? run + 1 : 1;
        if (run > best) best = run;
        prev = day;
    }
    return best;
}

// --- Reading History ---
function markAsRead(id) {
    readingHistory = readingHistory.filter(bookId => bookId !== id);
    readingHistory.unshift(id);
    if (readingHistory.length > 60) readingHistory = readingHistory.slice(0, 60);
    localStorage.setItem('howell-reads-history', JSON.stringify(readingHistory));
    markActivity();
}

// --- Read state ---
// Every reading app uses the same three-rung ladder, so a card's action link
// relabels itself instead of sitting there saying "Read" while the badge above
// it also says "Read":  unread -> "Read Story", partway -> "Continue",
// finished -> "Read Again".
const FINISH_LINE = 0.95;

function bookState(book) {
    if (!readingHistory.includes(book.id)) return 'unread';
    const p = readingProgress[book.id];
    // Entries written by older versions of this page have history but no
    // recorded progress. They count as finished, so nothing the reader has
    // already gone through flips back to "Continue".
    if (p === undefined) return 'finished';
    return p >= FINISH_LINE ? 'finished' : 'reading';
}

function readLinkLabel(state) {
    if (state === 'reading') return 'Continue';
    if (state === 'finished') return 'Read Again';
    return 'Read Story';
}

function saveProgress() {
    localStorage.setItem('howell-reads-progress', JSON.stringify(readingProgress));
}

// The reader scrolls the page, so progress is measured against the reader
// element rather than a scroll container. Only writes when it has advanced a
// whole percent, which keeps localStorage traffic negligible.
function updateReadingProgress() {
    if (currentBookId === null) return;
    const view = document.getElementById('reader-view');
    if (!view || view.classList.contains('hidden')) return;
    // getBoundingClientRect rather than offsetTop: offsetTop is measured from
    // the offsetParent, which is not necessarily the document.
    const scrolled = window.scrollY || 0;
    const start = scrolled + view.getBoundingClientRect().top;
    const end = start + view.offsetHeight - window.innerHeight;
    const p = end <= start ? 1 : Math.min(1, Math.max(0, (scrolled - start) / (end - start)));
    const prev = readingProgress[currentBookId] || 0;
    if (p > prev + 0.01) {
        readingProgress[currentBookId] = p;
        saveProgress();
    }
}
window.addEventListener('scroll', updateReadingProgress, { passive: true });
window.addEventListener('beforeunload', saveProgress);

function setRating(id, value) {
    // Clicking the star you already have clears the rating, like most trackers.
    if (ratings[id] === value) delete ratings[id];
    else ratings[id] = value;
    localStorage.setItem('howell-reads-ratings', JSON.stringify(ratings));
    renderBooks();
}

function starsHtml(book) {
    const value = ratings[book.id] || 0;
    let out = `<span class="star-rating" role="group" aria-label="Your rating for ${book.title}">`;
    for (let i = 1; i <= 5; i++) {
        const on = i <= value;
        out += `<button type="button" class="star${on ? ' on' : ''}" data-value="${i}"
                    aria-label="Rate ${i} of 5" aria-pressed="${on}">
                    <i class="fa-${on ? 'solid' : 'regular'} fa-star"></i>
                </button>`;
    }
    return out + '</span>';
}

// --- Dashboard ---
function showDashboard() {
    showingBookshelf = false;
    renderDashboard();
    document.getElementById('shelf-tabs').classList.add('hidden');
    showView('dashboard-view');
}

function renderDashboard() {
    const total = allBooks.length;
    const readCount = allBooks.filter(b => bookState(b) === 'finished').length;
    const savedCount = favorites.filter(id => allBooks.some(b => b.id === id)).length;
    const genreCount = new Set(allBooks.map(b => b.genre)).size;
    const percent = total > 0 ? Math.round((readCount / total) * 100) : 0;

    // --- Ledger strip ---
    document.getElementById('dash-percent').textContent = percent + '%';
    document.getElementById('dash-gauge').style.width = percent + '%';
    document.getElementById('dash-foot-progress').textContent = `${readCount} of ${total} stories`;
    document.getElementById('dash-read').textContent = readCount;
    document.getElementById('dash-saved').textContent = savedCount;
    document.getElementById('dash-genres').textContent = genreCount;

    // --- Reading streak ---
    const streak = currentStreak();
    const best = Math.max(bestStreak(), streak);
    document.getElementById('dash-streak').textContent = streak;
    document.getElementById('dash-streak-foot').textContent =
        streak === 0 ? 'open a story to begin'
            : `${streak === 1 ? 'day' : 'days'} in a row \u00b7 best ${best}`;

    // --- Genre ledger: bar = the genre's share of the catalogue, figure = what you've read ---
    const genreTotals = {};
    allBooks.forEach(b => { genreTotals[b.genre] = (genreTotals[b.genre] || 0) + 1; });

    const genreReads = {};
    allBooks.forEach(book => {
        if (bookState(book) === 'finished') genreReads[book.genre] = (genreReads[book.genre] || 0) + 1;
    });

    const maxTotal = Math.max(...Object.values(genreTotals), 1);
    document.getElementById('genre-chart').innerHTML = `
        <div class="chart-head"><span>Genre</span><span>Share of catalogue</span><span>Read</span></div>
        <div class="chart-rule"></div>
        ` + Object.entries(genreTotals)
        .sort((a, b) => b[1] - a[1])
        .map(([genre, count]) => {
            const done = genreReads[genre] || 0;
            const width = Math.round((count / maxTotal) * 100);
            return `
                <div class="chart-row${done === 0 ? ' is-empty' : ''}">
                    <span class="chart-key" title="${genre}">${genre}</span>
                    <div class="chart-bar">
                        <div class="chart-bar-fill" style="width: ${width}%"></div>
                    </div>
                    <span class="chart-fig">${done}/${count}</span>
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

    renderHighlights();
}

function resetStats() {
    if (!confirm('Clear your reading history, ratings, saved shelf and highlights?')) return;
    readingHistory = [];
    readingProgress = {};
    ratings = {};
    favorites = [];
    activityDates = [];
    storyHighlights = [];
    localStorage.removeItem('howell-reads-history');
    localStorage.removeItem('howell-reads-progress');
    localStorage.removeItem('howell-reads-ratings');
    localStorage.removeItem('howell-reads-favorites');
    localStorage.removeItem(ACTIVITY_KEY);
    localStorage.removeItem(HIGHLIGHTS_KEY);
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

// --- Reading settings: brightness, typeface, text size ---
// Each preference is written as a custom property on #reader-view rather than
// as a class, so three independent controls can compose and the reader markup
// never changes. Applied on load too, so a preference set on one story carries
// into the next.
const READER_PREFS_KEY = 'howell-reads-reader';
const READER_SIZE_MIN = 15;
const READER_SIZE_MAX = 26;
const READER_DEFAULTS = { brightness: 100, font: 'sans', size: 18 };
const READER_FONTS = {
    sans:    "'Barlow', system-ui, sans-serif",
    serif:   "'Lora', Georgia, serif",
    book:    "Georgia, 'Times New Roman', serif",
    display: "'Playfair Display', Georgia, serif"
};

let readerPrefs = Object.assign({}, READER_DEFAULTS);
try {
    const saved = JSON.parse(localStorage.getItem(READER_PREFS_KEY) || 'null');
    if (saved && typeof saved === 'object') Object.assign(readerPrefs, saved);
} catch (err) {
    readerPrefs = Object.assign({}, READER_DEFAULTS);
}

// A stored value could be anything, so it is repaired on the way in rather
// than trusted — the range inputs clamp themselves anyway.
function clampReaderPrefs() {
    const b = Number(readerPrefs.brightness);
    readerPrefs.brightness = Math.min(130, Math.max(70, isFinite(b) ? b : 100));
    const s = Number(readerPrefs.size);
    readerPrefs.size = Math.round(Math.min(READER_SIZE_MAX, Math.max(READER_SIZE_MIN, isFinite(s) ? s : 18)));
    if (!Object.prototype.hasOwnProperty.call(READER_FONTS, readerPrefs.font)) readerPrefs.font = READER_DEFAULTS.font;
}

function applyReaderPrefs() {
    clampReaderPrefs();

    const view = document.getElementById('reader-view');
    view.style.setProperty('--reader-brightness', String(readerPrefs.brightness / 100));
    view.style.setProperty('--reader-font', READER_FONTS[readerPrefs.font]);
    view.style.setProperty('--reader-size', readerPrefs.size + 'px');

    document.getElementById('rs-brightness').value = readerPrefs.brightness;
    document.getElementById('rs-brightness-out').textContent = readerPrefs.brightness + '%';
    document.getElementById('rs-size-out').textContent = readerPrefs.size + 'px';
    document.getElementById('rs-dec').disabled = readerPrefs.size <= READER_SIZE_MIN;
    document.getElementById('rs-inc').disabled = readerPrefs.size >= READER_SIZE_MAX;

    document.querySelectorAll('.rs-chip').forEach(chip => {
        const on = chip.dataset.font === readerPrefs.font;
        chip.classList.toggle('active', on);
        chip.setAttribute('aria-pressed', String(on));
    });

    try {
        localStorage.setItem(READER_PREFS_KEY, JSON.stringify(readerPrefs));
    } catch (err) { /* storage refused: the settings simply won't persist */ }
}

applyReaderPrefs();

document.getElementById('rs-brightness').addEventListener('input', (e) => {
    readerPrefs.brightness = Number(e.target.value);
    applyReaderPrefs();
});
document.getElementById('rs-dec').addEventListener('click', () => { readerPrefs.size -= 1; applyReaderPrefs(); });
document.getElementById('rs-inc').addEventListener('click', () => { readerPrefs.size += 1; applyReaderPrefs(); });
document.querySelectorAll('.rs-chip').forEach(chip => chip.addEventListener('click', () => {
    readerPrefs.font = chip.dataset.font;
    applyReaderPrefs();
}));
document.getElementById('rs-reset').addEventListener('click', () => {
    readerPrefs = Object.assign({}, READER_DEFAULTS);
    applyReaderPrefs();
});

const rsPanel = document.getElementById('rs-drawer');
const rsScrim = document.getElementById('rs-scrim');
const readerSettingsToggle = document.getElementById('reader-settings-toggle');
let rsReturnFocus = null;

function setReaderPanel(open) {
    rsPanel.classList.toggle('open', open);
    rsScrim.classList.toggle('open', open);
    readerSettingsToggle.setAttribute('aria-expanded', String(open));
    rsPanel.setAttribute('aria-hidden', String(!open));
    if (open) {
        // Stash the trigger so focus goes back to it on close, rather than
        // dropping to the top of the document.
        rsReturnFocus = document.activeElement || readerSettingsToggle;
        document.getElementById('rs-close').focus();
    } else if (rsReturnFocus) {
        if (rsReturnFocus.focus) rsReturnFocus.focus();
        rsReturnFocus = null;
    }
}

readerSettingsToggle.addEventListener('click', () =>
    setReaderPanel(!rsPanel.classList.contains('open')));
document.getElementById('rs-close').addEventListener('click', () => setReaderPanel(false));
rsScrim.addEventListener('click', () => setReaderPanel(false));
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && rsPanel.classList.contains('open')) setReaderPanel(false);
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

// --- Mobile menu ---
// On narrow screens the links move into a panel so the header stops
// overflowing. The button is display:none on desktop, so that layout is
// untouched by any of this.
const navToggle = document.getElementById('nav-toggle');

function setNavOpen(open) {
    document.querySelector('header').classList.toggle('nav-open', open);
    if (!navToggle) return;
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.querySelector('i').className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

if (navToggle) {
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        setNavOpen(!document.querySelector('header').classList.contains('nav-open'));
    });
    document.querySelectorAll('#nav-menu a').forEach(link =>
        link.addEventListener('click', () => setNavOpen(false)));
    document.addEventListener('click', (e) => {
        if (!e.target.closest || !e.target.closest('nav')) setNavOpen(false);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setNavOpen(false);
    });
}

// --- Story Text Loader ---
// Texts live one-per-file in texts/. They are fetched only when a story is
// opened, so the library page stays fast no matter how long the stories are.
const COPYRIGHT_NOTE = 'This story is still under copyright, so the full text is not reproduced here. You can read it in print, or through a library.';

let textRequest = 0;

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function setStoryMeta(words) {
    const el = document.getElementById('story-meta');
    if (!el) return;
    if (!words) { el.textContent = ''; return; }
    const minutes = Math.max(1, Math.round(words / 220));
    el.textContent = `${words.toLocaleString()} words · about ${minutes} min read`;
}

async function loadStoryText(book) {
    const container = document.getElementById('chapter-content');
    const requestId = ++textRequest;

    // No free text available: show the synopsis plus a short explanation.
    if (!book.text) {
        container.innerHTML =
            `<p>${escapeHtml(book.synopsis)}</p><p class="text-note">${escapeHtml(COPYRIGHT_NOTE)}</p>`;
        setStoryMeta(0);
        applyHighlights(book.id);
        return;
    }

    container.innerHTML = '<p class="loading-line">Setting the type&hellip;</p>';

    try {
        const response = await fetch(book.text);
        if (!response.ok) throw new Error(response.status);
        const raw = await response.text();

        // A newer story was opened while this one was loading.
        if (requestId !== textRequest) return;

        const paragraphs = raw.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);
        const words = paragraphs.join(' ').split(/\s+/).length;

        container.innerHTML = paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('');
        setStoryMeta(words);
        applyHighlights(book.id);
    } catch (error) {
        if (requestId !== textRequest) return;
        container.innerHTML =
            `<p>${escapeHtml(book.synopsis)}</p><p class="text-note">The full text could not be loaded. Please try again.</p>`;
        setStoryMeta(0);
        applyHighlights(book.id);
    }
}

// --- Highlights & margin notes ---
// Selecting a passage and keeping it is the one thing a reading site can offer
// that a blog cannot. Everything is local -- no account, no server -- so the
// record is a single array in localStorage and the marks are re-applied to the
// text every time a story opens, because the text itself is re-fetched every
// time.
const HIGHLIGHTS_KEY = 'howell-reads-highlights';

function loadHighlights() {
    try {
        const raw = JSON.parse(localStorage.getItem(HIGHLIGHTS_KEY) || '[]');
        if (!Array.isArray(raw)) return [];
        return raw.filter(h => h && typeof h.text === 'string' && h.text &&
            typeof h.story === 'number');
    } catch (e) {
        return [];
    }
}

let storyHighlights = loadHighlights();

function saveHighlights() {
    localStorage.setItem(HIGHLIGHTS_KEY, JSON.stringify(storyHighlights));
}

const normaliseText = (s) => String(s || '').replace(/\s+/g, ' ').trim();

// Inline markup must not become a space: "the <em>eye</em> opens" is still
// "the eye opens". Everything else that is an element is a boundary, because
// the reader's column is paragraphs all the way down and a paragraph break is
// a space in prose even though it is nothing at all in the markup. Tags are
// matched against a list rather than a block list so that anything unfamiliar
// counts as a break -- the safe direction.
const INLINE_TAGS = {
    A: 1, ABBR: 1, B: 1, CODE: 1, CITE: 1, EM: 1, I: 1, IMG: 1, INPUT: 1,
    LABEL: 1, MARK: 1, Q: 1, S: 1, SMALL: 1, SPAN: 1, STRONG: 1, SUB: 1,
    SUP: 1, U: 1,
};

const separates = (node) => {
    if (!node || node.nodeType !== 1) return false;
    return !INLINE_TAGS[String(node.tagName || '').toUpperCase()];
};

// Finding a stored passage again means turning a character offset back into a
// text node and an offset within it. Selections arrive as normalised prose,
// but the DOM has no spaces between paragraphs at all, so the map keeps the
// raw concatenation -- offsets in it line up exactly with the text nodes --
// alongside a normalised view that does read as prose.
function buildTextMap(root) {
    const nodes = [];
    let raw = '';
    const boundary = new Set();     // raw indices where a new block begins
    let pendingBoundary = false;

    const walk = (node) => {
        if (!node) return;
        if (node.nodeType === 3) {
            if (!node.data) return;
            if (pendingBoundary && raw.length) boundary.add(raw.length);
            pendingBoundary = false;
            nodes.push({ node, start: raw.length });
            raw += node.data;
            return;
        }
        if (node.nodeType !== 1) return;
        for (const child of node.childNodes || []) {
            const sep = separates(child);
            if (sep) pendingBoundary = true;
            walk(child);
            if (sep) pendingBoundary = true;
        }
    };
    walk(root);

    let norm = '';
    const normToRaw = [];
    let spaceAt = -1;
    for (let i = 0; i < raw.length; i++) {
        const ch = raw[i];
        if (/\s/.test(ch)) {
            // Hold the space back: it is only real if more text follows, which
            // is what makes this agree with normaliseText's trim at the ends.
            if (spaceAt < 0 && norm.length) spaceAt = i;
            continue;
        }
        // A paragraph break is a space here even though raw has nothing for
        // it. Real whitespace between blocks is left to handle it instead, so
        // that the two can never both fire and leave a doubled space.
        if (boundary.has(i) && norm.length && spaceAt < 0) {
            norm += ' ';
            normToRaw.push(i);
        }
        if (spaceAt >= 0) { norm += ' '; normToRaw.push(spaceAt); spaceAt = -1; }
        norm += ch;
        normToRaw.push(i);
    }
    return { nodes, raw, norm, normToRaw };
}

// A range can start and end on an element boundary rather than inside a text
// node, in which case the offset counts children, so walk to the first (or
// last) piece of text inside.
function rawOffsetOf(map, node, offset) {
    if (!node) return 0;
    if (node.nodeType === 3) {
        const entry = map.nodes.find(n => n.node === node);
        return entry ? entry.start + offset : 0;
    }
    if (node.nodeType === 1) {
        const kids = node.childNodes || [];
        let found = null;
        const seek = (n) => {
            if (found || !n) return;
            if (n.nodeType === 3) { found = n; return; }
            if (n.nodeType === 1) for (const c of n.childNodes || []) seek(c);
        };
        if (offset >= kids.length) {
            let tail = null;
            const findLast = (n) => {
                if (!n) return;
                if (n.nodeType === 3) { tail = n; return; }
                if (n.nodeType === 1) for (const c of n.childNodes || []) findLast(c);
            };
            findLast(kids[kids.length - 1]);
            if (tail) {
                const entry = map.nodes.find(n => n.node === tail);
                return entry ? entry.start + (tail.data || '').length : 0;
            }
            return 0;
        }
        seek(kids[offset]);
        if (found) {
            const entry = map.nodes.find(n => n.node === found);
            return entry ? entry.start : 0;
        }
    }
    return 0;
}

function rawToPosition(map, raw) {
    if (!map.nodes.length) return null;
    let best = null;
    for (const entry of map.nodes) {
        if (entry.start <= raw) best = entry;
        else break;
    }
    if (!best) best = map.nodes[0];
    const offset = Math.max(0, Math.min((best.node.data || '').length, raw - best.start));
    return { node: best.node, offset };
}

// The prefix and suffix are what stop a repeated line -- "the eye opens"
// appears more than once in Poe -- from being filed against the wrong one.
function locateIndices(map, h) {
    const needle = normaliseText(h.text);
    if (!needle) return null;
    const hay = map.norm;
    let at = -1;
    if (h.prefix) {
        const prefix = normaliseText(h.prefix);
        const i = hay.indexOf(prefix + ' ' + needle);
        if (i >= 0) at = i + prefix.length + 1;
    }
    if (at < 0 && h.suffix) {
        const i = hay.indexOf(needle + ' ' + normaliseText(h.suffix));
        if (i >= 0) at = i;
    }
    if (at < 0) at = hay.indexOf(needle);
    if (at < 0) return null;
    return { start: at, end: at + needle.length };
}

function rangeFromRaw(map, start, end) {
    const a = rawToPosition(map, start);
    const b = rawToPosition(map, end);
    if (!a || !b || !document.createRange) return null;
    const range = document.createRange();
    range.setStart(a.node, a.offset);
    range.setEnd(b.node, b.offset);
    return range;
}

// surroundContents refuses outright when a selection crosses a paragraph, and
// dragging across two paragraphs is the normal case, so the passage is marked
// node by node instead. Every offset is collected before anything is split,
// because splitting shortens a node and invalidates the ones after it.
function wrapRange(range, isNote) {
    const root = range.commonAncestorContainer;
    const targets = [];
    const consider = (node) => {
        if (!node || node.nodeType !== 3 || !node.data) return;
        // Intersects unless the node ends before the range, or starts after.
        if (range.comparePoint(node, 0) !== 1 && range.comparePoint(node, node.data.length) !== -1) {
            targets.push({
                node,
                start: node === range.startContainer ? range.startOffset : 0,
                end: node === range.endContainer ? range.endOffset : node.data.length,
            });
        }
    };
    const walk = (n) => {
        if (n.nodeType === 3) consider(n);
        else if (n.nodeType === 1) for (const c of n.childNodes || []) walk(c);
    };
    walk(root);

    if (!targets.length) return false;

    targets.forEach(({ node, start, end }) => {
        if (start >= end) return;
        let target = node;
        if (end < target.data.length) target = splitText(target, end);
        if (start > 0) target = splitText(target, start);
        if (!target.parentNode) return;
        const mark = document.createElement('mark');
        mark.className = isNote ? 'hl hl-note' : 'hl';
        target.parentNode.insertBefore(mark, target);
        mark.appendChild(target);
    });
    return true;
}

// splitText lives behind a guard so the mapping maths stays testable against a
// hand-built tree that has no DOM methods on it at all.
function splitText(node, at) {
    return node.splitText(at);
}

function applyHighlights(storyId) {
    const container = document.getElementById('chapter-content');
    if (!container) return 0;
    const mine = storyHighlights.filter(h => h.story === storyId);
    if (!mine.length) return 0;

    let applied = 0;
    mine.forEach((h) => {
        try {
            // Rebuilt each time: marking splits text nodes, so the next
            // passage has to be found against whatever is on screen now.
            const map = buildTextMap(container);
            const at = locateIndices(map, h);
            if (!at) return;
            const range = rangeFromRaw(map, map.normToRaw[at.start], map.normToRaw[at.end - 1] + 1);
            if (range && wrapRange(range, !!h.note)) applied++;
        } catch (e) {
            // A mark that cannot be placed is skipped, never fatal.
        }
    });
    return applied;
}

// --- The selection bar ---
let pendingSelection = null;

const barContains = (el) => {
    const bar = document.getElementById('sel-bar');
    return !!(bar && el && bar.contains && bar.contains(el));
};

function hideSelectionBar() {
    const bar = document.getElementById('sel-bar');
    if (!bar) return;
    bar.hidden = true;
    const actions = document.getElementById('sel-actions');
    const form = document.getElementById('sel-note-form');
    if (actions) actions.hidden = false;
    if (form) form.hidden = true;
    pendingSelection = null;
}

function showSelectionBar(rect) {
    const bar = document.getElementById('sel-bar');
    if (!bar) return;
    bar.hidden = false;                    // measured only once it is visible
    const w = bar.offsetWidth || 320;
    const h = bar.offsetHeight || 48;
    let top = rect.bottom + 8;
    if (top + h > window.innerHeight - 8) top = Math.max(8, rect.top - h - 8);
    let left = rect.left;
    if (left + w > window.innerWidth - 8) left = Math.max(8, window.innerWidth - w - 8);
    bar.style.top = Math.round(top) + 'px';
    bar.style.left = Math.round(left) + 'px';
}

function handleSelectionEnd(e) {
    if (e && e.target && barContains(e.target)) return;   // the bar's own buttons
    const sel = window.getSelection ? window.getSelection() : null;
    if (!sel || !sel.rangeCount || sel.isCollapsed) { hideSelectionBar(); return; }

    const range = sel.getRangeAt(0);
    const container = document.getElementById('chapter-content');
    if (!container || !container.contains(range.commonAncestorContainer)) { hideSelectionBar(); return; }

    const text = normaliseText(sel.toString());
    if (text.length < 2) { hideSelectionBar(); return; }

    pendingSelection = { range: range.cloneRange(), text };
    showSelectionBar(range.getBoundingClientRect());
}

function highlightPending(note) {
    if (!pendingSelection) return false;
    const container = document.getElementById('chapter-content');
    if (!container) return false;

    const { range, text } = pendingSelection;
    const map = buildTextMap(container);
    const rawStart = rawOffsetOf(map, range.startContainer, range.startOffset);
    const rawEnd = rawOffsetOf(map, range.endContainer, range.endOffset);
    const entry = {
        story: currentBookId,
        text,
        prefix: normaliseText(map.raw.slice(Math.max(0, rawStart - 48), rawStart)),
        suffix: normaliseText(map.raw.slice(rawEnd, rawEnd + 48)),
        note: normaliseText(note),
        created: Date.now(),
    };

    // Selecting the same passage twice must not file it twice. Re-marking it
    // with a note writes the note onto the entry already there instead.
    const existing = storyHighlights.findIndex(h => h.story === entry.story &&
        h.text === entry.text && h.prefix === entry.prefix && h.suffix === entry.suffix);
    if (existing >= 0) {
        if (entry.note) {
            storyHighlights[existing].note = entry.note;
            storyHighlights[existing].created = entry.created;
            saveHighlights();
        }
    } else {
        storyHighlights.push(entry);
        saveHighlights();
        wrapRange(range, !!entry.note);
    }

    hideSelectionBar();
    const sel = window.getSelection ? window.getSelection() : null;
    if (sel) sel.removeAllRanges();
    return true;
}

document.addEventListener('mouseup', handleSelectionEnd);
document.addEventListener('touchend', handleSelectionEnd);
document.addEventListener('mousedown', (e) => {
    if (e && e.target && barContains(e.target)) return;
    hideSelectionBar();
});
window.addEventListener('scroll', hideSelectionBar);

const selHighlightBtn = document.getElementById('sel-highlight');
if (selHighlightBtn) selHighlightBtn.addEventListener('click', () => highlightPending(''));

const selNoteBtn = document.getElementById('sel-note');
if (selNoteBtn) selNoteBtn.addEventListener('click', () => {
    const actions = document.getElementById('sel-actions');
    const form = document.getElementById('sel-note-form');
    if (actions) actions.hidden = true;
    if (form) form.hidden = false;
    const box = document.getElementById('sel-note-text');
    if (box && box.focus) box.focus();
});

const selCancelBtn = document.getElementById('sel-note-cancel');
if (selCancelBtn) selCancelBtn.addEventListener('click', () => {
    const actions = document.getElementById('sel-actions');
    const form = document.getElementById('sel-note-form');
    if (actions) actions.hidden = false;
    if (form) form.hidden = true;
});

const selNoteForm = document.getElementById('sel-note-form');
if (selNoteForm) selNoteForm.addEventListener('submit', (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const box = document.getElementById('sel-note-text');
    if (highlightPending(box ? box.value : '') && box) box.value = '';
    return false;
});

// --- Marginalia on the dashboard ---
function renderHighlights() {
    const box = document.getElementById('notes-list');
    if (!box) return;

    if (!storyHighlights.length) {
        box.innerHTML =
            '<div class="dash-empty"><i class="fa-solid fa-highlighter"></i>' +
            '<p>No notes yet. Select a passage while reading and it will be kept here.</p></div>';
        return;
    }

    const newestFirst = storyHighlights.slice().sort((a, b) => (b.created || 0) - (a.created || 0));
    box.innerHTML = newestFirst.map((h) => {
        const book = allBooks.find(b => b.id === h.story);
        return '<div class="note-row">' +
            '<button type="button" class="note-story" data-open="' + h.story + '">' +
            escapeHtml(book ? book.title : 'A story') + '</button>' +
            '<blockquote class="note-excerpt">&ldquo;' + escapeHtml(h.text) + '&rdquo;</blockquote>' +
            (h.note ? '<p class="note-body">' + escapeHtml(h.note) + '</p>' : '') +
            '<button type="button" class="note-del" data-drop="' + h.created +
            '" aria-label="Remove this note"><i class="fa-solid fa-xmark"></i></button>' +
            '</div>';
    }).join('');
}

const notesBox = document.getElementById('notes-list');
if (notesBox) notesBox.addEventListener('click', (e) => {
    const target = e && e.target && e.target.closest ? e.target.closest('[data-open], [data-drop]') : null;
    if (!target) return;
    if (target.dataset.drop) {
        // Keyed by creation time, which is unique, so a re-sorted list cannot
        // delete the wrong row.
        const stamp = Number(target.dataset.drop);
        const at = storyHighlights.findIndex(h => h.created === stamp);
        if (at >= 0) {
            storyHighlights.splice(at, 1);
            saveHighlights();
            renderHighlights();
        }
        return;
    }
    if (target.dataset.open) openBook(Number(target.dataset.open), document.createElement('div'));
});

// --- Next Story ---
let currentBookId = null;

function nextStory() {
    const index = allBooks.findIndex(b => b.id === currentBookId);
    const next = allBooks[(index + 1) % allBooks.length];
    openBook(next.id, document.createElement('div'));
}

function prevStory() {
    const index = allBooks.findIndex(b => b.id === currentBookId);
    const prev = allBooks[(index - 1 + allBooks.length) % allBooks.length];
    openBook(prev.id, document.createElement('div'));
}

// --- Surprise Me ---
// Forty-two titles is enough that choosing becomes a chore, so one button
// chooses. It will not hand back the story already on screen unless that is
// the only story there is.
function surpriseMe() {
    if (!allBooks.length) return null;
    let pick = allBooks[Math.floor(Math.random() * allBooks.length)];
    for (let tries = 0; allBooks.length > 1 && pick.id === currentBookId && tries < 8; tries++) {
        pick = allBooks[Math.floor(Math.random() * allBooks.length)];
    }
    openBook(pick.id, document.createElement('div'));
    return pick.id;
}

// --- Keyboard shortcuts ---
// The panel is for people who want a panel. The keys are for people who have
// already found their size and want it one notch wider without stopping to
// hunt for a button mid-sentence.
function handleReaderShortcut(e) {
    if (!e || !e.key) return false;

    const t = e.target;
    // A shortcut must never eat a character the reader is typing.
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' ||
              t.tagName === 'SELECT' || t.isContentEditable)) return false;

    const key = e.key;
    const stop = () => { if (e.preventDefault) e.preventDefault(); return true; };

    if (key === '/') {
        const lib = document.getElementById('library-view');
        if (lib.classList.contains('hidden')) showLibrary();
        const box = document.getElementById('search-input');
        if (box && box.focus) box.focus();
        return stop();
    }

    if (document.getElementById('reader-view').classList.contains('hidden')) return false;

    if (key === '+' || key === '=') { document.getElementById('rs-inc').click(); return stop(); }
    if (key === '-' || key === '_') { document.getElementById('rs-dec').click(); return stop(); }
    if (key === ']') { nextStory(); return true; }
    if (key === '[') { prevStory(); return true; }

    return false;
}

document.addEventListener('keydown', handleReaderShortcut);

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

    currentBookId = book.id;
    cardElement.classList.add('opening');

    setTimeout(() => {
        document.getElementById('story-title').textContent = book.title;
        document.getElementById('story-author').textContent = book.author;
        document.getElementById('story-genre').textContent = book.genre;
        document.getElementById('story-synopsis').querySelector('p').textContent = book.synopsis;
        document.getElementById('chapter-title').textContent = book.chapterTitle;
        loadStoryText(book);

        const readerImg = book.image || `https://picsum.photos/seed/${book.id}/800/500`;
        document.getElementById('story-image').src = readerImg;

        // Reset the synopsis panel for each new story
        document.getElementById('synopsis-wrapper').classList.add('hidden');
        document.getElementById('toggle-synopsis').textContent = 'Read Synopsis';

        // The cover colour tints the panel via --reader-tint (background-color);
        // CSS decides what wash to lay over it, so the reader stays readable in
        // both themes instead of always assuming white text on a dark panel.
        const reader = document.getElementById('story-reader-container');
        reader.style.setProperty('--reader-tint', '#2a2a2a');
        getDominantColor(readerImg, (color) => {
            reader.style.setProperty('--reader-tint', color);
        });

        // Record the story in reading history for the dashboard
        markAsRead(book.id);

        // Seed progress at zero. Without this a freshly opened story lands in
        // history with no progress at all, which the legacy rule reads as
        // "Finished" -- so the Finished tab would flash on for a moment and
        // then fall back the instant the reader scrolled.
        if (readingProgress[book.id] === undefined) {
            readingProgress[book.id] = 0;
            saveProgress();
        }

        document.getElementById('library-view').classList.add('hidden');
        document.getElementById('dashboard-view').classList.add('hidden');
        document.getElementById('reader-view').classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        cardElement.classList.remove('opening');
    }, 600);
}

// --- Boot ---
initializeData();

