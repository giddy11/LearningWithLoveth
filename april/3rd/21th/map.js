let numbers = [1,2,3,4,5,6]

// let newNumbers = [];  // [4, 5, 6, 7, 8, 9]

//add 3 to all the numbers in the numbers arrays
// for (let i = 0; i < numbers.length; i++){
//     // numbers[i] = numbers[i] + 3;
//     newNumbers.push(numbers[i] + 3);
// }

let newNumbers = numbers.map(n => n + 3);
// numbers.map(...)
// the map is an array method in js
// it loops through every item in the array just like a for loop
// it creates  a new array with the results
// it doesnt change or modify the original array.

//(n => n + 3)
// arrow function is a short way to write a function.
// the n represents each elements in the array
// add 3
// return the result

/**
 * numbers = [1,2,3]
 * take 1 > 1 + 3 = 4
 * take 2 > 2 + 3 = 5
 * take 3 > 3 + 3 = 6
 * 
 * [4,5,6]
 */


console.log("This is the old number arrays:", numbers)
console.log("This is the new arrays:", newNumbers)

// 4, 5, 6, 7, 8, 9
