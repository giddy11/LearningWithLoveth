// No  Destructuring
const user = {
    name: "Loveth",
    age: "35",
    stateOfOrigin: "Rivers"
};

// const userName = user.name;
// const userAge = user.age;
// const userStateOfOrigin = user.stateOfOrigin

// console.log("The user name is: ", userName)
// console.log("The user age is: ", userAge)
// console.log("The user state is: ", userStateOfOrigin)

//Array
let colors = ["blue", "red"]

//Difference between an objetc and arrays
// arrays stores collection of items [] while objects stores key value pairs values which is enclosed in {}


// With Destructuring
const { name, age, stateOfOrigin } = user

// console.log(name)
// console.log(age)
// console.log(stateOfOrigin)

const numbers = [10, 20, 0];
const [a, b, c, d] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
console.log(d);
