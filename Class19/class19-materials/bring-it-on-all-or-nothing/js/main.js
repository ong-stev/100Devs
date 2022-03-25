// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let monster = true
alert(monster)

// Declare a variable, reassign it to your favorite color, and console log the value
let penguin = 'animal'

penguin = 'blue'
console.log(penguin)
// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function sumOfFourNums(num1, num2, num3, num4) {
    return (num1 + num2 + num3) / num4
}

console.log(sumOfFourNums(5, 15, 20, 4) )

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function powerOfTwoNums (num1, num2) {
    console.log( Math.pow(num1, num2) )
}

powerOfTwoNums(2, 5)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function trueAndFalse (boolean1, string1) {
    // if(boolean1) {
    //     alert(string1)
    // } else {
    //     console.log(string1)
    // }
    // boolean1 ? alert(string1) : console.log(string1)
}

const alertOrLog = (b,str) => b ? alert(str) : console.log(str)

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzz(num1) {
    for (let i = 1; i <= num1; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}