// Função .map com o this
/* 
const maca = {
    value: 2,
};

const abacaxi = {
    value: 5,
};

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item / this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> maca', mapComThis(nums, maca));

console.log('this -> abacaxi', mapComThis(nums, abacaxi));

*/ 

// Função .map sem o this

function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));