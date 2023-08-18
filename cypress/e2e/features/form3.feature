Feature: Mensagem de Horário

  Scenario: Validar mensagem dinâmica conforme horário
    Given que o usuário acessou o link
    When o usuário clica no botão saudação
    Then o usuário deve ver a mensagem correspondente ao horário atual