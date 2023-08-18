Feature: Seleção de Cor

  Scenario: Usuário seleciona uma cor e o fundo muda
    Given que o usuário acessou o link
    When o usuário selecionar a cor "Azul" no combo box
    Then o fundo do formulário deve estar na cor "Azul"