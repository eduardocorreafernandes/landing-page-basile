---
name: "Clínica Basile — proposta de modernização"
description: "Uma experiência editorial clínica em que a decisão começa em uma conversa esclarecida."
colors:
  brand: "#3971ad"
  brand-light: "#3e7ec2"
  paper: "#ffffff"
  surface: "#f4f4f4"
  accent: "#337ab7"
  ink: "#202020"
  muted: "#626262"
  line: "#d7dce1"
  clinic-surface: "#f4f4f4"
  form-surface: "#fafafa"
  brand-dark: "#1b4784"
  field-border: "#89939d"
  divider-strong: "#c8cdd2"
  gallery-backdrop: "#152c48e6"
  play-shadow: "#00000026"
typography:
  display:
    fontFamily: "Urbanist, sans-serif"
    fontSize: "clamp(58px, 5.55vw, 80px)"
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
    backgroundColor: "{colors.brand}"
    textColor: "{colors.paper}"
    rounded: "{rounded.subtle}"
    padding: "16px 24px"
    height: "58px"
  button-primary-hover:
    backgroundColor: "#1b4784"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.brand}"
    rounded: "{rounded.subtle}"
    padding: "16px 24px"
    height: "58px"
  topic-unselected:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "15px 17px"
    height: "60px"
  topic-selected:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "15px 17px"
    height: "60px"
---

# Design System: Clínica Basile

## Overview

**Creative North Star: "A conversa esclarecida"**

O sistema transmite autoridade médica sem transformar a página em vitrine de resultados. A experiência começa pelo médico e por sua formação, apresenta procedimentos e estrutura, explica a jornada de atendimento e conduz a uma conversa consciente. O tom visual é editorial, sóbrio e acolhedor: grandes títulos, espaço generoso, linhas finas e fotografias reais organizam a leitura.

A primeira viewport é a expressão concentrada dessa direção: headline à esquerda, retrato oficial à direita, CTA para conversa e CRM/RQE visíveis. Os azuis oficiais #3971AD e #3E7EC2 conectam a composição à marca Basile. Branco e cinzas neutros separam os blocos; bege, areia e dourado não fazem parte desta identidade.

**Key Characteristics:**

- Composição editorial assimétrica, de baixa densidade e leitura progressiva.
- Fotografia documental da Clínica Basile e do Dr. Filipe, sem imagens genéricas ou artificiais.
- Superfícies planas definidas por cor, bordas finas e ritmo, sem cartões elevados.
- Conversão baseada em conversa e avaliação individual, sem promessas clínicas.

Este `DESIGN.md` pertence ao projeto Basile e pode orientar sua manutenção e suas extensões. O molde genérico de landing page vive separado; não se deve extrair deste arquivo uma identidade reutilizável para outros profissionais ou transportar dados, fotos e credenciais da Basile para outros projetos.

## Colors

A paleta vem do CSS oficial da Clínica Basile, revisitado em 20/09/2026. Cores de apoio foram neutralizadas e o texto secundário escurecido para preservar o contraste.

### Primary

- **Azul oficial** (`#3971ad`): CTA, manifesto, fecho, legenda do retrato e opção de vídeo selecionada. Branco sobre esse tom tem contraste de 5,07:1.
- **Azul de títulos** (`#3e7ec2`): títulos grandes e credenciais. Contraste de 4,23:1 sobre branco; não usar em texto pequeno.
- **Azul escuro** (`#1b4784`): hover e foco reforçado, também presente no site original.
- **Azul de links** (`#337ab7`): links sobre branco. Em fundos cinza, usar `#3971ad`.

### Neutral

- **Branco** (`#ffffff`): base e texto sobre fundos azuis.
- **Cinza de seção** (`#f4f4f4`): credenciais, clínica, jornada e blocos de apoio.
- **Formulário** (`#fafafa`): superfície suave para a conversa.
- **Texto** (`#202020`) e **texto secundário** (`#626262`): leitura sobre branco e cinza.
- **Divisores** (`#d7dce1`) e **bordas de campos** (`#89939d`).

**Regra de identidade.** A composição pode compartilhar o molde comercial; as cores pertencem à Basile. Não reintroduzir bege, areia ou dourado da Maraísa.

## Typography

**Display Font:** Urbanist (com fallback `sans-serif`)  
**Body Font:** Manrope (com fallback `sans-serif`)

**Character:** Urbanist cria títulos contemporâneos e humanos, de peso regular e tracking fechado. Manrope sustenta leitura funcional, credenciais, navegação e formulário com neutralidade.

### Hierarchy

- **Display** (400, `clamp(58px, 5.55vw, 80px)`, 1.07): headline da primeira viewport; em mobile usa `clamp(53px, 12.5vw, 74px)`.
- **Headline** (400, `clamp(40px, 4.2vw, 60px)`, 1.07): títulos de seção; em mobile, 41px como base contextual.
- **Title** (400, 32px, 1.07): títulos de componentes e subtítulos; variações observadas entre 22px e 35px conforme função.
- **Body** (400, 16px, 1.7): leitura corrente, com largura máxima global de 65ch e blocos editoriais geralmente mais estreitos.
- **Label** (400, 12–14px, 1.7): CRM/RQE, legendas, progresso, metadados e rodapé.

**A regra do peso sereno.** Hierarquia vem de escala, espaço e contraste; títulos permanecem em peso 400, com 500 em itens de apoio e 600 na ênfase sobre as seções azuis.

## Layout

O contêiner principal mede até 1240px e preserva margens laterais de 56px no desktop, 36px abaixo de 1100px, 24px abaixo de 800px e 20px abaixo de 700px. Seções principais usam 100px de respiro vertical no desktop e 68px no mobile.

Desktop usa pares assimétricos: hero `1.08fr / 1fr`, médico `1fr / 1fr`, procedimentos `1.15fr / 1fr`, conversa `.83fr / 1.17fr` e fecho `1.05fr / 1fr`. A assimetria associa texto e evidência visual sem formar uma grade de cartões. A galeria clínica usa três colunas; a biblioteca de vídeos combina player e lista de sete assuntos, com empilhamento abaixo de 800px.

Os breakpoints principais são 1100px, 1000px, 800px, 700px e 370px. O menu torna-se expansível a 1000px para manter todos os destinos disponíveis. A 700px, as composições principais passam a uma coluna, a galeria vira uma sequência vertical e o formulário mantém duas opções por linha. A 370px, as opções passam para uma coluna. Fotografias recebem recortes específicos por contexto; não aplicar um `object-position` único a todas.

A ordem narrativa é parte da composição: apresentação → credenciais → vídeos → médico/manifesto → procedimentos → estrutura → jornada → contato → FAQ → fecho. Extensões devem preservar a progressão de autoridade, compreensão e ação.

## Elevation & Depth

O sistema é plano por padrão e não usa sombras em seus contêineres principais. A profundidade vem de alternância tonal, fotografias recortadas, sobreposição da legenda do retrato, bordas de 1px e mudança de posição no hover. A única sombra é funcional no controle branco sobre a capa de vídeo: `0 5px 18px #00000026`. O backdrop escuro do diálogo (`#152c48e6`) é funcional e exclusivo da visualização ampliada.

**A regra da superfície plana.** Não introduza sombras de cartão para separar conteúdo; use cor de fundo, linha, recorte e espaço.

## Shapes

A linguagem é essencialmente ortogonal. Botões têm raio sutil de 2px; formulários, cards de apoio, painéis e imagens permanecem quadrados. Círculos aparecem apenas em controles com significado próprio, como rádio e ícone de reprodução. Linhas finas e setas lineares são o motivo geométrico recorrente. O retrato do hero recebe um canto desenhado em azul, não uma moldura completa.

## Components

### Buttons

- **Shape:** retângulo quase reto, raio de 2px, altura mínima de 58px.
- **Primary:** azul oficial com texto branco, padding `16px 24px` e seta linear; pode ocupar a largura do formulário.
- **Light:** branco com texto azul oficial sobre fundos escuros; no hover recebe cinza claro.
- **Hover / Focus:** elevação visual de 2px por transformação; mudança tonal em 200ms; foco global de 3px azul com offset de 5px.

### Links de texto

- Linha dourada inferior, seta horizontal e espaçamento amplo entre rótulo e ícone.
- No hover, o texto assume azul. Links de conteúdo secundário podem usar sublinhado simples com offset.

### Cards / Containers

- **Corner Style:** reto, sem raio.
- **Background:** surface para apoio, névoa clínica para infraestrutura e recursos, branco para a base.
- **Shadow Strategy:** nenhuma sombra.
- **Border:** linhas de 1px em `line` ou variações locais de contraste equivalente.
- **Internal Padding:** 25–39px nos principais blocos compactos.

### Inputs / Fields

- Campo de nome em branco, borda de 1px, raio zero e padding `13px 16px`.
- Opções de assunto são blocos selecionáveis de no mínimo 60px; estado selecionado troca para azul oficial e branco.
- O foco das opções usa outline azul de 3px com offset de 3px. Estados de erro e desabilitado não estão definidos no projeto atual; não os invente silenciosamente.

### Navigation

- Cabeçalho branco com borda inferior, logo oficial à esquerda e links Manrope de 14px à direita.
- Hover em azul; CTA de contato recebe linha dourada.
- Abaixo de 1000px, o menu abre em painel branco e o contato vira um bloco azul de alto contraste. `Escape` fecha o menu e devolve foco ao controle.

### Hero editorial

- Headline, apresentação profissional, descrição, CTA e CRM/RQE formam o lado textual.
- O lado visual usa o retrato oficial em recorte vertical de 585px, legenda azul sobreposta e canto azul.
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

- **Do** preserve os azuis oficiais, branco e cinzas neutros como eixo da identidade.
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
- **Don't** reintroduza tons de bege ou dourado de outras marcas.
- **Don't** publique, envie ou armazene dados do formulário; a ação final continua sob controle da pessoa no WhatsApp.
- **Don't** trate este documento como molde genérico: ele orienta apenas a manutenção e as extensões do projeto Basile.

## Vídeos oficiais

A biblioteca aparece após as credenciais, com acesso no menu e no hero. Sete miniaturas locais correspondem aos sete vídeos do perfil original; dados completos em `docs/SOURCES.md`. A seleção atual fica azul e possui `aria-current`.

Selecionar um assunto encerra o player anterior, atualiza a capa e leva o foco ao controle de reprodução. O iframe de `youtube-nocookie.com` é criado somente após ação explícita em “Assistir ao vídeo”. Há comando de parar e link permanente para abrir no YouTube. Sem JavaScript, todos os links continuam acessíveis. Reprodução não solicitada e autoavanço não fazem parte do fluxo.

Abaixo de 800px o player precede a lista; até 500px as sete opções ficam em uma coluna, sem carrossel nem itens ocultos. O aviso ao lado do player explica o carregamento externo. O formulário continua sem persistência ou envio pelo site.
