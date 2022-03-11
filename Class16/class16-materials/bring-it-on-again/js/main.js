// *Variables*
// Declare a variable, assign it a value, and alert the value
let num = 1

alert(num)
// Create a variable, divide it by 10, and console log the value
let divideByTen = 20

divideByTen = divideByTen/10

console.log(divideByTen)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThreeNumAndAlert(num1, num2, num3) {
    alert(num1 * num2 * num3)
}

multiplyThreeNumAndAlert(3, 5, 10) 
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addTwoSubtractTwoConsoleLog (num1, num2, num3, num4) {
    console.log((num1 + num2) - (num3 + num4))
}

addTwoSubtractTwoConsoleLog(5, 10, 9, 3)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function greaterThan25Winna(num1, num2, num3) {
    let quotient = 100 + num1 - num2 / num3
    if (quotient > 25) {
        console.log("WE HAVE A WINNA")
    }
}

greaterThan25Winna(10, 10, 2)
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function weekdayOrWeekend (day) {
    if (day = "saturday" || "sunday") {
        console.log("weekend")
    }  else if (day = "monday" || "tuesday" || "wednesday" || "thursday" || "friday") {
        console.log("week day")
    } else {
        console.log("Try again!")
    }
}

weekdayOrWeekend ("saturday")
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function countInThee (num1) {
    for (let i = 1; i < num1;  )
}