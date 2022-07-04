const meuArray = [0, 50, 50, 55, 62, 85, 99, 102, 150];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet]
}

console.log(valoresUnicos(meuArray));