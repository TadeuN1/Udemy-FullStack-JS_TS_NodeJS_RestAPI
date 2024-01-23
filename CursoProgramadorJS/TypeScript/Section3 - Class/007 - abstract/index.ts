abstract class Pessoa {
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

   protected abstract profissao:string;
   public abstract qualSuaProfissao():string;
   public abstract qualSeuSalario(salario: number):number;
}


class Tadeu extends Pessoa{
    protected profissao: string = "Programador"
     constructor(){
        super("Tadeu", 26);
    }

    public qualSuaProfissao():string {
        return `Sua profissão é ${this.profissao}`
       }
    
    public qualSeuSalario(salario:number): number {
        return salario;
    }
}
