function equalNumbers (a,b){
    const comparacao = criarComparacao (a,b);
    const soma = criarSoma (a,b);

    return `${comparacao} ${soma};`
}

function criarComparacao(a,b){
    let comparacao = `Os números ${a} e ${b}`;
    let condicao = "não ";

    if(a == b){
        condicao = ''
    }

    return `${comparacao} ${condicao}são iguais.`;
}

function criarSoma(a,b){
    const soma = a + b;
    let comparaDez = 'menor';
    let comparaVinte = 'menor';

    if(soma>10){
        comparaDez = 'maior';
    }

    if(soma>20){
        comparaVinte = 'maior';
    }

    return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(equalNumbers(10,20));