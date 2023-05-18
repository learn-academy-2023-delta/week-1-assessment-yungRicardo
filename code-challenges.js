// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Create function to count characters in two strings and return string with the most characters
// characterCount = () => {
    //if (check if string1 greater than string2 in characters) {
    //    return string with highest characters
    //} else if (check if string1 less than string2) {
    //    returnn string with highest characters
    //}
//}
//Output: fruit with the highest character count

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
const characterCount = (fruit1, fruit2) => {
    if(fruit1.length > fruit2.length){
        return `"${fruit1}", has more characters`
    } else if(fruit1.length < fruit2.length){
        return `"${fruit2}", has more charecters`
    }
}
console.log(characterCount(fruit1, fruit2))
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
const characterCount2 = (fruit3, fruit4) => {
    if(fruit3.length > fruit4.length){
        return `"${fruit3}", has more characters`
    } else if(fruit3.length < fruit4.length){
        return `"${fruit4}", has more charecters`
    }
}
console.log(characterCount2(fruit3, fruit4))
// Expected outcome: "cherry"

// -------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:

// declare func (number) {
//     -condtions to check for at, below, & above temp with
//     given number
//         -return message about boiling point
// }

const boilingPointTemp = (num) => {
    if(num === 42){
        return `${num} is below boiling point`
    } else if(num === 212){
        return `${num} is at boiling point`
    } else if(num === 350){
        return `${num} is  above boiling point`
    }
}
const temperature1 = 42
// Expected output: "42 is below boiling point"
console.log(boilingPointTemp(temperature1))
const temperature2 = 350
// Expected output: "350 is above boiling point"
console.log(boilingPointTemp(temperature2))
const temperature3 = 212
// Expected output: "212 is at boiling point"
console.log(boilingPointTemp(temperature3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: 

// set new (var) = padres1984WorldSeriesRuns to concatenate with padres1998WorldSeriesRuns
// then output the .length of the new var

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

const padres4WorldSeriesRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(padres4WorldSeriesRuns.length)
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: 

// new var called backwardsCurrentCohort
// currentCohort will be split into an Array, then be
// ordered in reverse and last, be put in a string
// with the join method assigned to backwardsCurrentCohort


const currentCohort = "Delta 2023"
var backwardsCurrentCohort = currentCohort.split("").reverse().join("")
console.log(backwardsCurrentCohort)
// Expected output: "3202 atleD"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

// use lastIndexOf() to retrieve the last index of a repeating item in a array

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
console.log(numberOfConnections.lastIndexOf(42))
// Expected output: 7

const givenValue2 = 10
console.log(numberOfConnections.lastIndexOf(10))
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

// sort() on the array then reverse() to put array from smallest to largest

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
console.log(sanDiegoSummerTemperatures.sort().reverse())
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
console.log(sanDiegoWinterTemperatures.sort((a, b) => b-a))  
// Expected output: [68, 67, 66, 66, 62, 59, 59]
