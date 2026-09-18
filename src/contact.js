import { site, topics } from './data/site.js';

export function buildMessage(topic, name = '') {
  if (!Object.hasOwn(topics, topic)) return null;
  const cleanName = String(name).replace(/[\r\n\t]+/g, ' ').trim().slice(0, 70);
  const greeting = cleanName ? `Olá! Meu nome é ${cleanName}.` : 'Olá!';
  const subject = topic === 'consulta'
    ? 'Gostaria de agendar uma primeira consulta com o Dr. Filipe Basile para conversar sobre minhas expectativas e conhecer as possibilidades.'
    : `Gostaria de conversar com a equipe do Dr. Filipe Basile sobre ${topics[topic]} e entender como funciona a avaliação.`;
  return `${greeting}\n\n${subject}\n\nPodem me orientar sobre o agendamento e os próximos passos?`;
}

export function buildContactUrl(topic, name = '') {
  const message = buildMessage(topic, name);
  if (!message || !/^\d{12,15}$/.test(site.whatsapp)) return null;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function initializeContact() {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  const choose = form.querySelector('#choose-step');
  const review = form.querySelector('#review-step');
  const name = form.querySelector('#visitor-name');
  const preview = form.querySelector('#message-preview');
  const send = form.querySelector('#send-message');
  const heading = form.querySelector('#review-title');
  let selected = null;
  const update = () => { preview.textContent = buildMessage(selected, name.value) ?? ''; send.href = buildContactUrl(selected, name.value) ?? `https://wa.me/${site.whatsapp}`; };
  const selectStep = () => { choose.hidden = false; review.hidden = true; };
  form.addEventListener('submit', event => {
    event.preventDefault();
    const value = new FormData(form).get('topic');
    if (!Object.hasOwn(topics, value)) return;
    selected = value;
    update();
    choose.hidden = true;
    review.hidden = false;
    heading.focus({ preventScroll: true });
  });
  form.querySelector('.form-back').addEventListener('click', () => {
    selectStep();
    form.querySelector('input[name=topic]:checked')?.focus({ preventScroll: true });
  });
  name.addEventListener('input', update);
  document.querySelectorAll('[data-topic]').forEach(link => link.addEventListener('click', () => {
    const value = link.dataset.topic;
    if (!Object.hasOwn(topics, value)) return;
    selectStep();
    form.querySelector(`input[value="${value}"]`).checked = true;
  }));
}
