<!-- 
Temos 3 tipos de botões:
    editar, remover e um botão genérico.
Botões especiais têm seu nome escrito no botão.
Botões genéricos podem ter qualquer outra titulação.
-->

<template>

  <button @click="clicou()" :class="tipo">{{tipo}}</button>

</template>

<script>
export default {
    props: {
        tipo: {
            required: true,
            type: String 
        }
    },

    methods: {
        //Botões emitem a chamada do evento 'clicado' para os componentes externos que o utilizam.
        clicou(){
            this.$emit('clicado');
        }
    }

}
</script>

<style scoped>
button{
    margin: 0.5em 0.5em;
    padding: 0.6em 1.5em;
    background: rgb(226, 226, 172);
    color: rgb(0, 0, 0);
    font-size: 17px;
    border: none;
    border-radius: 60px;
    transition: 0.3s all cubic-bezier(0.785, 0.135, 0.15, 0.86);
    cursor: pointer;
}

button:hover{
    transform: scale(1.15);
}

.editar{
    background: rgb(174, 198, 243);
}

.remover{
    background: rgb(240, 153, 153);
}

</style>