let Tenis = {
    tipo: "Tenis de corrida",
    cardaco: "G",
    estoque: false,
    tamanho:{
        palmilha: 39,
        tenis: 40,
        caixa: {
            largura:35,
            altura:40,
            profundidade:10
        },
    },
    marcaArrayValores: ["Nike", "Adidas", "etc"],
    marcaArrayObj:[
        {
            nome: "Nike",
        },
        {
            nome: "Adidas",
        },
        {
            nome: "etc",
        },
    ],
    getMarcaArrayValores: function(param){
        return this.marcaArrayValores[param];
    },
    getMarcaArrayObj: function(param){
        return this.marcaArrayObj[param].nome;
    }
};

console.log(Tenis)
console.log(Tenis.tipo)
console.log(Tenis.tamanho)
console.log()
console.log()
console.log()
