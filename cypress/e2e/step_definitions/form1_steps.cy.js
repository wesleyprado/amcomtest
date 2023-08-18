import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Form1Page from '../../support/pages/form1_page';
import DataHelper from '../../support/helpers/DataHelper';

const form1_page = new Form1Page();

Given('que o usuário acessou o link', () => {
  DataHelper.readYamlFile('url', 'URL_BASE')
  cy.get('@dataYaml').then((url) => {
    cy.visit(url);
  });
});

When('o usuário preencher os campos obrigatórios', () => {
  form1_page.preencherCamposObrigatorios();
});

When('o usuário clicar no botão \'Enviar\'', () => {
  form1_page.clicarBotaoEnviar();
});

Then('um modal deve ser exibido com a mensagem {string}', (mensagem) => {
  form1_page.verificarModalExibido(mensagem);
});

Then('o usuário deve ser capaz de fechar o modal clicando no botão de fechar', () => {
  form1_page.fecharModal();
});