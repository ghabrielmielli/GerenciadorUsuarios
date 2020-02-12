{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\csgray\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww8380\viewh18000\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 \
Sobre\
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0
\cf0 \'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0
\cf0 O projeto Gerenciador de Usu\'e1rios tem como objetivo efetuar o CRUD b\'e1sico para usu\'e1rios de uma plataforma gen\'e9rica.\
\
A arquitetura consiste em uma SPA produzida em JavaScript com o framework Vue. As extens\'f5es Vue Router e Vue Resource foram utilizadas no projeto, sendo assim depend\'eancias deste.\
\
Os dados da aplica\'e7\'e3o foram armazenados com aux\'edlio do json-server em TesteCOE/src/data/users.json .\
\
O template utilizado para o projeto \'e9 o Vue CLI webpack-simple.\
\
\
\
\
Legenda Funcional dos diret\'f3rios:\
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0
\cf0 \'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0
\cf0 -src\
	- App.vue : arquivo de rota principal. Todos os outros arquivos Vue s\'e3o renderizados dentro deste a partir das rotas.\
\
	- main.js: aqui temos as importa\'e7\'f5es e infraestrutura base para funcionamento do app. Note que aqui \'e9 definido a URL padr\'e3o para requisi\'e7\'f5es.\
\
	- routes.js: defini\'e7\'e3o de rotas.\
\
	- Domain: dentro s\'e3o definidas as classes utilizadas.\
\
	- data: cont\'e9m o arquivo users.json, que armazena os dados.\
\
	- components:  com exce\'e7\'e3o da pasta \'91shared\'92, as subpastas desta pasta s\'e3o templates N\'c3O otimizados para reutiliza\'e7\'e3o.\
\
		- cadastro: O arquivo vue dentro dessa pasta \'e9 respons\'e1vel n\'e3o apenas pela inclus\'e3o de novos usu\'e1rios, mas tamb\'e9m pela edi\'e7\'e3o de usu\'e1rios existentes.\
\
		- home: p\'e1gina principal.\
\
		- shared\
\
			- aqui temos os componentes reutiliz\'e1veis da aplica\'e7\'e3o.\
\
\
\
\
\
EXECU\'c7\'c3O DO PROJETO:\
\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\
(As instru\'e7\'f5es foram realizadas em ambiente Mac OS Mojave)\
\
Para executar o projeto, anteriormente foram devidamente instalados o Vue CLI e JSON-Server.\
\
O JSON-Server foi inicializado pelo terminal no diret\'f3rio \'85/TesteCOE/src/data  \
Atrav\'e9s do terminal com o comando:\
$ 
\f1\fs22 \cf2 \CocoaLigature0 npx json-server --watch users.json\
\
Ap\'f3s isso, para iniciar a aplica\'e7\'e3o, dentro da pasta TesteCOE, foi utilizado uma nova p\'e1gina/aba do terminal para executar o comando:\
$ npm run dev\
\
Ap\'f3s isso \'e9 aberto no navegador a p\'e1gina.\
\
Na Home podemos:\
	- deletar usu\'e1rios\
	- ir para p\'e1gina de cadastro de novos usu\'e1rios atrav\'e9s do menu superior\
	- editar informa\'e7\'f5es cadastrais de usu\'e1rios existentes\
\
Ao cadastrar um novo usu\'e1rio, os campos preenchidos s\'e3o renovados para o cadastro de mais usu\'e1rios. Voc\'ea pode voltar \'e0 Home atrav\'e9s do menu superior.\
\
Ao finalizar a edi\'e7\'e3o de um usu\'e1rio, voc\'ea ser\'e1 redirecionado para a Home automaticamente ap\'f3s a confirma\'e7\'e3o das altera\'e7\'f5es.\
\
\
\
\
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 \CocoaLigature1 \'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97\'97
\f1\fs22 \cf2 \CocoaLigature0 \
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0
Em cada arquivo da pasta src existem coment\'e1rios de suporte \'e0 leitura do c\'f3digo.\
\
Autor: Ghabriel Mielli - ghabrielmielli@hotmail.com\

\f0\fs24 \cf0 \CocoaLigature1 \
}