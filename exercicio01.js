class Livro{
    autor = 'júlia';
    tipo = 'impresso';
    genero = 'romance';
    editora = 'iarossi';
    anoPub = 2023;
    titulo = 'O final feliz';
    idioma = 'português';
    qtdePaginas = 200;

    mostrar(){
        console.log(this.autor);
    }
}
const impressao = new Livro();
impressao.anoPub