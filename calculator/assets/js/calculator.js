'use strict'

console.log('sono connesso')

// prendere display e operatori della calcolatrice

const inputDisplay = document.getElementById('result');
const inputPlus = document.getElementById('plus');
const inputMinus = document.getElementById('minus');
const inputMultiply = document.getElementById('multiply');


//prendere tutti i valori numerici dal dom

const inputOne = document.getElementById('one');
const inputTwo = document.getElementById('two');
const inputThree = document.getElementById('three');
const inputFour = document.getElementById('four');
const inputFive = document.getElementById('five');
const inputSix = document.getElementById('six');
const inputSeven = document.getElementById('seven');
const inputEight = document.getElementById('eight');
const inputNine = document.getElementById('nine');

//transformarli in numeri

const one = parseInt(inputOne.textContent);
const two = parseInt(inputTwo.textContent);
const three = parseInt(inputThree.textContent);
const four = parseInt(inputFour.textContent);
const five =  parseInt(inputFive.textContent);
const six = parseInt(inputSix.textContent);
const seven =  parseInt(inputSeven.textContent);
const eight = parseInt(inputEight.textContent);
const nine = parseInt(inputNine.textContent);

let result;


//inseriamo all interno del display un carattere

inputOne.addEventListener("click", function(){
    
    //condizionale
    if(inputDisplay.textContent === '0'){
        inputDisplay.textContent = "1";
    } else{
        inputDisplay.textContent += "1"
    }
     console.log("è stato premuto l'1");
});



//mettiamo in ascolto il tasto plus
inputPlus.addEventListener("click",function(){
   console.log(`è stato premuto il tasto +`)
})




//questa funzione deve prendere 2 input e sommarli
function sum(input1, input2){

    const sum = input1 +  input2;
    console.log(sum);
    return sum;

}



