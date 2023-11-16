const pessoa = {
    nome: 'Tadeu',
    sobrenome: 'Neres',
    idade: 26,
    endereco:{
        rua: 'Rua Planaltina',
        numero: 1450
    }
}
//Atribuição via desestruturação

const { nome, sobrenome, endereco: {rua, numero}, endereco } = pessoa;

console.log(nome, sobrenome, endereco)