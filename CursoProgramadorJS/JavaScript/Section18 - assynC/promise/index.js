const pedido = (pedido) => {
    return new Promise((resolve, reject) => {
        if(pedido === "Pizza"){
            return reject(`Não temos o seu pedido: ${pedido}`)
        }
        setTimeout(() => {
            resolve(`Chegou o seu pedido ${pedido}`)
        }, 5000);
    })
}

pedido("Pizza").then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("Procedimento finalizado.")
});