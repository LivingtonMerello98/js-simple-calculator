'use strict'

console.log('sono connesso')

//prendere tutti i valori numerici dal dom

const result = document.getElementById('result');

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

console.log(sum);