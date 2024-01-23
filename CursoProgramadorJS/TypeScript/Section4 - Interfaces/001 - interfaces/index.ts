interface IPessoa{
    nome: string,
    idade: number,
    readonly cpf: number,
    enabled(): boolean,
}

const pessoa: IPessoa = {nome: "Tadeu", idade: 25, cpf: 123456, enabled: ()=> {
    return true;
}}