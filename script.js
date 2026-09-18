/* ════════════════════════════════════════════════
   시내모바일 공신폰 홈페이지 — 2026-09-02
   ════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── 모바일 메뉴 ───────────────────── */
  var burger  = document.getElementById('burger');
  var drawer  = document.getElementById('drawer');
  var drawerX = document.getElementById('drawerX');
  var drawerBg= document.getElementById('drawerBg');

  function openDrawer() {
    drawer.classList.add('on');
    drawerBg.classList.add('on');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('on');
    drawerBg.classList.remove('on');
    document.body.style.overflow = '';
  }

  if (burger)   burger.addEventListener('click', openDrawer);
  if (drawerX)  drawerX.addEventListener('click', closeDrawer);
  if (drawerBg) drawerBg.addEventListener('click', closeDrawer);
  if (drawer) {
    drawer.querySelectorAll('nav a').forEach(function (a) {
      a.addEventListener('click', closeDrawer);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  /* ── 자주 묻는 질문 아코디언 ───────── */
  var items = document.querySelectorAll('.fq');
  items.forEach(function (item) {
    var btn = item.querySelector('.fq-q');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var wasOpen = item.classList.contains('on');
      items.forEach(function (o) {
        o.classList.remove('on');
        var b = o.querySelector('.fq-q');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('on');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
  if (items.length) {
    items[0].classList.add('on');
    var first = items[0].querySelector('.fq-q');
    if (first) first.setAttribute('aria-expanded', 'true');
  }

  /* ── 시연 영상: 항상 음소거로 시작 ──
     (브라우저가 이전 음량을 기억하는 경우가 있어 코드로 한 번 더 못 박음.
      보고 싶은 분은 재생 후 음량 버튼으로 켤 수 있습니다) */
  document.querySelectorAll('.vid video').forEach(function (v) {
    v.muted = true;
    v.defaultMuted = true;
  });

  /* ── 영상: 하나 재생하면 나머지 정지 ── */
  var videos = document.querySelectorAll('.vid video');
  videos.forEach(function (v) {
    v.addEventListener('play', function () {
      videos.forEach(function (other) {
        if (other !== v && !other.paused) other.pause();
      });
    });
  });

  /* ── 맨 위로 버튼 ──────────────────── */
  var topBtn = document.getElementById('totop');
  function onScroll() {
    if (!topBtn) return;
    if (window.pageYOffset > 400) topBtn.classList.add('on');
    else topBtn.classList.remove('on');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (topBtn) {
    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
