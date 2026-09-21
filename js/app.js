// ============ APP LOGIC ============

// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) setTimeout(() => loader.classList.add('hide'), 1400);
});

// ============ RENDER USER AREA ============
function renderUserArea() {
  const area = document.getElementById('userArea');
  if (!area) return;
  const user = getCurrentUser();
  if (user) {
    area.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px">
        <div class="user-avatar" onclick="location.href='profile.html'" title="${user.name}">
          ${user.name.charAt(0).toUpperCase()}
        </div>
      </div>`;
  } else {
    area.innerHTML = `<button class="user-btn" onclick="location.href='login.html'">Masuk</button>`;
  }
}

// ============ CARD HTML ============
function createCard(v) {
  const badgeHTML = v.badge ? `<span class="badge ${v.badge === 'NEW' ? 'new' : ''}">${v.badge}</span>` : '';
  return `
    <div class="video-card" onclick="location.href='detail.html?id=${v.id}'">
      <div class="thumb">
        <img src="${v.thumbnail}" alt="${v.title}" loading="lazy"
             onerror="this.src='https://via.placeholder.com/480x270/1a1a26/ff1744?text=YOUR+PLAY'">
        ${badgeHTML}
        <span class="duration">${v.duration}</span>
      </div>
      <div class="video-info">
        <div class="video-title">${v.title}</div>
        <div class="video-meta">
          <span>${v.category.toUpperCase()}</span>
          <span>👁 ${v.views}</span>
        </div>
      </div>
    </div>`;
}

function renderGrid(id, list) {
  const el = document.getElementById(id);
  if (!el) return;
  if (!list.length) {
    el.innerHTML = `<p style="color:#a0a0b0;grid-column:1/-1;text-align:center;padding:40px">Tidak ada video.</p>`;
    return;
  }
  el.innerHTML = list.map((v, i) =>
    `<div style="animation-delay:${i * 0.05}s">${createCard(v)}</div>`
  ).join('');
}

// ============ HOME ============
function loadHome() {
  renderUserArea();
  const trending = VIDEOS.filter(v => ['HOT','TRENDING','TOP','NEW'].includes(v.badge)).slice(0, 8);
  renderGrid('trendingGrid', trending);
  renderGrid('animeGrid', getVideosByCategory('anime'));
  renderGrid('filmGrid', getVideosByCategory('film'));
  renderGrid('dramaGrid', getVideosByCategory('drama'));
  renderHero();
}

// ============ HERO ============
function renderHero() {
  const slidesEl = document.getElementById('heroSlides');
  const dotsEl = document.getElementById('heroDots');
  if (!slidesEl) return;
  const featured = VIDEOS.filter(v => v.badge === 'TOP' || v.badge === 'TRENDING').slice(0, 4);
  slidesEl.innerHTML = featured.map((v, i) => `
    <div class="hero-slide ${i === 0 ? 'active' : ''}"
         style="background-image:url('${v.thumbnail}')">
      <div class="hero-content">
        <span class="hero-badge">🔥 ${v.badge}</span>
        <h1 class="hero-title">${v.title}</h1>
        <div class="hero-meta">
          <span>⭐ ${v.rating}</span>
          <span>📅 ${v.year}</span>
          <span>👁 ${v.views}</span>
          <span>${v.genre}</span>
        </div>
        <p class="hero-desc">${v.desc}</p>
        <div class="hero-buttons">
          <button class="btn-primary" onclick="location.href='detail.html?id=${v.id}'">▶ Tonton Sekarang</button>
          <button class="btn-ghost" onclick="location.href='detail.html?id=${v.id}'">ℹ Detail</button>
        </div>
      </div>
    </div>
  `).join('');
  dotsEl.innerHTML = featured.map((_, i) =>
    `<div class="hero-dot ${i === 0 ? 'active' : ''}" onclick="goSlide(${i})"></div>`
  ).join('');
  startHeroAutoplay();
}

let heroIndex = 0;
let heroTimer;
function startHeroAutoplay() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    if (!slides.length) return;
    slides[heroIndex].classList.remove('active');
    dots[heroIndex].classList.remove('active');
    heroIndex = (heroIndex + 1) % slides.length;
    slides[heroIndex].classList.add('active');
    dots[heroIndex].classList.add('active');
  }, 5000);
}
function goSlide(i) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  slides[heroIndex].classList.remove('active');
  dots[heroIndex].classList.remove('active');
  heroIndex = i;
  slides[heroIndex].classList.add('active');
  dots[heroIndex].classList.add('active');
  startHeroAutoplay();
}

// ============ SEARCH & CATEGORY ============
function doSearch() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!q) return;
  const results = VIDEOS.filter(v =>
    v.title.toLowerCase().includes(q) ||
    v.genre.toLowerCase().includes(q) ||
    v.category.toLowerCase().includes(q)
  );
  document.getElementById('searchQuery').textContent = `"${q}" (${results.length})`;
  renderGrid('searchGrid', results);
  document.getElementById('homeContent').classList.add('hidden');
  document.getElementById('searchResults').classList.remove('hidden');
  document.getElementById('searchResults').scrollIntoView({behavior:'smooth'});
}
function filterCategory(cat) {
  const list = getVideosByCategory(cat);
  document.getElementById('searchQuery').textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
  renderGrid('searchGrid', list);
  document.getElementById('homeContent').classList.add('hidden');
  document.getElementById('searchResults').classList.remove('hidden');
}
document.addEventListener('DOMContentLoaded', () => {
  const si = document.getElementById('searchInput');
  if (si) si.addEventListener('keypress', e => { if (e.key === 'Enter') doSearch(); });
});

// ============ DETAIL PAGE ============
function loadDetail() {
  renderUserArea();
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const v = getVideoById(id);
  if (!v) {
    document.querySelector('.detail-page').innerHTML = '<h2 style="text-align:center;padding:60px">Video tidak ditemukan 😢</h2>';
    return;
  }
  document.getElementById('ytPlayer').src = `https://www.youtube.com/embed/${v.videoId}?autoplay=1&rel=0`;
  document.getElementById('videoTitle').textContent = v.title;
  document.getElementById('videoViews').textContent = `👁 ${v.views} views`;
  document.getElementById('videoYear').textContent = `📅 ${v.year}`;
  document.getElementById('videoRating').textContent = `⭐ ${v.rating}`;
  document.getElementById('videoGenre').textContent = v.genre;
  document.getElementById('videoDesc').textContent = v.desc;
  document.title = v.title + ' - YOUR PLAY';
  addToHistory(v.id);
  updateWatchlistButton(v.id);

  // Related
  const related = VIDEOS.filter(x => x.category === v.category && x.id !== v.id).slice(0, 6);
  const relList = document.getElementById('relatedList');
  relList.innerHTML = related.map(r => `
    <div class="related-item" onclick="location.href='detail.html?id=${r.id}'">
      <div class="related-thumb">
        <img src="${r.thumbnail}" onerror="this.src='https://via.placeholder.com/120x68/1a1a26/ff1744'">
      </div>
      <div class="related-info">
        <h4>${r.title}</h4>
        <p>⭐ ${r.rating} • ${r.year}</p>
      </div>
    </div>
  `).join('');
}
function updateWatchlistButton(videoId) {
  const btn = document.getElementById('watchlistBtn');
  if (!btn) return;
  const list = getWatchlist();
  if (list.includes(videoId)) {
    btn.textContent = '✓ Di Watchlist';
    btn.classList.add('active');
  } else {
    btn.textContent = '+ Tambah ke Watchlist';
    btn.classList.remove('active');
  }
}
function toggleWatchlist() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (id) toggleWatchlistById(id);
}
function toggleWatchlistById(id) {
  const user = getCurrentUser();
  if (!user) { 
    if (confirm('Login dulu untuk menambah ke Watchlist. Login sekarang?')) 
      location.href = 'login.html';
    return;
  }
  let list = getWatchlist();
  if (list.includes(id)) {
    list = list.filter(x => x !== id);
  } else {
    list.push(id);
  }
  saveWatchlist(list);
  updateWatchlistButton(id);
}
function shareVideo() {
  if (navigator.share) {
    navigator.share({ title: document.title, url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert('Link disalin ke clipboard ✓');
  }
}

// ============ PROFILE ============
function loadProfile() {
  renderUserArea();
  const user = getCurrentUser();
  if (!user) { location.href = 'login.html'; return; }
  document.getElementById('profileAvatar').textContent = user.name.charAt(0).toUpperCase();
  document.getElementById('profileName').textContent = user.name;
  document.getElementById('profileEmail').textContent = user.email;

  const wl = getWatchlist().map(getVideoById).filter(Boolean);
  renderGrid('watchlistGrid', wl);

  const hist = getHistory().map(getVideoById).filter(Boolean);
  renderGrid('historyGrid', hist);
}
function showTab(tab) {
  document.querySelectorAll('.profile-tabs button').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('watchlistTab').classList.toggle('hidden', tab !== 'watchlist');
  document.getElementById('historyTab').classList.toggle('hidden', tab !== 'history');
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('trendingGrid')) loadHome();
});