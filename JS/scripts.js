'use strict'

const output = documnet.getElementById('[output]');
const input = document.getElementById('[]');
const keys = document.querySelectorAll('[]')
const Calculator_grid = document.getElementById('[]')

let numberOperatorsArray = [];

number.forEach(function (numbers) {
    numbers.addEventListener('click', function () {
        display.innerHTML += this.innerHTML;
        numberOperatorsArray = [...numberOperatorsArray, this.innerHTML];
        console.log(numberOperatorsArray);
    })

operator.forEach(function (operator) {
    operator.addEventListener('click', function () {
        displayinnerHTML += this.innerHTML;
        numberOperatorsArray = [...numberOperatorsArray, this.innerHTML];
    })

result.addEventListener('click', function () {
        //do the math
        let numberStringHolder = "";
        let equalFunctionArray = [];
        for (let char of numberOperatorsArray){
            const numReg = /\d/;
            if (numReg.test(char) || char === '.') {
                numberStringHolder += char;
            }
            else {
                equalFunctionArray = [...equalFunctionArray, Number(numberStringHoler), char]
                numberStringHolder = "";
            }
            equalFunctionArray = [...equalFunctionArray, Number(numberStringHoler,)]
        };

        let multiply = resultArray.indexOf("*");
        while (multiply !== -1) {
            resultArray.splice(multiply-1, 3, resultArray[multiply-1] + resultArray[multiply+1])
            multiply = resultArray.indexOf("*")

        let divide = resultArray.indexOf("/");
        while (divide !== -1) {
            resultArray.splice(divide-1, 3, resultArray[divide-1] + resultArray[divide+1])
            divide = resultArray.indexOf("/")    
            
        let add = resultArray.indexOf("+");
        while (add !== -1) {
            resultArray.splice(add-1, 3, resultArray[add-1] + resultArray[add+1])
            add = resultArray.indexOf("+")
        }
        let subtract = resultArray.indexOf("-");
        while (subtract !== -1) {
            resultArray.splice(subtract - 1, 3, resultArray[subtract - 1] - resultArray[subtract+1])
            subtract = resultArray.indexOf("-")
        }
        
        input.innerHTML = reaultArray[0];

clear.addEventListener('click', function () {
   // input.inner.HTML += this.inputHTML;
})

DEL.addEventListener('click', function () {
   // input.inner.HTML += this.inputHTML;
})

document.addEventListener('DOMContentLoaded', (event) => {
    log.textContent = log.textContent + `DOMContentLoaded\n`;
})