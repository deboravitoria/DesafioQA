Desafio cypress:

Para rodar os testes do cypress abra a pasta no vs code e no terminal digite:
npx cypress open

Selecione o arquivo login para visualizar os testes de login, eles testam:
	- Submit com login em branco;
	- Submit com email incorreto;
	- Todos os campos válidos (caso de sucesso).
Nos dois casos de erro tanto a existência quanto o conteúdo da mensagem são testados.
No caso de sucesso testa-se o título da página para validar.

O email e a senha são salvos no arquivo cypress.json dentro de env para que o mesmo email de cadastro seja usado no login.

Para visualizar o vídeo do teste de login abra o arquivo "\DesafioQA\Desafio Cypress\cypress\videos\tests"

Obs.: 
No teste extra de signup após dar submit no email a página troca a URL e o teste se quebra (posso explicar melhor o problema caso necessário),
como essa parte seria apenas um plus decidi deixar também para análise, mas infelizmente não está funcionando 100%.


Desafio postman:

Para rodar os testes do postman abra a collection utilizando o Postman.
Envie o request "Create employee", que testa:
	- Status code igual a 200;
	- Existência e validade do body na resposta;
	- Valida as informações que foram enviadas, se são as mesmas no body da requisição;
	- Valida a mensagem de sucesso;
	- O tempo máximo de resposta deve ser de 1000ms.
Ao criar o usuário os dados id, nome e salário são salvos no enviroment para reuso nos testes;
Envie o request "Delete employee", que testa:
	- Status code igual a 200;
	- Existência e validade do body na resposta;
	- Valida a mensagem de sucesso;
	- O tempo máximo de resposta deve ser de 1000ms.
O id usado na requisição de delete é o mesmo salvo ao criar o funcionário, que fica salvo em enviroment.

O arquivo "DesafioQA.postman_test_run.json" é o relatório do teste do postman e pode ser aberto através do próprio postman.