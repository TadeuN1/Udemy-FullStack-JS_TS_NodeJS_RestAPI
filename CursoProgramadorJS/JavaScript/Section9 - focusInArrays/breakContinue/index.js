const arrayObj = [
    {
        nome: "Tadeu",
        sobrenome: "Neres"
    },
    {
        nome: "Naira",
        sobrenome: "Ramos"
    },
    {
        nome: "Hope",
        sobrenome: "Ramos"
    },
    {
        nome: "Lua",
        sobrenome: "Ramos"
    },
    {
        nome: "Messi",
        sobrenome: "Ramos"
    },

];

for(let item of arrayObj){
    if (item.nome === "Naira"){
        console.log("Naira aguardando.");
        continue;
    }
    if (item.nome === "Hope"){
        console.log("Registro Felinos");
        break;
    }

    console.log(item)
}

