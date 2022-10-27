# Sistema de Login

Lógica de funcionamento para validar acesso:

1º Identificar se o Usário está logado.
2º Se estiver, Eu tenho que VALIDAR este usuário.
  2.1º Se sim, libera o acesso.


Para logar:

1º Receber os Dados de login.
2º Enviar uma requisição para o Backend(ele que vai dizer se o usuário está certo ou errado) validar estes dados no banco de dados(a response dele vai ser um token de acesso se estiver correta)
3º Estando correto(senha e email batem), salva-se o Token(ou referência ao usuário) no browser.
4º Se estiver errado, informar o usuário.


Para deslogar: 

1º Apago a referência que existir no broser
  1.1º Enviar um requisição ao backend avisando para destruir aquela referência(depende da arquitura do projeto)
2º e depois atualizo a página.



Context vai armazenar/verificar e manipular coisas referentes a autenticação


{children} toda a aplicação vai aqui dentro
