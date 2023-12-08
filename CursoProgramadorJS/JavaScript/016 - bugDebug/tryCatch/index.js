const bugNum = () => {
    try {
        const number = "123";

        if(number === 123){
            return "Seu número é 123 - type Number";
        }
        throw new Error("Deu ruim");
    } catch(error){
        return error;
    }

};

console.log(bugNum());