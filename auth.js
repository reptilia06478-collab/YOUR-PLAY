// ============ AUTH SYSTEM (LocalStorage) ============

function getUsers() {
  return JSON.parse(localStorage.getItem('yp_users') || '[]');
}
function saveUsers(users) {
  localStorage.setItem('yp_users', JSON.stringify(users));
}
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('yp_currentUser') || 'null');
}
function setCurrentUser(user) {
  localStorage.setItem('yp_currentUser', JSON.stringify(user));
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const pass = document.getElementById('regPass').value;

  const users = getUsers();
  if (users.find(u => u.email === email)) {
    alert('Email sudah terdaftar! Silakan login.');
    return;
  }
  const user = { name, email, pass, joined: new Date().toISOString() };
  users.push(user);
  saveUsers(users);
  setCurrentUser(user);
  alert(`Selamat datang, ${name}! 🎉`);
  window.location.href = 'index.html';
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const pass = document.getElementById('loginPass').value;

  const users = getUsers();
  const user = users.find(u => u.email === email && u.pass === pass);
  if (!user) {
    alert('Email atau password salah!');
    return;
  }
  setCurrentUser(user);
  alert(`Halo lagi, ${user.name}! 👋`);
  window.location.href = 'index.html';
}

function logout() {
  if (confirm('Yakin ingin logout?')) {
    localStorage.removeItem('yp_currentUser');
    window.location.href = 'index.html';
  }
}

// ============ WATCHLIST & HISTORY ============
function getWatchlist() {
  const user = getCurrentUser();
  if (!user) return [];
  return JSON.parse(localStorage.getItem(`yp_watchlist_${user.email}`) || '[]');
}
function saveWatchlist(list) {
  const user = getCurrentUser();
  if (!user) return;
  localStorage.setItem(`yp_watchlist_${user.email}`, JSON.stringify(list));
}
function toggleWatchlist(videoId) {
  const user = getCurrentUser();
  if (!user) { alert('Login dulu untuk menambah ke Watchlist!'); return; }
  let list = getWatchlist();
  if (list.includes(videoId)) {
    list = list.filter(id => id !== videoId);
    alert('Dihapus dari Watchlist');
  } else {
    list.push(videoId);
    alert('Ditambahkan ke Watchlist ✓');
  }
  saveWatchlist(list);
  updateWatchlistButton(videoId);
}

function getHistory() {
  const user = getCurrentUser();
  if (!user) return [];
  return JSON.parse(localStorage.getItem(`yp_history_${user.email}`) || '[]');
}
function addToHistory(videoId) {
  const user = getCurrentUser();
  if (!user) return;
  let history = getHistory();
  history = history.filter(id => id !== videoId);
  history.unshift(videoId);
  if (history.length > 30) history = history.slice(0, 30);
  localStorage.setItem(`yp_history_${user.email}`, JSON.stringify(history));
}
