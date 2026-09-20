import { site } from './data/site.js';
import { initializeContact } from './contact.js';
import { initializeGallery } from './gallery.js';
import { initializeVideos } from './videos.js';

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const skipLink = document.querySelector('.skip-link');
const content = document.querySelector('#conteudo');
function closeMenu() { nav.dataset.open = 'false'; toggle.setAttribute('aria-expanded', 'false'); }
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.dataset.open = String(open);
});
nav?.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
document.querySelectorAll('[data-contact]').forEach(link => {
  link.href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de conversar com a equipe do Dr. Filipe Basile sobre uma consulta.')}`;
});
skipLink?.addEventListener('click', () => {
  content.setAttribute('tabindex', '-1');
  requestAnimationFrame(() => content.focus({ preventScroll: true }));
});
content?.addEventListener('blur', () => content.removeAttribute('tabindex'));
initializeContact();
initializeGallery();
initializeVideos();
