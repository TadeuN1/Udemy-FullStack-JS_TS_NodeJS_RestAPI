class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa("Tadeu Neres", 26);

console.log(pessoa1.nome);
console.log(pessoa1.idade);
