/* We are having 2 types of data types
1.  (They are directly stored in the memory) primitive data types:
a. strings
b. number
c. boolean
d. null
e. undefined
f. symbols
2. (Only their address is stored in the memory) referance data types (these are also called as objects):
a. arrays
b. object literals
c. functions
d. dates */

// Strings

var car = "Felix"
console.log("My favourite car is", car)

// Number

var age = 30
console.log("Age of Smith is", age)

// Boolean

var hasKids = false
console.log("Smith is having kids", hasKids)

// Null (Empty Value) Null takes the space in the memory

var color = null
console.log("Color", color)

// Undefined (Initializing the Variable and not asignning it any value)

var fruits
console.log(fruits)

//Array (Array is a list or collection of different Data Types)

const hobbies = ["Lego's","Cricket","Coding","Gaming"]
console.log(hobbies)
console.log(hobbies.length)

const fruits = ["Cherry",25,true,null]
console.log(fruits)

// Object Literals (These are called as key value pairs)

const address = {0:"UK",1:"City",2:true,3:102,4:["Apple","Orange","Pear","Grapes"]}
console.log(address)

// Array inside Array

const mixed = ["Harry Potter","Jack and the Beanstalk",["Roblox","Minecraft","Fortnite",["Peter Pan","Treasure Island","James and the Giant Peach",["Cherry"]]]]
console.log(movies)

// Object Literals in Arrays

const test = [{1: "Chair", 2: "Table", 3: "Pear"},"Cherry",8,false]
console.log(test)

// Arrays inside Object Literals

const test2 = {1: ["Burger","Sandwich","Apple"],2: ["Pizza","Fish"]}
console.log(test2)




