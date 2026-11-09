# Casal Maromba — instruções para o Claude

App de treino (PWA) de Leandro (Galaxy) e Fernanda (iPhone), publicado pelo GitHub Pages em
https://leandrobsette-wq.github.io/casal-maromba/

## Subir um protocolo novo
1. Edite `protocolos/leandro.json` ou `protocolos/fernanda.json` (formato `{"protocolos":[...]}`).
2. Adicione o protocolo novo à lista, com `id` novo e `inicio` correto; mantenha os anteriores (o histórico do app depende do `id`).
3. Valide o JSON (`python3 -m json.tool arquivo`) antes do commit.
4. Faça commit e push na branch `main`. O app busca os protocolos ao abrir.

Formato de cada protocolo: ver o documento do projeto `claude/formato-ficha-app.md` ou um protocolo existente.
Campos do exercício: nome, aparelho, series ("4 x 15-12-10-6"), carga, observacao, intervalo (segundos), video (opcional).

## Mudanças no app
- Todo o app está em `index.html`. Ao mudar arquivos do app, aumente `VERSAO` em `sw.js` para os celulares baixarem a versão nova.
- Treinos feitos e cargas ficam no celular (localStorage), não no repositório.
