//const numbers = [1,2,3,4]
//array.reduce((accumulator, currentValue) => {
    // return updated accumulator  
// }, initialValue)

const numbers = [1,2,3,4]// 24

const result = numbers.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
}, 1)

// Steps breakdown
// initial value = 1
// acc = 1

//first iteration
// acc * currentValue = 1 * 1 = 1
// acc = 1

//second iteration
// acc * currentValue = 1 * 2 = 2
// acc = 2

//third iteration
// acc * currentValue = 2 * 3 = 6
// acc = 6

//forth iteration
// acc * currentValue = 6 * 4 = 24
// acc = 24

console.log("Final result:", result)

//find largest numbers; const numbers = [2,5,3,9,14,5,12] // 14
//count total characters; const fruits = ["mango", "peer", "banana"]// 15