import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

/*
Os parâmetros TITULO e MENU são utilizados, respectivamente, para:
    Ser escrito no componente Menu.vue;
    Determinar de a rota deve ser listada no menu principal.
*/
export const routes = [
    {path: '', name: 'Home',component: Home, titulo: 'Home', menu: true},
    {path: '/cadastro', name: 'Cadastro',component: Cadastro, titulo: 'Cadastro ', menu: true}, //inserir usuário
    {path: '/cadastro/:id', name: 'Altera',component: Cadastro, titulo: 'Cadastro ', menu: false}, //editar usuário
    {path: '*', component: Home, menu: false} //redireciona para a Home caso falha de digitação
];