export namespace Pessoa1{
   export let nome:string = "Tadeu";

   export const calc =  () => {
    return 1 + 1;
   }
}

console.log(Pessoa1.nome)
console.log(Pessoa1.calc())
