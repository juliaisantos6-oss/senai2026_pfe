class Animal{
    especie;
    #genero;
    #qtddeIndividuos;
    #nome;

    constructor(especie, genero, qtde, nome){
        this.especie = especie;
        this.#genero = genero;
        this.#qtddeIndividuos = qtde;
        this.#nome = nome;
    }
    
}
const panda = new Animal('urso', 'fêmea', 2, 'Peppa e Pig');
console.log(panda);
