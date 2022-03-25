var a = 1
let b = 2
const c = 3
console.log(a, b, c)
// Functions-Functions are block of codes that are defined and called at later times or either defined and called at the same time.
function test(){
    console.log("Hello")
}
test()
// firstName is called as parameter or argument of the function full name.
function fullName(firstName){
    console.log(firstName)
}
fullName("Hayden")

function addition(x,y){
    return x + y
}
console.log(addition(12,4))
// Default Arguements

function fname(firstName = "Jessica",lastName = "Gandhi"){
    return"My Name is " + firstName +" "+ lastName + " and i'm 10 yrs old"
}
console.log(fname("Hayden","Gandhi"))
// Write a Program which Prints cube of a number and that number is 6

function cube(a){
    return a * a * a
}
console.log(cube(778))

// Write a Program to add 4 different Numbers

function add(a,b,c,d){
    return a + b + c + d
}
console.log(add(1,2,3,4))

function square(i){
    return z * z
}
console.log(square(67)) 

function cube(h){
    return h * h * h
}
console.log(cube(13)) 

function cube(g){
    return g * g * g * g
}
console.log(cube(29)) 



/* Immediadtely invokable function expressions (IIFEs).
The functions that you declare and run at the same time.
Such functions do not have any name.
These functions are also called as ananomous function. */

(function(){
    console.log("Such Functions execute at the same time.")
})();