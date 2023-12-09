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

pedidos.map((element, index) => {
   if(element.id === 420 && element.alimento === "Sanduíche"){
    return (element.alimento = "Macarronada");
   }
});

console.log(pedidos[0]);