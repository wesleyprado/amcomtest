# amcomtest
amcomtest

## PRÉ-REQUISITOS

Requisitos de software e hardware necessários para executar este projeto de automação

*   NODE JS >= 12
*   Visual Code

## DOWNLOAD DO PROJETO TEMPLATE PARA SUA MÁQUINA LOCAL

Faça o download do template no repositório de código para utilizar no seu projeto em especifico,
feito isso, fique a vontande para usufruir dos recursos disponíveis e
também customizar de acordo com sua necessidade.


## FRAMEWORKS UTILIZADOS

Abaixo está a lista de frameworks utilizados nesse projeto

* Cypress - Responsável pela interação com páginas web
* cucumber - Responsável pela camada de linguagem natural
* Allure - Responsável pelos reports


## COMANDO PARA EXECUTAR OS TESTES

Baixar Dependencias
```
npm install -y
```
Execução
```
npx cypress open
```


## COMANDO PARA GERAR EVIDÊNCIAS EM HTML (ALLURE)

Com o prompt de comando acesse a pasta do projeto, onde esta localizado o arquivo package.json, execute o comando abaixo para gerar as evidências em HTML

Executa os testes com geração do report
```
npx run cy:run-allure
npx run allure
```


## LINKS DE APOIO

* [Cypress - Documentação Oficial](https://docs.cypress.io/)