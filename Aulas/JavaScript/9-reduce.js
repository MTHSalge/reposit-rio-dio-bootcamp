// Primeira atividade
/*
function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});

        return prev + current;
    }, 0)
}

const arr = [2, 4];

console.log('current ->', somaNumeros(arr));
*/

// Segunda atividade

const lista = [
    {
        name: 'sabão em pó',
        value: 30
    },

    {
        name: 'detergente',
        value: 5
    },

    {
        name: 'sabonete',
        value: 3,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});

        return prev - current.value;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista));