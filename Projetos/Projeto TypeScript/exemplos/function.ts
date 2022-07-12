// Garantia de que o retorno da função será sempre do tipo number
/*
function somaValoresNumericos (n1: number, n2: number): number {
    return n1 + n2;
}

console.log(somaValoresNumericos(1,3));

// Void utilizado para não devolver nenhum resultado
function printaValoresNumericos (n1: number, n2: number): void {
    console.log(n1 + n2);
}
*/

function somaValoresNumericosETratar (n1: number, n2: number, callback: (n: number) => number): number {
    let resultado = n1 + n2;
    return callback(resultado);
}

function aoQuadrado(n: number): number {
    return n * n;
}

console.log(somaValoresNumericosETratar(1,3, aoQuadrado));