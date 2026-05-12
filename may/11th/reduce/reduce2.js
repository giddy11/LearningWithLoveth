//array.reduce((accumulator, currentValue) => {
    // return updated accumulator  
// }, initialValue)

const numbers = [1,2,3,4,5,6,7]// to sum = 28

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

// fifth iteration
// acc + currentValue; 10 + 5 = 15
// acc = 15

// sixth iteration
// acc + currentValue; 15 + 6 = 21
// acc = 21

// seventh iteration
// acc + currentValue; 21 + 7 = 28
// acc = 28