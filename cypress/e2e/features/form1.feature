Feature: Submissão de Dados no Formulário

Scenario: Preenchimento bem-sucedido dos campos e exibição da mensagem de sucesso
  Given que o usuário acessou o link
  When o usuário preencher os campos obrigatórios
  And o usuário clicar no botão 'Enviar'
  Then um modal deve ser exibido com a mensagem "Enviado com sucesso"
  And o usuário deve ser capaz de fechar o modal clicando no botão de fechar


# Scenario: Preenchimento incompleto dos campos e tentativa de envio
# Given que o usuário acessou o link
# When o usuário preencher apenas alguns campos obrigatórios do formulário
# And o usuário clicar no botão 'Enviar'
# Then nenhum modal deve ser exibido
# And uma mensagem de erro deve ser exibida, indicando que todos os campos obrigatórios devem ser preenchidos


# Scenario: Tentativa de envio sem preenchimento de campos
# Given que o usuário acessou o link
# When o usuário clicar no botão 'Enviar' sem preencher nenhum campo
# Then nenhum modal deve ser exibido
# And uma mensagem de erro deve ser exibida, informando que pelo menos um campo deve ser preenchido


# Scenario: Validação de telefone inválido
# Given que o usuário acessou o link
# When o usuário preencher os campos obrigatórios nome, sobrenome e um telefone inválido
# And o usuário clicar no botão 'Enviar'
# Then nenhum modal deve ser exibido
# And uma mensagem de erro deve ser exibida, indicando que o telefone fornecido é inválido