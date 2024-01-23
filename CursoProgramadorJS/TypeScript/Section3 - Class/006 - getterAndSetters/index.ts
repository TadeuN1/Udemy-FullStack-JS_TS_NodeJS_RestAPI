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
    private _profissao: string = "Programador";

    constructor(){
        super("Tadeu", 26);
    }

    get profissao(){
        return this._profissao;
    }

    set profissao(valor:string){
        this._profissao = valor;
    }
}

const neres = new Tadeu();

neres.profissao = "Piloto"

console.log(neres.profissao);