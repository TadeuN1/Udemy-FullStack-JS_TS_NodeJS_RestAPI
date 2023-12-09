const pedidos = [
    {
        id: 420,
        nome: "Tadeu",
        alimento: "Sanduíche",
        bebida: "Coca Zero",
        preco: 100,
    },
    {
        id: 152,
        nome: "Naira",
        alimento: "Salada",
        bebida: "Suco de Laranja",
        preco: 50
    },    {
        id: 29,
        nome: "Hope",
        alimento: "Ração",
        bebida: "Água",
        preco: 78
    },
    {
        id: 33,
        nome: "Lua",
        alimento: "Sachê",
        bebida: "Água",
        preco: 85
    }
];

const balancete = pedidos.reduce((total, element) => {
    return total + element.preco;
}, 0)

console.log(balancete);