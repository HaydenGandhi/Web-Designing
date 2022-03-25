const id = 500
switch(id){
    case 100:
        console.log("id is 100")
        break
    case 250:
        console.log("id is 250")
        break
    case 500:
        console.log("id is 500")
        break
    default:
        console.log("no value found")
}

const today = new Date()
console.log(today)

const day = today.getDay()
console.log(day)


switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Value is Wrong")
}

// write a program using ifelse to check its evening or morning

const time = 10
if (time>=0 && time<12) {
    console.log("It's morning time")
} else {
  console.log("It's evening time")  
}

// write a program using ifelse to check if a given number is negative or positive

const number = -5
if (number<0) {
    console.log("It's a negative number")
} else if(number>0){
    console.log("It's a positive number")
}
else{
    console.log("Number is neither negative or positive")
}

// write a program to check who's salary is greater

const person_1 = 500
const person_2 = 1000
if (person_2>person_1){
    console.log("person 2 salary is greater than person 1")
}
else if(person_1>person_2){
    console.log("person 1 salary is greater than person 2")
}
else{
    console.log("Both person 1 and person 2 salary is same")
}
  
const employer_1 = 700
const employer_2 = 710
const employer_3 = 690
if (employer_3>employer_2 && employer_3>employer_1){
    console.log("employer 3 salary is greater than employer 2 salary")
}
else if(employer_2>employer_3 && employer_2>employer_1){
    console.log("employer 2 salary is greater than employer 1 salary")
}
else if(employer_3<employer_1 && employer_2<employer_1){
    console.log("Employer 1 salary is greater than employer 2 salary")
}
else{
    console.log("All person 1,2,3 salary is same")
}