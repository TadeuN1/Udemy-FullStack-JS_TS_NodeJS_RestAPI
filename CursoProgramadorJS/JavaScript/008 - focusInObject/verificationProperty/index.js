const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{nome: "Nike"}, {nome: "Adidas"}],
    secret: 123456,
    n: 5,
    link: {a : "A", b: {c: "C"}},

};

console.log(Tenis.hasOwnProperty("tamanho"));


console.log("tamanho" in Tenis);