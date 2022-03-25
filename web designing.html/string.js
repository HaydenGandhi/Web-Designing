const firstName = "Johnson"
const lastName = "Steve"

// 1. Concatenation of Strings

let result = firstName + " " + lastName
console.log(result)

const age = 30

// Johnson Steve is a buisness man whose age is 30 yrs and he lives in united kingdom

result = firstName + " " + lastName + " is a buisness man whose age is " + age + " yrs and he lives in united kingdom."
console.log(result)

// 2. Append Method

result = "My name is Hayden and "
result+="I am 10 yrs old."
result+=" I love to code"
console.log(result)

// 3. Concat Method

result = firstName.concat(" " + lastName)
console.log(result)

// Escaping Method (escaping characters are not counted inside the length of a string)

result = 'that\'s awesome, I can\\\\\\\'t wait'
console.log(result.length)

// Uppercase and Lowercase Methods

result = firstName.toUpperCase()
console.log(result)

// Index Correcter

result = firstName[3].toUpperCase()
console.log(result)

// charAt Method

result = firstName.charAt("3").toUpperCase()
console.log(result)

// indexOf Method

result = firstName.indexOf("n")
console.log(result)

result = firstName.lastIndexOf("n")
console.log(result)

// Substring Method (starting index, last index + 1)

result = firstName.substring(0,3)
console.log(result)

result = lastName.substring(1,4)
console.log(result)

// Split Method (Converting the String into an Array Methods using separators)

const tags = "Web-Designing,Web-Development,Full-Stack"
result = tags.split(',')
console.log(result)

result = firstName[2].toUpperCase()
console.log(result)

// Replace Method

result = firstName.replace("Johnson","Hayden")
console.log(result)

// Includes Method

result = firstName.includes("Johnson")
console.log(result)

// Find the Length of

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// The Length of Given String is dash

result = text.length
console.log("The Length of Given string is",result)

// Get Output Banana

let fruit = "Apple,Banana,Mango"
result = fruit.substring(13,19)
console.log(result)

// Alter the Text to get the output like

// Please visit MICROSOFT

let text_1 = "Please visit Microsoft"
result = text_1.replace("Microsoft","MICROSOFT")
console.log(result)

// Use Concat Method to get the output Hello World

let a = "Hello"
let b = "World"
result = a.concat(b)
console.log(result)

// It's raining today

let c = 'It\'s'
let d = 'Raining'
result = c.concat(d)
console.log(result)

// Get the index of Second o in the Given string

let values = "Hello World"
result = values.lastIndexOf("o")
console.log(result)

// Convert String to the array through a separator#

let greet = "Happy#Birthday#Johnson% he is# 20yrs# old-now"
result = greet.split("#")
console.log(result)

// Check Whether the sentence is containing the word called web inside it or not

let sentence = "Johnson likes to do Web Application,Website Development,and Web desining"
result = sentence.includes("web")
console.log(result)

// Template Strings

result = `My name is ${firstName}`
console.log(result)

result = `<h1 style = "color:red"> The Details of the Person</h1><img src = "https://th.bing.com/th/id/R.228f4a92375c1546f0577499a6805e40?rik=7NZiDqpbgq6D%2fQ&riu=http%3a%2f%2fcdn.ndtv.com%2ftech%2fimages%2fgoogle_logo_redesign_2015_newest1.jpg&ehk=zdp9oNanw1z3%2baNTR19T93za9bxK9GLbULq5%2fYDQIo4%3d&risl=&pid=ImgRaw&r=0" height="400px" width="400px"><ul> <li>${firstName}</li> </ul>`
document.body.innerHTML = result