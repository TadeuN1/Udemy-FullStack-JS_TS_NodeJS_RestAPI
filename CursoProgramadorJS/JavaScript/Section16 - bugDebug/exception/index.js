const bugNum = () => {
    const number = "123";
    
    console.log(number === 123);
    if (number === 123) {
        return "Seu número é 123 - type Number";
    }

    throw new Error("Deu ruim");

};

console.log(bugNum());