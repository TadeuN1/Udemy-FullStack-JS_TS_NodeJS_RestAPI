/* const stringArray = ["A", "C", "D", "W", "L", "B"];

console.log(stringArray.sort());
console.log(stringArray.reverse()); */

let numberArray = [ 10, 20, 30, 40, 50, 1000, 1, 55, 15 ];

console.log(numberArray.sort((a,b) => a - b)); //Função para ordenamento numérico.
console.log(numberArray.sort((a,b) => b - a)); //Função para ordenamento numérico reverse
console.log(numberArray.sort((a,b) => b - a).reverse()); //Função para ordenamento numérico reverse


