import './videos.css';

export function initializeVideos() {
  const library = document.querySelector('[data-video-library]');
  if (!library) return;

  const screen = library.querySelector('.video-screen');
  const cover = library.querySelector('[data-video-play]');
  const poster = cover.querySelector('img');
  const title = library.querySelector('[data-video-title]');
  const category = library.querySelector('[data-video-category]');
  const external = library.querySelector('[data-video-external]');
  const stop = library.querySelector('.video-stop');
  const status = library.querySelector('.video-selection-status');
  const choices = [...library.querySelectorAll('[data-video-id]')];
  let selected = choices.find(choice => choice.getAttribute('aria-current') === 'true') || choices[0];

  function showCover() {
    screen.querySelector('iframe')?.remove();
    cover.hidden = false;
    stop.hidden = true;
  }

  choices.forEach(choice => choice.addEventListener('click', event => {
    // Preserve native open-in-new-tab gestures and the no-JavaScript fallback.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    showCover();
    selected = choice;
    const name = choice.querySelector('span').textContent;
    const thumbnail = choice.querySelector('img');
    choices.forEach(item => item.removeAttribute('aria-current'));
    choice.setAttribute('aria-current', 'true');
    poster.src = thumbnail.src;
    cover.href = choice.href;
    cover.setAttribute('aria-label', `Reproduzir: ${name}`);
    title.textContent = name;
    category.textContent = choice.dataset.videoCategory;
    external.href = choice.href;
    status.textContent = `${name} selecionado. Use Assistir ao vídeo para reproduzir.`;
    cover.focus({ preventScroll: true });
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (screen.getBoundingClientRect().top < 0) screen.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' });
  }));

  cover.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${selected.dataset.videoId}?autoplay=1&rel=0`;
    iframe.title = `Vídeo do Dr. Filipe Basile: ${title.textContent}`;
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    cover.hidden = true;
    screen.append(iframe);
    stop.hidden = false;
    iframe.focus();
  });

  stop.addEventListener('click', () => {
    showCover();
    cover.focus({ preventScroll: true });
  });
}
