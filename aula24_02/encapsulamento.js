class pessoa{
    nome;//atributo público
    #cpf;//atributo privado
    #salario;//atributo privado

    //metodos getters e setters
    setCpf(valor){
        this.#cpf= valor;
    }
    getCpf(){
        return this.#cpf;
    }
     setSalario(valor){
        this.#salario= valor;
    }
    getSalario(){
        return this.#salario;
    }
}
const iarossi = new pessoa();
iarossi.nome='julia'
console.log(iarossi)
