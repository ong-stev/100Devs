//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['Seinfeld', "Silicon Valley", "GoT"]

// for (let i = 0; i < tvShows.length; i++) {
//     console.log(tvShows[i])
// }
tvShows.forEach( show => console.log(show))

//Create and array of numbers
let numArr = [1, 2, 3, 4, 5]
//Return a new array of numbers that includes every even number from the previous Arrays
let onlyEvens = arr => arr.filter(n => n % 2 === 0 )
console.log(onlyEvens(nums))
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumSecondLowandHigh(arr) {
    let sorted = arr.sort((a,b) => a-b)
    alert( sorted[1] + sorted [ sorted.length - 2])
}
sumSecondLowandHigh([2,3,1,5,4])