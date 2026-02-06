const prompt = require('prompt-sync')();
let num = Number(prompt("Digite umnúmero"));
if (num % 2 === 0){
    console.log("O número é par");
}
else{
    console.log("É impar");
}