
// Spread operators for arrays
const numbers = [1,2,3]
const newNumbers = [...numbers, 4,5,6]

console.log("New numbers variable: ", newNumbers)

// Spread operators for objects
const user = {
  name: "Loveth",
  age: "21"
}

const updatedUser = {
  ...user,
  location: "Abia"
}