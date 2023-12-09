function nomeFunc(){
    return "Tadeu Neres";
}

console.log(nomeFunc());

const nomeFuncArrow = () => {
    return "Neres da Rocha";
}

console.log(nomeFuncArrow())

const nomeFuncArrowReturn = () => "Mr. Neres";

console.log(nomeFuncArrowReturn());

//Arguments não irão funcionar e ocasionará falhas
/*
const nomeFuncArrowArguments = () => {
    return nomeFuncArrowArguments;
}

console.log(nomeFuncArrowArguments("Oiiii"));
*/

//Arguments irão funcionar devidamente:

function nomeFuncArguments(){
    return arguments
}

console.log(nomeFuncArguments("Olá Tadeu"));



