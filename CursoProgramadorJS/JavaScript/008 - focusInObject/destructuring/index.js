const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{nome: "Nike"}, {nome: "Adidas"}],
    secret: 123456,
    n: 5,
    link: {a : "A", b: {c: "C"}},

};

/* const { tamanho, estoque, marcas } = Tenis;

console.log(Tenis)

const { secret: randomNumber, n: avaliacoes } = Tenis;

console.log(randomNumber);
console.log(avaliacoes); */

const { link : {
    a, b: {c}, 
} } = Tenis;

console.log(a)
console.log(Tenis.link.a, Tenis.link.b.c)
