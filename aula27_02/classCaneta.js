class Caneta{
    cor = 'rosa';
    marca = 'stabilo';
    ponta = 'fina'
    qtdTinta = 10;//ml
    tampa = false;

    escrever(){
        this.qtdTinta -= 1;
        return 'Comecei a escrever';
    }
    sublinhar(valor){
        if(valor > this.qtdTinta){
            return 'Quantidade de tinta insuficiente'
        }
        this
        .qtdTinta -= valor;
        return 'A quantidade restante depois de sublinhar é' + this.qtdTinta;
    }
    recarregar(valor){
        if((this.qtdTinta + valor) > 15){
            return 'A quantidade informada excede a quantidade permetida de 15ml';
        } 
        this.qtdTinta += valor;
        return 'A quantidade de tinta depois da recarga é'+ this.getQtdTinta();
    }
    getQtdTinta(){
        return this.qtdTinta;
    }
}
const canetaFina = new Caneta();
canetaFina.escrever();
canetaFina.escrever();
console.log('A qntd, restante de tinta é'+ canetaFina.getQtdTinta());
