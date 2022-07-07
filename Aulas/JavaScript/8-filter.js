function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 == 0;
}

const meuArray = [2, 5, 6, 8, 10, 15, 20, 22, 25];

console.log(filtraPares(meuArray));


// Números Impares

/*
function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 !== 0;
}

const meuArray = [2, 5, 6, 8, 10, 15, 20, 22, 25];

console.log(filtraPares(meuArray));
*/