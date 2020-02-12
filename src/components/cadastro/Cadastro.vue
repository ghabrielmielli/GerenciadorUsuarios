<template>
  <div>

    <!--TÍTULO RESPONSIVO-->
    <h2 v-if="!this.id">Cadastrar novo Usuário</h2>
    <h2 v-if="this.id">Editar Usuário</h2>

    <!--FORMULÁRIO-->
    <form @submit.prevent="construirUser()">
      <label for="nome">Nome</label>
      <input
        type="text"
        id="nome"
        class="input-padrao"
        required
        placeholder="Nome do usuário"
        v-model="user.nome"
      />

      <label for="datanasc">Data de Nascimento</label>
      <input
        type="date"
        id="datanasc"
        class="input-padrao"
        required
        placeholder="dia/mês/ano"
        v-model="user.datanasc"
      />

      <label for="email">E-mail</label>
      <input
        type="email"
        id="email"
        class="input-padrao"
        required
        placeholder="exemplo@dominio.com"
        v-model="user.email"
      />

      <label for="end">Endereço</label>
      <input
        type="text"
        id="end"
        class="input-padrao"
        required
        placeholder="Endereço"
        v-model="user.end"
      />

      <span class="centralizado"><botao tipo='Enviar'/></span>
    </form>

  </div>

</template>


<script>
import Botao from '../shared/botao/Botao.vue';
import User from '../../domain/user/user';
import UserService from "../../domain/user/userService";


export default {

    components: {
        botao: Botao
    },

    data() {
        return{
            user: new User(),
            id: this.$route.params.id //'undefined' em caso de inserção de novos usuários.
        }
    },

     created() {
        this.service = new UserService(this.$resource);

        //Caso exista um ID, o objeto 'user' é preenchido com os dados extraídos desse ID.
        //Devido ao two-way data binding, os inputs são automaticamente preenchidos com esses dados,
        //que podem ser alterados.
        if (this.id){
            this.service.busca(this.id)
                .then(user => this.user = user);
        }

    },

    methods: {

        //Constrói um usuário.
        construirUser(){
            this.service.cadastra(this.user)
            .then(() => {
                if(this.id) this.$router.push({name: 'Home'}); //Retorna para a Home caso se trate de uma edição.
                this.user = new User(); //Prepara a página para a inserção de novos usuários caso se trate de uma inserção.
            }, err => console.log(err));
        }
    }


};
</script>

<style scoped>

form{
    margin: auto;
    width: 60%;
}

form label, form legend{
    display: inline-block;
    font-size: 1.2em;
    margin: 0;
    width: 20%;
    text-align: center;
}

.input-padrao{
    display: inline-block;
    margin:  2em 0 1em 0;
    padding: 0.5em 1.5em;
    width: 70%;
    font-size: 1em;
}

.centralizado{
  display: block;
  text-align: center;
}

input {
  border: 1px solid rgb(246, 238, 203)(206, 194, 194);
  border-radius: 4px;
}
</style>

