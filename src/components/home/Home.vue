<template>

  <div id="app">

    <h2>Usuários</h2>

    <tabela-usuarios :usuarios="usuarios"></tabela-usuarios>

  </div>

</template>

<script>
import UserTable from "../shared/table/UserTable.vue";
import UserService from "../../domain/user/userService";


export default {
  components: {
    "tabela-usuarios": UserTable
  },

  data() {
    return {
      usuarios: [] //dados serão preenchidos por AJAX
    };
  },

  created() {
    this.service = new UserService(this.$resource);

    //Preenche a tabela com dados dos usuários
    this.service.lista()
      .then(users => this.usuarios = users, err => console.log(err));
  }
};
</script>

<style>

#app{
  text-align: center;
}
</style>