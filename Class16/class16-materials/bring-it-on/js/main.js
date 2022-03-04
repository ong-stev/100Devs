// *Variables*
// Create a variable and console log the value
let num1 = 1

console.log(num1)
// Create a variable, add 10 to it, and alert the value
let num2 = 2
num2 = num2 + 10
alert(num2)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNum (n1, n2, n3, n4) {
    alert(n1 - n2 - n3 - n4)
}

subtractFourNum(10, 5, 2, 1)
// Create a function that divides one number by another and returns the remainder
function divideNumAndRemainder (n1, n2) {
    return n1 % n2
}

console.log(divideNumAndRemainder(12, 3) )

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNum (n1, n2) {
    if (n1 + n2 > 50) {
        alert('Jumanji')
    }
}

addTwoNum(50,1)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeZebra (n1, n2, n3) {
    let product = n1 * n2 * n3
    if ( product % 3 === 0) {
        alert('Zebra')
    }
}
multiplyThreeZebra(3, 3, 1)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function logWordXTimes (word, num) {
    for(let i = 1; i <= num; i++) {
        console.log(word)
    }
}

logWordXTimes('wonderful', 21)