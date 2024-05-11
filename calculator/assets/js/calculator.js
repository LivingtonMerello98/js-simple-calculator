'use strict';

console.log('sono connesso')

const inputDisplay = document.getElementById('result');
const numberContainer = document.querySelector('.numbers');
const operatorContainer = document.querySelector('.operators');
const canc = document.getElementById('delete').value;
const equal = document.getElementById('equal').value;

//debug for const
console.log();



//flag
let operating;
let operator;

//numberContainer in ascolto
numberContainer.addEventListener("click", function(e){

    let btnValue = e.target.value;
    let limit = 8;
 

    //inserisce il primo numero rimuovendo lo 0
    switch (true) {
        
        //display 0, si sostituisci con btnValue 
        case inputDisplay.textContent === '0':
            inputDisplay.textContent = btnValue;
            break;
        
        //non più di 8 caratteri su schermo
        case inputDisplay.textContent.length <= limit:
            inputDisplay.textContent += btnValue;
            break;
    
        default:
            console.log(`È stato raggiunto il limite`);
    }
    
    //si salva valore intero in una costante
    operating =  parseInt(inputDisplay.textContent);

    console.log(` il numero completo è ${operating} ed è un elemento di tipo `,typeof operating)
    return inputDisplay
})



