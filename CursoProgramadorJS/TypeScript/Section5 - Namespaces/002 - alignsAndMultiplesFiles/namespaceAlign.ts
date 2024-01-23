namespace Pessoa {
    export namespace Pessoa1{
        export let nome:string = "Tadeu";
     
        export const calc =  () => {
         return 1 + 1;
        }
     }
     export namespace Pessoa2{
        export let nome:string = "Joao";
     
        export const calc =  () => {
         return 2 + 2;
        }
     }
}


console.log(Pessoa.Pessoa1.nome);
console.log(Pessoa.Pessoa2.nome);
