import DataHelper from '../../support/helpers/DataHelper';

class Form1Page {
  preencherCamposObrigatorios() {
    DataHelper.readYamlFile('form1', 'user')
      cy.get('@dataYaml').then((user) => {
      cy.get('#fname').type(user.nome);
      cy.get('#lname').type(user.sobrenome);
      cy.get('#phone').type(user.telefone);
    })
  }

  clicarBotaoEnviar() {
    cy.get('.button').contains('Enviar').click();
  }

  verificarModalExibido(mensagem) {
    cy.get('.modal')
      .should('be.visible')
      .contains(mensagem);
  }

  fecharModal() {
    cy.get('.modal .close').click();
    cy.get('.modal').should('not.be.visible');
  }
}
export default Form1Page;