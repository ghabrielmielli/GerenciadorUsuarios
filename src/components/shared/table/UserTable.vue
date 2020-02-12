<!--Esse componente representa uma tabela de usuários simples com headers fixos-->
<template>

  <div>

    <table>
      <thead>
        <th>Nome</th>
        <th>Data Nascimento</th>
        <th>E-mail</th>
        <th>Endereço</th>
        <th></th>
        <th></th>
      </thead>

      <tbody>
        <tr v-for="user of usuarios">
          <td>{{ user.nome }}</td>
          <td>{{ user.datanasc }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.end }}</td>

          <td>
            <!--Botão editar redireciona para página de edição-->
            <router-link :to="{name: 'Altera', params: {id: user.id}}">
              <botao tipo="editar" />
            </router-link>
          </td>
          <td>
            <botao tipo="remover" @clicado="remove(user)" />
          </td>
        </tr>
      </tbody>

    </table>

  </div>

</template>


<script>
import Botao from "../botao/Botao.vue";
import UserService from "../../../domain/user/userService";


export default {
  props: ["usuarios"],

  components: {
    botao: Botao
  },

  methods: {
    remove(user) {
      this.service.apaga(user.id).then(
        () => { //implementação para remoção do usuário na view
          let indice = this.usuarios.indexOf(user);
          this.usuarios.splice(indice, 1);
        },
        err => console.log(err)
      );
    }
  },

  created() {
    this.service = new UserService(this.$resource);
  }
};
</script>



<style scoped>
table {
  border-collapse: collapse;
  width: 90%;
  margin: auto;
}

thead{
  background-color: rgb(255, 255, 238);
  padding: 50px;
}

th{
  padding: 1em;
  font-size: 1.2em;
  border-bottom: 2px solid rgb(179, 179, 179);
}

td{
  font-size: 0.9em;
  text-align: center;
  border-bottom: 1px solid rgb(179, 179, 179);
}

</style>