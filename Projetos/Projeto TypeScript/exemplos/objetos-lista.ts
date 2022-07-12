const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Auditoria'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Pintor
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa = {
    nome: 'Vanessa',
    idade: 30,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 32,
    profissao: Profissao.Atriz,
    materias: ['Matematica', 'Programaçao' ]
}

function listar(lista: string[]) {
    for(const item of lista) {
        console.log('- ', item);
    }
}

listar(jessica.materias);