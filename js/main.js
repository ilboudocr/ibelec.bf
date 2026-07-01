/* ===========================
   IBELEC — Scripts principaux
   =========================== */

document.addEventListener('DOMContentLoaded', function () {

  // ── SCROLL REVEAL ──
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(function (el) { observer.observe(el); });

  // ── FORMULAIRE DE CONTACT ──
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('.btn-submit');
      btn.textContent = 'Envoi en cours…';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = '✓ Message envoyé !';
        btn.style.background = '#06D6A0';
        form.reset();
        setTimeout(function () {
          btn.textContent = 'Envoyer le message →';
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      }, 1200);
    });
  }

  // ── NAVIGATION ACTIVE AU SCROLL ──
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', function () {
    var current = '';
    sections.forEach(function (section) {
      var top = section.offsetTop - 120;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  });

});
