const business = {firstName: "Ratan",
lastName: "Tata",
companyName: "Reliance",
yearOfEstablishment: 1992,
teamMembers: ["a","b","c","d"],
address: {Country: "India",City: "Mumbai",State:"Maharashtra"}}
// Ratan Tata is a Well-known business man of India who established the Reliance in the year 1992 along with 4 team members named as a,b,c and d. The main Work place station is In Mumbai.

const sentence = business.firstName + " " + business.lastName + " is a well-known business man of " + business.address.Country + " who established the " + business.companyName + " in the year " + business.yearOfEstablishment + " along with 4 team members named as " + business.teamMembers[0] + "," + business.teamMembers[1] + "," + business.teamMembers[2] + " and " + business.teamMembers[3] + "." + " The main Work Place station is in " + business.address.City + "."
console.log(sentence)

const people = [{fName: "John",age: 30},{lName: "Mike",interest: "Singing"},["London","Paris","New York"]]
// John Mike likes Singing and he did his live concerts in London, Paris and New York at the age of 30.

const sentence_2 = people[0].fName + " " + people[1].lName + " likes singing and he did his live concerts in " + people[2][0] + ", " + people[2][1] + " and " + people[2][2] + " at the age of " + people[0].age + "."
console.log(sentence_2)