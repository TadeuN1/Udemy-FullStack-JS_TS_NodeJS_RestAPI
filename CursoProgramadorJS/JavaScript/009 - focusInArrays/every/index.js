const pedidos = [
    {
        id: 420,
        nome: "Tadeu",
        alimento: "Sanduíche",
        bebida: "Coca Zero"
    },
    {
        id: 152,
        nome: "Naira",
        alimento: "Salada",
        bebida: "Suco de Laranja"
    },    {
        id: 29,
        nome: "Hope",
        alimento: "Ração",
        bebida: "Água"
    },
    {
        id: 33,
        nome: "Lua",
        alimento: "Sachê",
        bebida: "Água"
    }
];

const aguas = pedidos.every((element) => {
    return element.bebida === "Água";
});

console.log(aguas);