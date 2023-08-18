import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Form3Page from '../../support/pages/form3_page';

const form3_page = new Form3Page();

When('o usuário clica no botão saudação', () => {
  form3_page.clicarBotaoSaudacao();
});

Then('o usuário deve ver a mensagem correspondente ao horário atual', () => {
  form3_page.verificarMensagemDinamica();
});