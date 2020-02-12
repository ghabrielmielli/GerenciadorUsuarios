<template>
  
  <menu>
      <ul>
        <li v-for="route of routes">
            <!--O operador ternário indica que para rotas com o atributo path vazio, a rota se resume à uma barra, que nessa versão do código redireciona para a Home-->
            <router-link :to="route.path ? route.path : '/' "><botao :tipo="route.titulo"></botao></router-link>
        </li>
      </ul>
  </menu>

</template>

<script>
import Botao from "../botao/Botao.vue";

export default {

    props: ['routes'],

    components: {
      botao: Botao
    }
}
</script>

<style scoped>

menu{
  position: absolute;
  top: 15px;
  left: 5%;
}

li{
  display: inline;
}

</style>