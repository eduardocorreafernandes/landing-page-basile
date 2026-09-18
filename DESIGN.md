---
name: "Clínica Basile — proposta de modernização"
description: "Uma experiência editorial clínica em que a decisão começa em uma conversa esclarecida."
colors:
  blue-deep: "#123e50"
  blue-light: "#1b5062"
  cream: "#f9f5ef"
  sand: "#e7d8c5"
  gold: "#a17a44"
  ink: "#193f4f"
  muted: "#516872"
  line: "#cfcabe"
  clinic-mist: "#e7edea"
  form-surface: "#f0e9df"
typography:
  display:
    fontFamily: "Urbanist, sans-serif"
    fontSize: "clamp(58px, 6.05vw, 88px)"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Urbanist, sans-serif"
    fontSize: "clamp(40px, 4.2vw, 60px)"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Urbanist, sans-serif"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  square: "0"
  subtle: "2px"
  round: "50%"
spacing:
  page-desktop: "56px"
  page-tablet: "36px"
  page-mobile: "20px"
  section-desktop: "100px"
  section-mobile: "68px"
  control-x: "24px"
  control-y: "16px"
components:
  button-primary:
    backgroundColor: "{colors.blue-deep}"
    textColor: "{colors.cream}"
    rounded: "{rounded.subtle}"
    padding: "16px 24px"
    height: "58px"
  button-primary-hover:
    backgroundColor: "#21586e"
  button-light:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.blue-deep}"
    rounded: "{rounded.subtle}"
    padding: "16px 24px"
    height: "58px"
  topic-unselected:
    backgroundColor: "#faf7f1"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "15px 17px"
    height: "60px"
  topic-selected:
    backgroundColor: "{colors.blue-deep}"
    textColor: "{colors.cream}"
    rounded: "{rounded.square}"
    padding: "15px 17px"
    height: "60px"
---

# Design System: Clínica Basile

## Overview

**Creative North Star: "A conversa esclarecida"**

O sistema transmite autoridade médica sem transformar a página em vitrine de resultados. A experiência começa pelo médico e por sua formação, apresenta procedimentos e estrutura, explica a jornada de atendimento e conduz a uma conversa consciente. O tom visual é editorial, sóbrio e acolhedor: grandes títulos, espaço generoso, linhas finas e fotografias reais organizam a leitura.

A primeira viewport é a expressão concentrada dessa direção: headline à esquerda, retrato oficial à direita, CTA para conversa e CRM/RQE visíveis. O azul profundo estabelece confiança, o creme reduz a frieza institucional, o dourado marca ênfases pontuais e o sand cria passagens mais humanas entre blocos.

**Key Characteristics:**

- Composição editorial assimétrica, de baixa densidade e leitura progressiva.
- Fotografia documental da Clínica Basile e do Dr. Filipe, sem imagens genéricas ou artificiais.
- Superfícies planas definidas por cor, bordas finas e ritmo, sem cartões elevados.
- Conversão baseada em conversa e avaliação individual, sem promessas clínicas.

Este `DESIGN.md` pertence ao projeto Basile e pode orientar sua manutenção e suas extensões. O molde genérico de landing page vive separado; não se deve extrair deste arquivo uma identidade reutilizável para outros profissionais ou transportar dados, fotos e credenciais da Basile para outros projetos.

## Colors

A paleta combina azul clínico profundo, neutros quentes e dourado contido. O contraste é usado para estruturar a narrativa; a cor de destaque permanece rara.

### Primary

- **Azul Basile profundo** (`#123e50`): fundos de manifesto e fecho, CTA principal, estados selecionados, legendas fotográficas e navegação móvel ativa.
- **Azul Basile claro** (`#1b5062`): variação registrada no sistema para extensões próximas do azul principal.

### Secondary

- **Dourado discreto** (`#a17a44`): palavras em itálico editorial, linhas de links, moldura do retrato e foco visível. Não funciona como grande superfície.
- **Areia acolhedora** (`#e7d8c5`): credenciais, jornada e blocos de apoio; aquece o percurso entre áreas clínicas.

### Neutral

- **Creme de fundo** (`#f9f5ef`): fundo dominante, controles claros e contraste sobre azul.
- **Azul-tinta** (`#193f4f`): texto principal.
- **Azul acinzentado** (`#516872`): texto secundário e metadados.
- **Linha mineral** (`#cfcabe`): divisores e contornos de baixa ênfase.
- **Névoa clínica** (`#e7edea`): galeria da estrutura e recursos.
- **Superfície de formulário** (`#f0e9df`): contêiner da conversa.

**A regra do dourado raro.** Use dourado para orientar o olhar em palavras, linhas e foco; preserve azul e creme como vozes dominantes.

## Typography

**Display Font:** Urbanist (com fallback `sans-serif`)  
**Body Font:** Manrope (com fallback `sans-serif`)

**Character:** Urbanist cria títulos contemporâneos e humanos, de peso regular e tracking fechado. Manrope sustenta leitura funcional, credenciais, navegação e formulário com neutralidade.

### Hierarchy

- **Display** (400, `clamp(58px, 6.05vw, 88px)`, 1.07): headline da primeira viewport; em mobile usa `clamp(53px, 12.5vw, 74px)`.
- **Headline** (400, `clamp(40px, 4.2vw, 60px)`, 1.07): títulos de seção; em mobile, 41px como base contextual.
- **Title** (400, 32px, 1.07): títulos de componentes e subtítulos; variações observadas entre 22px e 35px conforme função.
- **Body** (400, 16px, 1.7): leitura corrente, com largura máxima global de 65ch e blocos editoriais geralmente mais estreitos.
- **Label** (400, 12–14px, 1.7): CRM/RQE, legendas, progresso, metadados e rodapé.

**A regra do peso sereno.** Hierarquia vem de escala, espaço e contraste; títulos permanecem em peso 400, com 500 reservado a itens que precisam de mais estrutura.

## Layout

O contêiner principal mede até 1240px e preserva margens laterais de 56px no desktop, 36px abaixo de 1100px, 24px abaixo de 800px e 20px abaixo de 700px. Seções principais usam 100px de respiro vertical no desktop e 68px no mobile.

Desktop usa pares assimétricos: hero `1.08fr / 1fr`, médico `1fr / 1fr`, procedimentos `1.15fr / 1fr`, conversa `.83fr / 1.17fr` e fecho `1.05fr / 1fr`. A assimetria associa texto e evidência visual sem formar uma grade de cartões. A galeria clínica usa três colunas; recursos também usam três colunas.

Os breakpoints observados são 1100px, 800px, 700px e 370px. A 700px, as composições principais passam a uma coluna, a galeria vira uma sequência vertical, o menu se torna expansível e o formulário mantém duas opções por linha. A 370px, as opções passam para uma coluna. Fotografias recebem recortes específicos por contexto; não aplicar um `object-position` único a todas.

A ordem narrativa é parte da composição: médico → formação/manifesto → procedimentos → estrutura → jornada → contato → FAQ → recursos → fecho. Extensões devem preservar a progressão de autoridade, compreensão e ação.

## Elevation & Depth

O sistema é plano por padrão e não usa sombras em seus contêineres principais. A profundidade vem de alternância tonal, fotografias recortadas, sobreposição da legenda do retrato, bordas de 1px e mudança de posição no hover. O backdrop escuro do diálogo (`#0a1b23d9`) é funcional e exclusivo da visualização ampliada.

**A regra da superfície plana.** Não introduza sombras de cartão para separar conteúdo; use cor de fundo, linha, recorte e espaço.

## Shapes

A linguagem é essencialmente ortogonal. Botões têm raio sutil de 2px; formulários, cards de apoio, painéis e imagens permanecem quadrados. Círculos aparecem apenas em controles com significado próprio, como rádio e ícone de reprodução. Linhas finas e setas lineares são o motivo geométrico recorrente. O retrato do hero recebe um canto desenhado em dourado, não uma moldura completa.

## Components

### Buttons

- **Shape:** retângulo quase reto, raio de 2px, altura mínima de 58px.
- **Primary:** azul profundo com texto creme, padding `16px 24px` e seta linear; pode ocupar a largura do formulário.
- **Light:** creme com texto azul profundo sobre fundos escuros; no hover recebe areia.
- **Hover / Focus:** elevação visual de 2px por transformação; mudança tonal em 200ms; foco global de 3px dourado com offset de 5px.

### Links de texto

- Linha dourada inferior, seta horizontal e espaçamento amplo entre rótulo e ícone.
- No hover, o texto assume dourado. Links de conteúdo secundário podem usar sublinhado simples com offset.

### Cards / Containers

- **Corner Style:** reto, sem raio.
- **Background:** sand para apoio, névoa clínica para infraestrutura e recursos, creme para a base.
- **Shadow Strategy:** nenhuma sombra.
- **Border:** linhas de 1px em `line` ou variações locais de contraste equivalente.
- **Internal Padding:** 25–39px nos principais blocos compactos.

### Inputs / Fields

- Campo de nome em creme, borda de 1px, raio zero e padding `13px 16px`.
- Opções de assunto são blocos selecionáveis de no mínimo 60px; estado selecionado troca para azul profundo e creme.
- O foco das opções usa outline dourado de 3px com offset de 3px. Estados de erro e desabilitado não estão definidos no projeto atual; não os invente silenciosamente.

### Navigation

- Cabeçalho creme com borda inferior, logo oficial à esquerda e links Manrope de 14px à direita.
- Hover em dourado; CTA de contato recebe linha dourada.
- Abaixo de 700px, o menu abre em painel creme e o contato vira um bloco azul de alto contraste. `Escape` fecha o menu e devolve foco ao controle.

### Hero editorial

- Headline, apresentação profissional, descrição, CTA e CRM/RQE formam o lado textual.
- O lado visual usa o retrato oficial em recorte vertical de 585px, legenda azul sobreposta e canto dourado.
- A entrada animada ocorre apenas acima de 700px e quando o usuário não solicita movimento reduzido.

### Acordeões e galeria

- Procedimentos e FAQ usam `details/summary`, divisores e sinal de mais que gira para indicar expansão.
- A galeria usa fotografias reais, zoom sutil no hover e diálogo nativo com legenda, contagem, setas e fechamento explícito.

### Fluxo de conversa

- Formulário em duas etapas: escolher assunto e revisar a mensagem antes de abrir o WhatsApp.
- Nenhum dado é enviado ou armazenado pela página. O nome é opcional; a mensagem permanece editável no WhatsApp.
- O fluxo usa exclusivamente dados e identidade Basile, mesmo que sua arquitetura tenha origem no molde Maraísa.

## Do's and Don'ts

### Do:

- **Do** preserve o azul profundo, creme, dourado e areia como eixo da identidade.
- **Do** use Urbanist para títulos e Manrope para texto, controles e metadados.
- **Do** mantenha CRM-SP 108931 e RQE 69886 próximos ao primeiro CTA e nos pontos de responsabilidade profissional.
- **Do** use fotos reais, responsivas e com alt text factual; mantenha a proveniência em `docs/SOURCES.md`.
- **Do** respeite foco visível, link de salto, HTML semântico, controles por teclado e `prefers-reduced-motion`.
- **Do** trate a consulta individual como o espaço de decisão e preserve o aviso de que a página é uma proposta independente.

### Don't:

- **Don't** reutilize retratos, contatos, depoimentos ou identidade de Maraísa ou de qualquer outro cliente.
- **Don't** introduza promessas de resultado, diagnóstico, indicação de cirurgia, preço, avaliação ou credencial sem fonte verificada.
- **Don't** use bancos de imagem, retratos gerados ou estética de antes/depois no lugar da documentação oficial.
- **Don't** transforme a composição em uma coleção de cards arredondados com sombras.
- **Don't** use dourado como fundo dominante ou decoração abundante.
- **Don't** publique, envie ou armazene dados do formulário; a ação final continua sob controle da pessoa no WhatsApp.
- **Don't** trate este documento como molde genérico: ele orienta apenas a manutenção e as extensões do projeto Basile.
