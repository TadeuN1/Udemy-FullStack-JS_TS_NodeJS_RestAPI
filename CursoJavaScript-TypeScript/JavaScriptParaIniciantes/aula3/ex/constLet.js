const nome = 'Tadeu'
const sobrenome = 'Neres'
const idade = 26
const peso = 80
const altura = 1.90
anoAtual = 2023

let imc = peso /(altura* altura)
let anoNascimento = (anoAtual - idade)

console.log(nome, sobrenome, 'tem ', idade, 'anos, e pesa', peso, 'KG.', 'tem ', altura, 'de altura e seu IMC é de', imc )
console.log(nome, sobrenome, 'nasceu em', anoNascimento)