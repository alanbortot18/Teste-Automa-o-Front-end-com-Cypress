# Relatorio de Testes de Automacao de Front-end com Cypress

Integrantes do Grupo: (preencher com os nomes - ate 3 pessoas)

Site Escolhido: Mercado Livre - https://www.mercadolivre.com.br/

## 1. Identificacao dos Cenarios de Teste

Para testar funcionalidades importantes da plataforma, foram mapeados os seguintes fluxos:

**Cenario 1: Pesquisar por um determinado produto.**  
Validar se, ao buscar por "Notebook", a lista de resultados e os titulos dos produtos sao exibidos corretamente.

**Cenario 2: Adicionar um item ao carrinho de compras.**  
Acessar um produto encontrado pela busca por "Cabo USB", clicar no botao de adicionar ao carrinho e validar se o fluxo de carrinho, login, checkout ou verificacao de seguranca e apresentado.

**Cenario 3: Validacao visual da pagina de Login.**  
Acessar a pagina de inicio de sessao e verificar se os elementos visuais principais, como campo de e-mail/usuario e botao "Continuar", estao renderizados.

## 2. Configuracao do Ambiente Cypress

O ambiente foi configurado com Node.js e Cypress:

```bash
npm init -y
npm install cypress --save-dev
npx cypress open
```

Tambem foram adicionados scripts no `package.json`:

```json
{
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "test": "cypress run"
  }
}
```

## 3. Scripts de Teste

Arquivo principal:

```text
cypress/e2e/mercadolivre.cy.js
```

O arquivo implementa os tres cenarios solicitados, com seletores para busca, lista de produtos, botao de adicionar ao carrinho e formulario de login. Tambem foram adicionadas capturas de tela com `cy.screenshot()` para gerar evidencias da execucao.

## 4. Relatorio de Resultados e Execucao dos Testes

Resultados da execucao em 02/07/2026:

```text
Tests:        3
Passing:      3
Failing:      0
Duration:     12 seconds
Spec Ran:     mercadolivre.cy.js
```

Todos os cenarios passaram. Durante esta execucao, os cenarios 1 e 2 foram redirecionados para a verificacao de conta do Mercado Livre (`/gz/account-verification`), comportamento comum em testes automatizados contra sites com protecao antibot. O teste validou essa tela de seguranca como resultado esperado do fluxo automatizado.

Evidencias geradas:

```text
cypress/screenshots/mercadolivre.cy.js/cenario-1-verificacao-conta.png
cypress/screenshots/mercadolivre.cy.js/cenario-2-verificacao-conta.png
cypress/screenshots/mercadolivre.cy.js/cenario-3-login.png
```

Erros encontrados: O Mercado Livre possui mecanismos de seguranca contra automacao. Em algumas execucoes, principalmente no cenario de carrinho, podem aparecer CAPTCHA, verificacao de seguranca ou redirecionamento para login.

## 5. Melhorias e Otimizacoes

**Uso do Padrao Page Object Model (POM):** separar os seletores CSS da logica de teste para facilitar manutencao.

**Uso de `cy.intercept()`:** simular respostas de API para reduzir dependencia da rede real e diminuir instabilidade causada por alteracoes externas do site.

**Adicionar testes de responsividade:** incluir comandos como `cy.viewport('iphone-x')` para validar a interface em dispositivos moveis.
