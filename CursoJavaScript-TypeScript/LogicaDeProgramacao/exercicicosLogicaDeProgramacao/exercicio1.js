// Escreva uma função que recebe 2 números e retorne o maior deles.
/* 
function max(x, y){

    if( x > y){
        console.log( "O valor de x é maior")
    } else if( x < y){
        console.log("O valor de y é maior")
    } else {
        console.log(" Ambos os valores são iguais")
    }
} */

/* function max(x, y){
    return x > y ? x : y;
} */

const max = (x, y) => x > y? x : y;
console.log(max(3, 5));