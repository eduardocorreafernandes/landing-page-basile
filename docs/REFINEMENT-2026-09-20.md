# Revisão visual e vídeos — 20/09/2026

## Alterações

- Paleta própria da Clínica Basile: azuis oficiais, branco e cinzas neutros em todas as seções, controles e favicon. Removidos bege, areia e dourado.
- Sete vídeos oficiais em destaque após as credenciais, com miniaturas locais, player sob demanda, indicação do assunto selecionado e saída para o YouTube.
- Acessos aos vídeos no menu e na apresentação inicial. Menus de tablet e celular mantêm todos os destinos disponíveis.
- Melhor contraste nos botões, foco visível, botão de fechar galeria de 44px, título inicial com quebra de linha mais equilibrada e mensagem do formulário sem leitura repetitiva a cada tecla.
- Conteúdo, fotografias, contatos, registros profissionais e caráter de proposta independente preservados.

## Verificação

- Build de produção Vite concluído; todos os assets referenciados incluídos no pacote com hash.
- Quatro testes do fluxo de WhatsApp aprovados.
- Navegador Edge/Playwright: 1440, 1024, 900, 768, 390 e 320px, sem rolagem horizontal, erros JavaScript ou imagens quebradas.
- Seleção dos sete vídeos, criação/remoção do iframe, retorno à capa, navegação por teclado, menu móvel, formulário e galeria verificados. Nenhuma requisição ao YouTube antes do clique de reprodução.
- Links dos vídeos funcionam como links externos sem JavaScript. O teste automatizado do ciclo do player usa resposta controlada do iframe; em uma verificação adicional real, o vídeo de prótese de mama reproduziu normalmente, com avanço do contador de tempo.
- Revisão visual independente em desktop e celular sem impedimentos restantes.
- Detector Impeccable executado uma vez. Recomendações de documentação de cores e escala tipográfica revisadas: variações responsivas existentes mantidas para preservar a composição; novos azuis e neutros registrados em DESIGN.md. Cores de backdrop e sombra do controle de reprodução são funcionais.

## Publicação

Alteração autorizada pelo usuário para a branch main, usando Git Bash. O resultado da publicação é informado junto da entrega; este documento registra implementação e verificações locais.
