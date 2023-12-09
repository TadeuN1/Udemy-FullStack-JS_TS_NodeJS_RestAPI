function QualSeuNome(name){
    const msg = `O seu nome é:`;
    function SeuName(){
        return `${msg} ${name}`
    }
    return SeuName();
}

console.log(QualSeuNome("Tadeu"))

function Calculadora(num1, num2) {
    const msg = "Resultado: ";

    const soma = () => {
        return `${msg} ${num1 + num2}`
    }
    const subtracao = () => {
        return `${msg} ${num1 - num2}`
    }
    const multiplicacao = () => {
        return `${msg} ${num1 * num2}`
    }
    const divisao = () => {
        return `${msg} ${num1 / num2}`
    }
    return{
        soma: soma(),
        subtracao: subtracao(),
        multiplicacao: multiplicacao(),
        divisao: divisao()

    }
}

console.log(Calculadora(3 , 5))