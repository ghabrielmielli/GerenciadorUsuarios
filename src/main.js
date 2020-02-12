import Vue from 'vue'
import App from './App.vue'

//Aqui temos a importação do VueResource e VueRouter, dependências do sistema.
import VueResource from "vue-resource";

import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(VueResource);

//IMPORTANTE!
//A URL definida abaixo é PADRÃO para as requisições. Caso a URL do seu servidor for diferente desta, substitua-a AQUI!
Vue.http.options.root = 'http://localhost:3000';

const router = new VueRouter({ routes });


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
