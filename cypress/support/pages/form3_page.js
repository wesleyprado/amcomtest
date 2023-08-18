class Form3Page {
  clicarBotaoSaudacao() {
    cy.get('.button').contains('Saudação').click();
  }

  verificarMensagemDinamica() {
    const horaAtual = new Date().getHours();
    let mensagemEsperada = '';

    if (horaAtual >= 0 && horaAtual < 12) {
      mensagemEsperada = 'Bom dia';
    } else if (horaAtual >= 12 && horaAtual < 18) {
      mensagemEsperada = 'Boa tarde';
    } else {
      mensagemEsperada = 'Boa noite';
    }

    cy.on('window:alert', (mensagemAlert) => {
      expect(mensagemAlert).to.equal(mensagemEsperada)
    })
  }
}

export default Form3Page;