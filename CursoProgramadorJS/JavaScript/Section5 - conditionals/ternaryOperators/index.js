const velocidade = 75;
const warn = 85

const condicao = velocidade >= warn ? console.log("Recebeu uma multa") : console.log("Continua andando!")

if(condicao){
    console.log("Recebeu uma multa!")
}