let result
const today = new Date()
console.log(today)

const birthday = new Date("5-10-2011")
console.log(birthday)

const birthday_2 = new Date("May 10 2011")
console.log(birthday_2)

const birthday_3 = new Date("5/10/2011 10:16:34")
console.log(birthday_3)

// Get Methods

result = today.getMonth()
console.log(result)

result = today.getDate()
console.log(result)

result = today.getDay()
console.log(result)

result = today.getFullYear()
console.log(result)

result = today.getHours()
console.log(result)

result = today.getMinutes()
console.log(result)

// Setting Methods

birthday_3.setMonth(8)
console.log(birthday_3)

birthday_3.setDate(28)
console.log(birthday_3)

birthday_3.setFullYear(2045)
console.log(birthday_3)

birthday_3.setHours(3)
console.log(birthday_3)

birthday_3.setMinutes(56)
console.log(birthday_3)

birthday_3.setSeconds(23)
console.log(birthday_3)