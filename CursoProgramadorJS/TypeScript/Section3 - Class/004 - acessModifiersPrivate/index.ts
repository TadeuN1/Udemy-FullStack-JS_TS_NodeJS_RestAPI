/* (public (protected (private))); */

// private _profissao: string = "Programador";
// Atualmente, com JavaScript e TypeScript, ao adicionar o símbolo "#" antes de uma propriedade ou metódo, ela se torna privada por padrão.

class Pessoa {
    public nome: string = "";
    public idade: number = 0;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string){
        return `O ${this.nome} comeu ${comida}`
    }

    public fezAniversario(){
        return ` O ${this.nome} fez tantos anos ${this.idade++}`
    }
}

const pessoa = new Pessoa("Neres", 25);



