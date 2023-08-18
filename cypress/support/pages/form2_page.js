class Form2Page {
  selecionarCorNoComboBox(cor) {
    cy.get('#colors').select(cor);
  }

  verificarCorDoFundo(cor) {
    cy.get('#form2').should('have.css', 'background-color', cor);
  }
}

export default Form2Page;