# Clínica Basile — landing page para prospecção

Proposta inspirada na estrutura aprovada da Maraísa, em projeto independente. Fotos, logotipo, credenciais e contatos pesquisados no site original; inventário em [docs/SOURCES.md](docs/SOURCES.md).

## Rodar e compilar

Node 22.12+.

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

Desenvolvimento em http://127.0.0.1:5174; preview de produção em http://127.0.0.1:4174. No Windows desta sessão, se npm não encontrar o shell, usar `npm --script-shell C:\Windows\System32\cmd.exe run dev` (ou build).

## Publicar na Hostinger

Mesmo processo Vite da Maraísa: raiz `./`, Node 22, instalação `npm ci`, build `npm run build`, saída `dist`. Não há servidor, middleware, chave ou `.env`. Não subir node_modules, originais ou pastas de QA.

Imagens e fontes estão em `src/assets`, entram no pipeline Vite e recebem hash no nome. Alterar uma foto gera nova URL automaticamente: não é preciso renomear manualmente nem depender de limpar cache. Em servidor próprio, HTML deve revalidar e assets com hash podem receber cache longo.

## Conteúdo e comportamento

- `index.html`: conteúdo semântico e links oficiais, legível sem JavaScript.
- `src/styles.css` e `src/sections.css`: sistema visual e responsive.
- `src/data/site.js`: contatos e assuntos verificados.
- `src/contact.js`: resumo natural para WhatsApp, sem armazenamento nem envio automático.
- `src/gallery.js`: fotos ampliadas, setas, Escape e foco nativo do dialog.
- `scripts/prepare-assets.py`: converte originais da pasta irmã `basile-source-assets`, ou da pasta passada como argumento. Requer Pillow.
- `scripts/download-fonts.py`: reproduz obtenção de fontes abertas e licenças.

O botão final abre o WhatsApp; envio e confirmação do agendamento acontecem fora da página. Não há backend, formulário silencioso, cookies de marketing, analytics, aconselhamento médico nem coleta persistente. Nenhuma mensagem à clínica foi enviada durante construção ou testes.

## Proposta comercial

Rodapé identifica o estudo independente; `noindex,nofollow` evita apresentá-lo como site oficial. Remover essa marcação somente ao aprovar e publicar o projeto para o cliente. O domínio oficial e o projeto Maraísa não foram modificados.

O molde sem identidade do cliente é mantido separadamente em `../landing_page_molde`, com configuração e workflow para novos prospectos.
