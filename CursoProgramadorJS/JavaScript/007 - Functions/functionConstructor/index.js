function Name(name, sobrenome) {
    this.name = name;
    this.sobrenome = () => {
        const nomeCompleto = `${this.name} ${sobrenome}`;
        return nomeCompleto
    };
}

const tadeu = new Name("Tadeu", "Neres");
console.log(tadeu.sobrenome())