const peso = 100;
const altura = 2;
const IMC = Number((peso)/(altura * altura).toFixed(2))

if(IMC < 17){
    console.log("Muito abaixo do peso.")
} else if(IMC >= 17 && IMC <= 18.49){
    console.log("Abaixo do peso.")
} else if( IMC >= 18.5 && IMC <= 24.99){
    console.log("Peso normal.")
} else if( IMC >= 25 && IMC <= 29.99){
    console.log("Acima do Peso.")
} else if( IMC >= 30 && IMC <= 34.99){
    console.log("Obesidade 1.")
} else if( IMC >= 35 && IMC <= 39.99){
    console.log("Obesidade 2.")
} else{
    console.log("Dados irregulares.")
}