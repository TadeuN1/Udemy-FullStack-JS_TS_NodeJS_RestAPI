 // shift = remove o primeiro elemento e retorna ele.
 // pop = remove o último elemento e retorna ele.
 // slice = pega os dados de um range sem quebrar o Array
 // splice = remove os dados de uma array dentro de um range.

/*  let arr = [1, 2, 3, 4, 5];

 console.log(arr);
 console.log("shift =>", arr.shift());
 console.log("pop =>", arr.pop());

 console.table(arr); */

 let arr = [
    {nome: "Tadeu", tel:"123456789"},
    {nome: "Naira", tel:"222222222"},
    {nome: "Mae", tel:"123123123"},
    {nome: "Pai", tel:"111111111"},
    {nome: "Irmao", tel:"111111111"},
 ];

 console.table(arr);

 const newArray = arr.slice(0, 2);

 console.table(newArray);