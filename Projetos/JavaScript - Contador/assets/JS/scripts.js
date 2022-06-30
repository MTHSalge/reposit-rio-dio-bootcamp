var count = 0;
const minimo = -10;
const maximo = 10;
const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment(){
    if(count <= maximo){
        count++;
    }
    CURRENT_NUMBER.innerHTML = count;
    atualizarTela();
}

function decrement(){
    if(count >= minimo){
        count--;
    }
    CURRENT_NUMBER.innerHTML = count;
    atualizarTela();
}

function atualizarTela(){
    document.getElementById('decrement').disabled = count <= minimo;
    document.getElementById('increment').disabled = count >= maximo;
    CURRENT_NUMBER.style.color = count < 0 ? 'red' : 'black';
}

//  Desafio 1 de utilizar .addEventListener
document.getElementById('increment').addEventListener('click', increment)
document.getElementById('decrement').addEventListener('click', decrement)