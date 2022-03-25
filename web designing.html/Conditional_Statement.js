const id = "100"
if (id == 100) {
    console.log("condition is true")
} else {
    console.log("condition is false")
}

if (id === 100) {
console.log("condition is true")
}
else {console.log("condition is false")}

// Single equal to (=) is an Assignment Operator which stores the Value or Different Types.
// Double equal to (==) is a Comparison Operator, it just matches the Value inside the Variable and it will not match the type of Variable.
// Triple equal to (===) is also a Comaparison Operator, it matches both the Values inside the Variable and it also matches the type of Variable.

const color = "Black"

if (color == "Black") {
    console.log("Answer is Correct")
}
else {console.log("Answer is Incorrect")}

// Not Equal to != (this is opposite of double equal to(==))
if (color!="Black"){
    console.log(false)
}
else{
    console.log(true)
}
if (id!=100){
    console.log(false)
}
else{
    console.log(true)
}
// Not double equal to!==(this is the opposite of triple equal to(===))
if (id !==100){
    console.log(true)
}
else{
    console.log(false)
}

if (id>200){
    console.log(true)
}
else{
    console.log(false)
}

if (id<=100){
    console.log(true)
}
else{
    console.log(false)
}

const color_2 = "red"
if (color_2 === "blue"){
    console.log("color is blue")
}
else if(color_2 === "red"){
    console.log("color is red")
}
else if(color_2 === "Black"){
    console.log("color is black")
}
else{
    console.log("no color matches")
}

//Logical Operators(&& , ||) all the conditions need to be true and for or or only one condition needs to be true
const age = 20
if(age>0 && age<12){
    console.log("person is a child")
}
else if(age>=13 && age<=19){
    console.log("person is a teenager")
}
else{
    console.log("person is an adult")
}

if(age<16 || age>19){
    console.log("Person can't run in the race")
}
else{
    console.log("person can register for the race")
}

// write a program to check whether a person with age 18 years in elligeable to get license or not

const age_2 = 18
if(age_2>=18)
{console.log("Person is elligealble to vote")}
else {console.log("person is not eligible to vote")}

// Switch Statements
const color_3 = "Black"
switch(color_3){
    case "red":
        console.log("color is red")
        break
    case "Black":
        console.log("color is black")
        break
    case "yellow":
        console.log("color is yellow")
        break
    default:
        console.log("no color found")
        break
}

