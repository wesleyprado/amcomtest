import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Form2Page from '../../support/pages/form2_page';

const form2_page = new Form2Page();

When('o usuário selecionar a cor {string} no combo box', (corSelecionada) => {
  form2_page.selecionarCorNoComboBox(corSelecionada);
});

Then('o fundo do formulário deve estar na cor {string}', (corEsperada) => {
  form2_page.verificarCorDoFundo(corEsperada);
});