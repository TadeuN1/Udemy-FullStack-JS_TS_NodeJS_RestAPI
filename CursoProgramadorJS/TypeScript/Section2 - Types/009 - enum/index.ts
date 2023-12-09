enum EMes{
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março",
}

console.log(EMes);
console.log(EMes.JAN);


const pessoa:{nome: string, mesAniversario: string } = {
    nome: "Tadeu", mesAniversario: EMes.MAR,
}

if(pessoa.mesAniversario === EMes.MAR) {
    console.log(pessoa);
}