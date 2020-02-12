export default class UserService {

    //Essa classe é a responsável pela comunicação entre o servidos e a aplicação.

    //As requisições são feitas com $resource ao invés de $http. Para utilizar a classe ela foi importada e um objeto foi instanciado em cada local de uso.
    constructor(resource){
        this._resource = resource('users{/id}')
    }

    /*
    Esse método trata de atualizar o bd de acordo com a situação na página de cadastro. 
    Caso a URL possua um ID (o que acontece quando clicamos no botão 'editar'), trata-se de uma atualização de dados,
    enquanto que a URL sem ID se refere à inserção de novos dados. 
    */
    cadastra(user) {

        if (user.id){
            return this._resource.update({id: user.id}, user);
        }
        else{
            return this._resource.save(user);
        }

    }

    //Retorna a lista de Usuários em JSON.
    lista() {

        return this._resource.query()
          .then(res => res.json());
    }

    //Deleta um usuário pela ID.
    apaga(id) {

        return this._resource.delete({ id });
    }

    //Busca um usuário pela ID e o retorna em formato JSON.
    busca(id) {
        return this._resource.get({ id })
            .then(res => res.json());
    }
}