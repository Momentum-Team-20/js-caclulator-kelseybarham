console.log('connected')

/*
This function takes a number
and inserts it into the display in the calculator
*/
let buttonPress = function(number) {
    console.log(number)
/**
 * 1. Grab the display element
 * 2. Create a new text element that contains number
 * 3. prepend the text element to the display element
 */

const displayContainer = document.querySelector('#displayscreen')
console.log(displayContainer)
let numberContainer = document.createElement('div')
let numberText = document.createTextNode(number)
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
        console.log(event.target.innerText)
    buttonPress(number.innerText)
})
}



