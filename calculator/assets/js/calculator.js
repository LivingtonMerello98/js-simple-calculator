'use strict';

console.log('sono connesso')

const inputDisplay = document.getElementById('result');
const numberContainer = document.querySelector('.numbers');
const operatorContainer = document.querySelector('.operators');
const eraser = document.getElementById('erase');
const equal = document.getElementById('equal');

//debug for const
console.log();

//debug values
test();

function test(test){
    console.log(test);
}


let btnValue;
let firstOperand = '';
let operator = '';
let secondOperand = '';



// Funzione per gestire i numeri
function handleNumber(btnValue) {
    let limit
    switch (true) {
        case inputDisplay.textContent.length >= limit:
            console.log(`Limite massimo di caratteri raggiunto`);
            return;
        case operator !== '':
            // Se c'è un operatore, aggiungi il numero al secondo operando
            secondOperand += btnValue;
            inputDisplay.textContent = secondOperand;
            break;
        default:
            // Altrimenti, aggiungi il numero al primo operando
            firstOperand += btnValue;
            inputDisplay.textContent = firstOperand;
            break;
    }
}




// Funzione per gestire gli operatori
function handleOperator(operatorValue) {
    operator = operatorValue;
}

// Event listener per i numeri
numberContainer.addEventListener("click", function(e){
    let btnValue = e.target.value;
    console.log(`${btnValue} è stato premuto`)
    handleNumber(btnValue);
});

// Event listener per gli operatori
operatorContainer.addEventListener("click", function(e){
    let operatorValue = e.target.value;
    console.log(`${operatorValue} è stato premuto`);
    handleOperator(operatorValue);
});

// Event listener per il pulsante '='
equal.addEventListener("click",function(e){
    // Esegui l'operazione solo se ci sono sia un operatore che un secondo operando
    if (operator !== '' && secondOperand !== '') {
        let result = calculate();
        inputDisplay.textContent = '';
        // Resetta le variabili per la prossima operazione
        firstOperand = result;
        operator = '';
        secondOperand = '';
    }
});


//event listener per 'c' (eraser)
eraser.addEventListener("click",function(e){

    // Ricarica la pagina
   location.reload();
});



// Funzione per calcolare il risultato
function calculate() {
    let num1 = parseFloat(firstOperand);
    let num2 = parseFloat(secondOperand);
    let result = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Verifica se il secondo operando è zero
            if (num2 === 0) {
                console.log("Errore: divisione per zero");
                // mex errore
                return "Errore";
            }
            result = num1 / num2;
            break;
        case '%':
            // Verifica se il secondo operando è zero
            if (num2 === 0) {
                console.log("Errore: divisione per zero");
                // mex errore
                return "Errore";
            }
            result = num1 % num2;
            break;
    }
    return result;
}




