// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: - Use the push method to add an item at end of array-colors.
//                        - Within the method goes in the parameter "indigo".
//                        - Output will be the push method returning the new length of the array.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: - Use the length method to return the number of characters in the string.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: - const (greeting) contains the value "Hello World! string".
//                        - On line 28 we reference index 4 in (greeting)
//                        - Returns "o"

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: - Here we have const (index) with a value of 1.
//                        - On line 39 array-languages is being referenced to print index 1 in the array
//                        - outputs "Ruby"   

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: recieved a TypeError: weekendDays.toUpperCase is not a function

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: -  dataTypes.length = 4 and typeOf(4) returns number
