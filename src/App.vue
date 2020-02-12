
<template>
<div>

  <div id="cabeca">

    <h1>Gerenciador de Usuários</h1>
    <!--MENU-->
    <div>
      <menu-principal :routes="routes" />
    </div>

  </div>

  <div id="corpo">

    <!--ROTA-->
    <router-view></router-view>

  </div>

</div>

</template>

<script>
import Menu from './components/shared/menu/Menu.vue';
import {routes} from './routes';

export default {

  components: {
    'menu-principal': Menu
  },
 
  data() {
    return{
      //As rotas exibidss no menu são filtradas. As rotas que aparecem no menu possuem a propriedade menu = true.
      routes : routes.filter(route => route.menu)
    }
  }
  
}

</script>

<style>
@import './assets/styles/reset.css';

#cabeca{
  display: inline-block;
  width: 100%;
  background-color: rgb(226, 208, 255);
}

h1{
  position: relative;
  margin: auto;
  font-size: 2em;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0.8em;
}

h2{
  font-size: 1.5em;
  text-align: center;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0.8em;
  text-decoration: underline;
  text-decoration-color: bisque;
}



#corpo{
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

</style>