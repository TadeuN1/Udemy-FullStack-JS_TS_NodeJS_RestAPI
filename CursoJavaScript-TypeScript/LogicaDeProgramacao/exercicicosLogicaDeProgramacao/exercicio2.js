// Escreva uma função chamada ePaisagem que recebe dois argumentos
//Largura e altura de uma imagem (number)
//Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) => {
    if(largura > altura){
        return true 
    }
     
    return false;
    
}

console.log(ePaisagem(50, 20));

