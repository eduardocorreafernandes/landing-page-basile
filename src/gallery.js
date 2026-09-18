import surgery from './assets/photos/centro-cirurgico-960.webp';
import recovery from './assets/photos/recuperacao-960.webp';
import waiting from './assets/photos/espera-960.webp';

export function initializeGallery() {
  const dialog = document.querySelector('.gallery-dialog');
  const images = [
    { src: surgery, label: 'Centro cirúrgico da Clínica Basile' },
    { src: recovery, label: 'Sala de recuperação da Clínica Basile' },
    { src: waiting, label: 'Espaço de espera da Clínica Basile' },
  ];
  let current = 0;
  const render = () => {
    const image = images[current];
    dialog.querySelector('img').src = image.src;
    dialog.querySelector('img').alt = image.label;
    dialog.querySelector('figcaption').textContent = image.label;
    dialog.querySelector('#gallery-count').textContent = `${current + 1} de ${images.length}`;
  };
  const advance = delta => { current = (current + delta + images.length) % images.length; render(); };
  document.querySelectorAll('[data-gallery]').forEach(button => button.addEventListener('click', () => {
    current = Number(button.dataset.gallery);
    render();
    dialog.showModal();
  }));
  dialog.querySelector('.gallery-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.gallery-previous').addEventListener('click', () => advance(-1));
  dialog.querySelector('.gallery-next').addEventListener('click', () => advance(1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); advance(event.key === 'ArrowRight' ? 1 : -1); }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const { left, top, right, bottom } = dialog.getBoundingClientRect();
    if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) dialog.close();
  });
}
