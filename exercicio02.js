class Cidade{
    qtdeHabitantes = 105000;
    estado = "são paulo";
    nome = 'araçatuba';

    mostrar(){
        console.log('A cidade de' + this.nome + 'fica no estado de'+ this.estado + 'e tem cerca de' + this.qtdeHabitantes);
    }
}
const city = new Cidade();
city.nome = 'mirandopolis';
city.mostrar();

