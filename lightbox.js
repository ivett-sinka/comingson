/* ─────────────────────────────────────────────────────────────────
   lightbox.js  –  Portfólió képnézegető
   ─────────────────────────────────────────────────────────────────
   Szükséges HTML elemek (egyszer, bárhol a <body>-ban):

     <div id="lightbox" role="dialog" aria-modal="true" aria-label="Képnézegető">
       <button class="lb-btn lb-close" id="lb-close" aria-label="Bezárás">…</button>
       <button class="lb-btn lb-prev"  id="lb-prev"  aria-label="Előző kép">…</button>
       <img id="lb-img" src="" alt="">
       <button class="lb-btn lb-next"  id="lb-next"  aria-label="Következő kép">…</button>
     </div>

   Képek: minden .dark-p-item > img automatikusan bekerül a galériába.

   Kezelők:
     – Egér:      .dark-p-item kattintás nyit, gombokra kattintás lapoz/zár
     – Billentyű: ← → lapoz, Escape zár
     – Ujj:       vízszintes swipe lapoz (≥ 40 px elmozdulás)
   ───────────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── DOM ─────────────────────────────────────────────────────── */
  const items    = [...document.querySelectorAll('.dark-p-item')];
  const images   = items.map(item => item.querySelector('img'));
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lb-img');

  if (!lightbox || !lbImg || images.length === 0) return; // védelem

  let current = 0;

  /* ── Megnyitás / Bezárás ─────────────────────────────────────── */
  function open(index) {
    current = index;
    lbImg.src = images[index].src;
    lbImg.alt = images[index].alt;
    lbImg.style.opacity = '1';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ── Lapozás ─────────────────────────────────────────────────── */
  function navigate(dir) {
    current = (current + dir + images.length) % images.length;
    lbImg.style.opacity = '0';
    setTimeout(() => {
      lbImg.src = images[current].src;
      lbImg.alt = images[current].alt;
      lbImg.style.opacity = '1';
    }, 220);
  }

  /* ── Egér / kattintás ────────────────────────────────────────── */
  items.forEach((item, i) => item.addEventListener('click', () => open(i)));

  document.getElementById('lb-close').addEventListener('click', close);
  document.getElementById('lb-prev').addEventListener('click', () => navigate(-1));
  document.getElementById('lb-next').addEventListener('click', () => navigate(1));

  // sötét háttérre kattintva bezár
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) close();
  });

  /* ── Billentyűzet ────────────────────────────────────────────── */
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });

  /* ── Érintő / swipe ──────────────────────────────────────────── */
  let touchStartX = 0;
  let touchStartY = 0;

  lightbox.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  lightbox.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;

    // csak vízszintes swipe számít (dx dominál dy felett)
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;

    if (dx < 0) navigate(1);   // swipe balra → következő
    if (dx > 0) navigate(-1);  // swipe jobbra → előző
  }, { passive: true });

})();
