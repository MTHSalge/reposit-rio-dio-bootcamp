var count = 0;
const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment(){
    if(count==10){
        // document.getElementById('increment').disabled=true;
        CURRENT_NUMBER.innerHTML = count;
    }
    else{
        count++;
        CURRENT_NUMBER.innerHTML = count;
    }
}

function decrement(){
    if(count>0){
        // document.getElementById('decrement').disabled=true;
    }
    else{
        count--;
        CURRENT_NUMBER.innerHTML = count;
        if(count<0){
        // document.getElementById('currentNumber').style.color='red';
        }
    }
}

//  Desafio 1 de utilizar .addEventListener
document.getElementById('increment').addEventListener('click', increment)
document.getElementById('decrement').addEventListener('click', decrement)