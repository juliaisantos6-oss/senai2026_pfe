class Veiculo{
    //atrivutos ou características
    modelo = 'SUV';
    marca = ' Honda - HRV';
    ano =2025;

    //métodos ou ações
    dirigir(){
        console.log('Começou a se mover');
    }
    break(){
        console.log('Pare a bagaça');
    }
}

const carro = new Veiculo();
carro.dirigir();
carro.break();