// Array Methods

const firstName = "Hayden"
const numbers = [0,1,2,3,4,5]
console.log(numbers)

const number = new Array(1,2,3,4,5)
console.log(numbers)

const fruits = ["Apple","Mango","Orange","Kiwi","Banana"]
console.log(fruits)

const mixed = ["Pear",56,true,["Harry Potter",67,false],{key: "pear",key1: 0,key2:true }]
console.log(mixed)

// 1. isArray() Method 

// Check if the firstname and number variables are array or not array

let result = Array.isArray(firstName)
result = Array.isArray(numbers)
console.log(result)

// 2. Indexing Method
result = numbers[2]
console.log(result)

result = fruits[3]
console.log(result)

// 3. Mutation of Arrays: It means Modification of arrays(Inserting items inside the Array, Deleting items from the array and changing the items of Array)
fruits[1]="Pappaya"
console.log(fruits)

fruits[3]="Pear"
console.log(fruits)

fruits[5]="Strawberry"
console.log(fruits)

fruits[6]="Cherry"
console.log(fruits)

// 4. Pop Method(this method is used to delete the item of array from the last every time, you will call it)
const colors = ["Red","Orange","Yellow","Green","Blue"]
colors.pop()
console.log(colors)
colors.pop()
console.log(colors)
colors.pop()
console.log(colors)

// 5. Shift Method(This Method is used to delete items from the beggining of array whenever you will call it)
const cars = ["A","B","C","D","E"]
cars.shift()
console.log(cars)

// 6. Splice Method(This Method will take off value from anywhere in the Array)
const numbers_3 = [1,2,3,4,5,6,7,8,9,10]
numbers_3.splice(2,4)
console.log(numbers_3)
// First thing you have to add is starting index from the item you want to delete and the second thing you have to do is mention the count of items you want to delete in total

const foods = ["Burger","Pizza","Chips","Taco","Chocolate"]
foods.splice(3,1)
console.log(foods)

// 7. Push Method(Push Method is used to add the items to the array in the end)
console.log(numbers_3)
numbers_3.push(11,12,13,14,15,16)
console.log(numbers_3)
numbers_3.push(17,18,19,20,21)
console.log(numbers_3)

// 8. Unshift Method(This Method is used to add the items in the array in the beggining)
console.log(foods)
foods.unshift("Taco")
console.log(foods)

// 9. Reverse Method
foods.reverse()
console.log(foods)

// 10. Concat Method(Combine two array's together)
const a = ["Cake","Chips"]
const b = ["Crisp","Banana"]
result = a.concat(b)
console.log(result)

// Remove mango and apple from the array
const collection = ["Banana","Orange","Apple","Mango"]
collection.splice(2,2)
console.log(collection)

// Add Kiwi to the above collection array in the Beggining
collection.unshift("Kiwi")
console.log(collection)

// Change orange to Pappaya in the collection array
collection[2]="Pappaya"
console.log(collection)