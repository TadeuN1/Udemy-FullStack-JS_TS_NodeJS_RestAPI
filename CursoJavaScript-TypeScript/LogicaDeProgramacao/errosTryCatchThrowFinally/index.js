/* try{
    console.log(naoExisto);
} catch(err){
    console.log("naoExisto não existe.")
} */

/* function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser números.');
    }

    return x + y;
}

console.log(soma(1, 'oi')) */

/* try {
   console.log('Abri um arquivo.');
   console.log('Manipulei o arquivo e gerou erro.');
   console.log('Fechei o arquivo');  //Executada quando não há erros.
} catch (e) {
   console.log('Tratando o erro');//É executada quando há erros.
} finally {
   console.log("Serei sempre executado"); //Sempre
} */

function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError("Esperando instância de date.")
    }

    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    //tratar erro
} finally {
    console.log('Tenha um bom dia.')
}

