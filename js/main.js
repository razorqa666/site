document.addEventListener('DOMContentLoaded', function () {
  // ===== BURGER MENU =====
  const burger = document.querySelector('.burger');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (burger) burger.addEventListener('click', openSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);

  // Close on nav link click (mobile)
  document.querySelectorAll('.sidebar-nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (window.innerWidth < 992) closeSidebar();
    });
  });

  // ===== ACTIVE NAV LINK =====
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ===== SUBSCRIBE FORM =====
  document.querySelectorAll('.sidebar-subscribe').forEach(function (form) {
    var btn = form.querySelector('button');
    var inp = form.querySelector('input');
    if (btn) {
      btn.addEventListener('click', function () {
        if (inp && inp.value.trim()) {
          inp.value = '';
          btn.textContent = 'Подписан ✓';
          btn.style.background = '#00a880';
          setTimeout(function () {
            btn.textContent = 'Подписаться';
            btn.style.background = '';
          }, 2500);
        }
      });
    }
  });
});
