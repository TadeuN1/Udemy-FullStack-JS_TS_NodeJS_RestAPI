//Escreva uma função que receba um número:
//Número é divisível por 3 = Fizz;
//Número é divisível por 5 = Buzz;
//Número é divisível por 3 e 5 = FizzBuzz;
//Não é divisível por 3 e 5 = Retorna o próprio número;
//Checar se o número é realmente um número;
//Usar a função com número de 0 a 100;

const fizzBuzz = (num) => {
if(typeof num !== 'number') return num;
if(num % 3 === 0 && num % 5 === 0 ) return 'FizzBuzz';
if(num % 3 === 0) return 'Fizz';
if(num % 5 === 0 ) return 'Buzz';
return num;
}



for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}