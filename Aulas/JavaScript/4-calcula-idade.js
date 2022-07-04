function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
};

const pessoa2 = {
    nome: 'José',
    idade: 48,
};

const animal = {
    nome: 'Odin',
    idade: 8,
    raca: 'Vira-lata'
};

console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.apply(pessoa2, [30]));