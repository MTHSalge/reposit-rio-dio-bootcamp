// Como realizar função em TypeScript
/* function soma(a:number, b:number) {
    return a + b;
}
*/

// Interfaces
/*
interface iAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarSom(alturaDb:number): void;
}

const animal: iAnimal = {
    nome: 'Elefante',
    tipo: 'aquático',
    executarSom: (alturaDb) => (`${alturaDb}dB`)
}
*/

// Types
/*
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande'
}

type IDomestico = IFelino | ICanino;



const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre'
}
*/

// Tratar a tag input
/*
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});
*/

// Generic types
/*
function addApendiceLista<T>(array: any[], valor: T) {
    return array.map(item => item + valor);
}

addApendiceLista(['1', '2', '3'], 'A');
*/

// Condicionais a partir de parâmetro
/*
interface iUsuario{
    id: string;
    email: string;
    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: iUsuario) {
    if(usuario.cargo) {
        // redirecionar(usuario.cargo);
    }

    // redirecionar para a área de usuário
}
*/

// Criando variáveis com propriedade readonly e private
/*
interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type cachorroSomenteLeitura {
    +readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class meuCachorro implements Cachorro {
    nome: 'Odin';
    idade: 8;
    
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new meuCachorro('Odin', 8);
*/