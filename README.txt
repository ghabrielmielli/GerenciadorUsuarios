Sobre
————————————————————————————————
O projeto Gerenciador de Usuários tem como objetivo efetuar o CRUD básico para usuários de uma plataforma genérica.

A arquitetura consiste em uma SPA produzida em JavaScript com o framework Vue. As extensões Vue Router e Vue Resource foram utilizadas no projeto, sendo assim dependências deste.

Os dados da aplicação foram armazenados com auxílio do json-server em TesteCOE/src/data/users.json .

O template utilizado para o projeto é o Vue CLI webpack-simple.




Legenda Funcional dos diretórios:
————————————————————————————————
-src
	- App.vue : arquivo de rota principal. Todos os outros arquivos Vue são renderizados dentro deste a partir das rotas.

	- main.js: aqui temos as importações e infraestrutura base para funcionamento do app. Note que aqui é definido a URL padrão para requisições.

	- routes.js: definição de rotas.

	- Domain: dentro são definidas as classes utilizadas.

	- data: contém o arquivo users.json, que armazena os dados.

	- components:  com exceção da pasta ‘shared’, as subpastas desta pasta são templates NÃO otimizados para reutilização.

		- cadastro: O arquivo vue dentro dessa pasta é responsável não apenas pela inclusão de novos usuários, mas também pela edição de usuários existentes.

		- home: página principal.

		- shared

			- aqui temos os componentes reutilizáveis da aplicação.





EXECUÇÃO DO PROJETO:
————————————————————————————————
(As instruções foram realizadas em ambiente Mac OS Mojave)

Para executar o projeto, anteriormente foram devidamente instalados o Vue CLI e JSON-Server.

O JSON-Server foi inicializado pelo terminal no diretório …/TesteCOE/src/data  
Através do terminal com o comando:
$ npx json-server --watch users.json

Após isso, para iniciar a aplicação, dentro da pasta TesteCOE, foi utilizado uma nova página/aba do terminal para executar o comando:
$ npm run dev

Após isso é aberto no navegador a página.

Na Home podemos:
	- deletar usuários
	- ir para página de cadastro de novos usuários através do menu superior
	- editar informações cadastrais de usuários existentes

Ao cadastrar um novo usuário, os campos preenchidos são renovados para o cadastro de mais usuários. Você pode voltar à Home através do menu superior.

Ao finalizar a edição de um usuário, você será redirecionado para a Home automaticamente após a confirmação das alterações.




————————————————————————————————
Em cada arquivo da pasta src existem comentários de suporte à leitura do código.

Autor: Ghabriel Mielli - ghabrielmielli@hotmail.com

