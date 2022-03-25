const person = {firstName:"Steve",
                lastName:"Smith",
                age:30,
                email:"steve_smith@gmail.com",
                hobbies:["Music","Web Designing","Cooking"],
                address:{City:"Miami",State:"FL"}}
    
let result = person["firstName"]
console.log(result)
        
result = person.firstName
console.log(result)

result = person.age
console.log(result)

result = person.hobbies[0]
console.log(result)

result = person.email
console.log(result)

result = person.address.City
console.log(result)

// Steve Smith is a Gentleman of age 30 yrs. His email address is steve_smith@gmail.com. He lives in Miami whose State is FL. His interests are Music, Web Designing and Cooking.

result = person.firstName + " " + person.lastName + " is a Gentleman of age " + person.age + " yrs. His email address is " + person.email + ". He lives in " + person.address.City + " whose State is " + person.address.State + ". His interests are " + person.hobbies[0] + ", " + person.hobbies[1] + " and " + person.hobbies[2] + "."
console.log(result)

const people = [{fname:"John",age:25},{lname:"Mike",interests:"Singing"}]
result = people[1].interests
console.log(result)

// John Mike is a youngster of age 25 who loves singing.

result = people[0].fname + " " + people[1].lname + " is a youngster of age " + people[0].age + " who loves singing."
console.log(result)

