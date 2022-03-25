const places="Malaysia,America,NewZealand,Toronto,Ireland"
result = places.split(',')
console.log(result)

const fullName= "Robin Mathew"
result_1 = fullName.slice(0,4)
result_2 = fullName.slice(6,10)
console.log(result_1,result_2)

const sentence="It was Harry's birthday party last night."
result = sentence.toUpperCase()
console.log(result)

const word="Umbrella"
result_3 = word.indexOf("l")
result_4 = word.lastIndexOf("l")
console.log(result_3,result_4)

const events="Happy Birthday"
result = events.replace("Happy Birthday","Merry Christmas")
console.log(result)

const foodItem="Piyush likes to eat pudding,ice-cream and sweets after dinner"
result = foodItem.includes("ice-cream")
console.log(result)

const car="Limozin"
result = car.charAt(4)
console.log(result)

const firstName="Harry"
const lastName="Potter"
result = firstName + " " + lastName

result = "Harry"
result += "Potter"

result = firstName.concat() + (" " + lastName)

console.log(result)

const colors=["red","blue","black","orange"]
Array.isArray(colors)
result = Array.isArray(colors)
console.log(result)

const colors_2=["red","blue","black","orange"]
result = "Rajeev has four colored candies such as " + colors_2[0] + "," + colors_2[1] + "," + colors_2[2] + " and " + colors_2[3]
console.log(result)

const number=[1,2,3,4,5,6,7]
number.splice(0,1)
number.splice(5,6)
console.log(number)

const favouriteFood=["Sweetcorns","Pizza","Noodles","Burger"]
favouriteFood.splice(1,1)
favouriteFood.splice(2,1)
console.log(favouriteFood)

const colors_3=["red","blue","black","orange"]
colors_3.unshift("red")
colors_3.push("orange")
console.log(colors_3)

colors_3.reverse()
console.log(colors_2)

const number1=[21,34,5,3,22,3,1]
const number2=[0,00,000,0000,00]
result = number1.concat(number2)
console.log(result)