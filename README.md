# Casal Maromba — app de treino (PWA)

App instalável para Leandro (Galaxy) e Fernanda (iPhone).

## Estrutura
- `index.html` — o app inteiro
- `protocolos/leandro.json` e `protocolos/fernanda.json` — protocolos de cada um, no formato `{"protocolos":[ ... ]}`
- `perfis.json` — nomes que aparecem na tela inicial
- `manifest.webmanifest`, `sw.js`, `icons/` — o que faz o app instalar e funcionar sem internet

## Publicar (GitHub Pages)
1. Crie um repositório público chamado `casal-maromba` no github.com.
2. Envie todos os arquivos desta pasta (Add file > Upload files).
3. Settings > Pages > Branch `main`, pasta `/ (root)` > Save.
4. Endereço: https://SEU-USUARIO.github.io/casal-maromba/

## Instalar
- Galaxy (Chrome): menu ⋮ > Instalar app.
- iPhone (Safari): Compartilhar > Adicionar à Tela de Início.

## Protocolo novo
- Pelo Claude: ele atualiza `protocolos/<pessoa>.json` no repositório; o app busca ao abrir.
- Pelo app: Novo protocolo > colar o texto > Salvar protocolo.
