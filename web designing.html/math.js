/* Rules to initialize variables or to give names to variables
1. You can't start your variable name with a number eg 123Hayden, but you can end your variable name with a number eg Hayden123
2. You can't give space between variable names
3. Except underscore and Dollar sign, no other spatial is allowed to use inside variable names eg $Hayden is correct but, #Hayden or Hayden% is not acceptable
*/

const num_1 = 1000
const num_2 = 500
const num_3 = 250
const num_4 = 100
const num_5 = 50
const num_6 = 200
let result
result = num_1 * num_2 * num_3
console.log("The sum of 2 numbers is", result)
result = num_1 - num_2
console.log("The Subtraction of 2 Numbers is", result)
result = num_1 * num_2
console.log("The Multiplications of the 2 numbers is", result)
result = num_1 / num_2
console.log("The Division of the 2 numbers is", result)
result = num_1 % num_2
console.log("The Remainder of the 2 numbers is", result)

// Calculate the average of numbers (Sum of all the numbers divided by the total numbers)

var sum = num_1 + num_2 + num_3 + num_4 + num_5 + num_6
var count = 6
var average = sum / count
console.log("average of 6 numbers is", average)

// find the cube of a number

result = num_2 * num_2 * num_2
console.log(result)

result = num_6 * num_6
console.log(result)

// Math object

result = Math.PI
console.log(result)

// Find the Perimeter of a Rectangle (2 * (length + breadth))

var length = 120
var breadth = 40
result = (length + breadth) * 2
console.log("Perimeter of Rectangle is", result)

// Find the absolute value of -50 (it converts negative values into positive ones)

var simple=-50
result = Math.abs(simple)
console.log(result)

// Finding the Maximum value from 5 numbers

result = Math.max(27,81,5,0,30)
console.log(result)

// To round the values

result = Math.round(2.8)
console.log(result)

// To ceil the values 

result = Math.ceil(2.8)
console.log(result)

// To floor the values

result = Math.floor(2.3)
console.log(result)

// To generate Random numbers

result = Math.random()
console.log(result)

// To Generate whole numbers

result = Math.floor(Math.random() * 20 + 1)
console.log(result)

// Calculating the Power of a number

result = Math.pow(2,5)
console.log(result)

// Finding the Square root of a number

result = Math.sqrt(81)
console.log(result)








