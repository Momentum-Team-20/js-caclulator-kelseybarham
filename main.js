console.log('connected')
const userInputs = []

/*
This function takes a number
and inserts it into the display in the calculator
*/
// save a function (a doer) that takes an argument (input) of number and is called createTextOnDisplay 
let updateDisplay = function(textToUpdateDisplay) {
    console.log(textToUpdateDisplay)
/**
 * 1. Grab the display element
 * 2. Create a new text element that contains number
 * 3. prepend the text element to the display element
*/

const displayContainer = document.querySelector('#displayscreen')
console.log(displayContainer)
let numberContainer = document.createElement('div')
let numberText = document.createTextNode(textToUpdateDisplay)
console.log(numberContainer)
console.log(numberText)
numberContainer.appendChild(numberText)
console.log(numberContainer)
displayContainer.prepend(numberContainer)
console.log(displayContainer)

}

let numbers = document.querySelectorAll('.number')
console.log(numbers)

for (let number of numbers) {
    number.addEventListener('click', (event) => {
    if(userInputs.length === 0) {
        const displayContainer = document.querySelector('#displayscreen')
        displayContainer.innerHTML = ""
    }
    console.log(event.target.innerText)
    updateDisplay(event.target.innerText)
    userInputs.push(event.target.innerText)
})
}

let operators = document.querySelectorAll('.operator')
console.log(operators)

for (let operator of operators) {
    operator.addEventListener('click', (event) => {
        console.log(event.target.innerText)
        updateDisplay(event.target.innerText)
        userInputs.push(event.target.innerText)
    })
}

let equals = document.querySelector('.equals')
equals.addEventListener('click', (event) => {
console.log(eval(userInputs.join("")))
const displayContainer = document.querySelector('#displayscreen')
displayContainer.innerHTML = ""
updateDisplay(eval(userInputs.join("")))
userInputs.length = 0;
})

let clear = document.querySelector('.clear')
clear.addEventListener('click', (event) => {
    const displayContainer = document.querySelector('#displayscreen')
    displayContainer.innerHTML = ""
    userInputs.length = 0;
})
