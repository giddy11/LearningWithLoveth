//[1,2,3,4]

//const numbers = [1,2,3,4]
//array.reduce((accumulator, currentValue) => {
    // return updated accumulator  
// }, initialValue)

const numbers = [1,2,3,4]// to sum

const result = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0)

console.log("Final result:", result)

//Step by step breakdown
// initial value = 0
// acc = 0
// currentValue = 1

//first iteration
//acc + currentValue; 0 + 1 = 1
// acc = 1

// second iteration
// acc + currentValue; 1 + 2 = 3
// acc = 3

// third iteration
// acc + currentValue; 3 + 3 = 6
// acc = 6

// fourth and final iteration
// acc + currentValue; 6 + 4 = 10
// acc = 10

// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//   sum += numbers[i];
// }

// console.log("The value sum is: ", sum);