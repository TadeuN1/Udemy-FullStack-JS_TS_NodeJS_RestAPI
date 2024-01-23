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


class Tadeu extends Pessoa{

}

const neres = new Tadeu("Tadeu", 26);

console.log(neres);