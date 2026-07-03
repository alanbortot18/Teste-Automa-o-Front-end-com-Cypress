# Teste Cypress - Mercado Livre

Projeto de automacao de testes de front-end com Cypress para o site Mercado Livre.

## Como rodar

Instale as dependencias, caso ainda nao existam:

```bash
npm install
```

Execute em modo headless:

```bash
npm test
```

Abra a interface grafica do Cypress:

```bash
npm run cy:open
```

## Cenarios automatizados

1. Pesquisa por `Notebook` e validacao da lista de resultados.
2. Busca por `Cabo USB`, abertura do primeiro produto e tentativa de adicionar ao carrinho.
3. Validacao visual da pagina de login, conferindo campo de usuario/e-mail e botao `Continuar`.

## Observacao

O Mercado Livre pode exibir CAPTCHA, verificacao de seguranca ou redirecionamento para login durante a execucao automatizada. O segundo cenario aceita esses fluxos como resultado esperado quando o site bloqueia a finalizacao direta do carrinho.

Neste ambiente, o script `npm test` usa `scripts/run-cypress.js` para remover a variavel `ELECTRON_RUN_AS_NODE` antes de iniciar o Cypress, evitando falha de inicializacao do Electron no Windows.
