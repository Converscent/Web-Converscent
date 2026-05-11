// Converscent — shared nav
(function () {
  const ham = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-links');
  if (ham && menu) {
    ham.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }
  // Mark active link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-p]').forEach(a => {
    if (a.dataset.p === page) a.classList.add('active');
  });
})();
