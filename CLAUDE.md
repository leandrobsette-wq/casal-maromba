# Casal Maromba — instruções para o Claude

App de treino (PWA) de Leandro (Galaxy) e Fernanda (iPhone), publicado pelo GitHub Pages em
https://leandrobsette-wq.github.io/casal-maromba/

## Subir um protocolo novo
1. Edite `protocolos/leandro.json` ou `protocolos/fernanda.json` (formato `{"protocolos":[...]}`).
2. Adicione o protocolo novo ao FIM da lista, com `id` novo, `inicio` = data em que sobe e `publicado` = data e hora do envio (ISO, ex.: `2026-11-10T08:00:00-03:00`); mantenha os anteriores (o histórico do app depende do `id`).
   O app usa sempre como atual o último protocolo que subiu (maior `publicado`; sem ele, o último da lista). Não existe mais "protocolo com início futuro": subiu, já substitui o anterior.
3. Valide o JSON (`python3 -m json.tool arquivo`) antes do commit.
4. Faça commit e push na branch `main`. O app busca os protocolos ao abrir.

Formato de cada protocolo: ver o documento do projeto `claude/formato-ficha-app.md` ou um protocolo existente.
Todo protocolo novo leva o campo `foco`, mostrado no card "Foco" da tela inicial:
`"foco": {"prioridades": ["até 3 itens curtos, ~20 caracteres cada"], "resumo": "1 a 2 frases curtas sobre como o protocolo distribui a prioridade na semana"}`
O app não tem mais importação: protocolos entram só pelo repositório.
Campos do exercício: nome, aparelho, series ("4 x 15-12-10-6"), carga, observacao, intervalo (segundos), video (opcional).

## Mudanças no app
- Todo o app está em `index.html`. Ao mudar arquivos do app, aumente `VERSAO` em `sw.js` para os celulares baixarem a versão nova.
- Treinos feitos e cargas ficam no celular (localStorage), não no repositório.
