import test from 'node:test';
import assert from 'node:assert/strict';
import { buildMessage, buildContactUrl } from '../src/contact.js';

test('usa o WhatsApp específico do médico e codifica nome e quebras de linha', () => {
  const url = new URL(buildContactUrl('mamas', 'Ana Júlia & Maria'));
  assert.equal(url.hostname, 'wa.me');
  assert.equal(url.pathname, '/5516997209791');
  assert.match(url.searchParams.get('text'), /Meu nome é Ana Júlia & Maria/);
  assert.match(url.searchParams.get('text'), /cirurgia das mamas/);
  assert.equal(url.searchParams.size, 1);
});

test('permite contato sem nome e sem afirmar indicação de cirurgia', () => {
  const message = buildMessage('consulta');
  assert.match(message, /^Olá!\n\nGostaria de agendar uma primeira consulta/);
  assert.doesNotMatch(message, /nome é|indicad[ao]|apto|apta/);
});

test('recusa assuntos inválidos e propriedades herdadas', () => {
  for (const topic of ['inexistente', '__proto__', 'constructor', '', null]) {
    assert.equal(buildMessage(topic), null);
    assert.equal(buildContactUrl(topic), null);
  }
});

test('normaliza espaços e limita nome antes de preparar mensagem', () => {
  assert.match(buildMessage('face', '  Ana\nSilva\t '), /Meu nome é Ana Silva\./);
  assert.doesNotMatch(buildMessage('face', 'A'.repeat(200)), /A{71}/);
});
