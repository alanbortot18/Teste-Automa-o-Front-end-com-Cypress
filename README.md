Relatório de Testes de Automação de Front-end com Cypress

Site: Mercado Livre (https://www.mercadolivre.com.br/)

1. Identificação dos Cenários de Teste
Para testar diferentes funcionalidades da plataforma, foram mapeados os seguintes fluxos:
Cenário 1: Pesquisar por um determinado produto. Validar se, ao buscar por "Notebook", a lista de resultados e os títulos dos produtos são exibidos corretamente.
Cenário 2: Adicionar um item ao carrinho de compras. Acessar um produto e clicar no botão de adicionar ao carrinho, validando se a notificação ou a página do carrinho é apresentada.
Cenário 3: Validação visual da página de Login. Acessar a página de início de sessão e verificar se os elementos visuais (campo de e-mail e botões) estão sendo renderizados.
2. Configuração do Ambiente Cypress
Para rodar os testes localmente, o ambiente foi configurado com os seguintes passos:
Inicialização do projeto Node.js: npm init -y
Instalação do Cypress: npm install cypress --save-dev
Abertura da interface do Cypress para criação da estrutura de pastas: npx cypress open
3. Scripts de Teste
Abaixo estão os scripts desenvolvidos em Cypress para executar as ações de navegação, cliques, preenchimento de formulários e verificações visuais:
JavaScript

// Arquivo: cypress/e2e/mercadolivre.cy.js

describe('Testes de Funcionalidade - Mercado Livre', () => {

  beforeEach(() => {
    // Acessa o site antes de cada teste
    cy.visit('https://www.mercadolivre.com.br/');
  });

  it('Cenário 1: Pesquisar por um determinado produto', () => {
    // Preenche o campo de busca e aperta Enter
    cy.get('input.nav-search-input').type('Notebook{enter}');
    
    // Verifica se os resultados apareceram na tela
    cy.get('.ui-search-layout').should('be.visible');
    // Verifica a aparência visual confirmando que a palavra buscada está no título da página
    cy.contains('.ui-search-breadcrumb__title', 'Notebook', { matchCase: false }).should('be.visible');
  });

  it('Cenário 2: Adicionar um item ao carrinho de compras', () => {
    // Busca por um produto
    cy.get('input.nav-search-input').type('Cabo USB{enter}');
    
    // Clica no primeiro produto da lista
    cy.get('.ui-search-result__image').first().click();
    
    // Clica no botão de adicionar ao carrinho
    // Obs: As classes do ML podem variar, 'ui-pdp-actions__addition' é um exemplo comum
    cy.get('button').contains('Adicionar ao carrinho').click();
    
    // Valida que o usuário foi redirecionado para a criação de conta ou carrinho
    cy.url().should('include', '/cart');
  });

  it('Cenário 3: Validar página de Login', () => {
    // Navega para a página de login
    cy.get('nav#nav-header-menu').contains('Entre').click();
    
    // Verifica a aparência visual do formulário de login
    cy.get('input[name="user_id"]').should('be.visible'); // Campo de e-mail/usuário
    cy.get('button').contains('Continuar').should('be.visible'); // Botão de prosseguir
  });
});
(OBS: O Mercado Livre atualiza frequentemente as classes CSS (DOM) e possui proteções antibot. Talvez seja necessário inspecionar os elementos no dia do teste e atualizar os seletores, como nav-search-input, caso tenham mudado).

4. Relatório de Resultados e Execução dos Testes
Resultados: (Você deve rodar os testes na sua máquina e descrever se eles passaram ou falharam).
Erros encontrados: Devido a sistemas de segurança (CAPTCHAs) do Mercado Livre, o Cenário 2 pode ser interrompido solicitando a verificação de "Não sou um robô".
Capturas de tela: (Lembre-se de colar os prints da interface gráfica do Cypress mostrando os testes "Verdes" (Pass) no seu arquivo PDF final, conforme exigido ).


5. Melhorias e Otimizações
Para tornar os scripts mais eficientes, propomos as seguintes modificações:
Uso do Padrão Page Object Model (POM): Separar os seletores CSS da lógica de teste para facilitar a manutenção do código.
Uso de cy.intercept(): Em vez de depender do carregamento real e demorado da rede em todas as pesquisas de produtos, podemos "mockar" (simular) as respostas da API do Mercado Livre, deixando os testes muito mais rápidos e menos propensos a falhas de conexão.
Adicionar Testes de Responsividade: Incluir comandos como cy.viewport('iphone-x') para criar novos cenários e garantir que a aparência visual do site funcione bem em dispositivos móveis.

