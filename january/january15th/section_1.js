// 1. Write a code  to calculate the sum of two numbers and store the final result in a  new variable. Then print that variable result
// 2. Write a code  to calculate the product of two numbers

//1.
let a = 10;
let b = 4;

let c = a + b;

// console.log(c) // 14

// 3. Use Logical operators to check if a number is greater than 10 and less than 20
// 4. Use Logical operators to check if a number is less than 5 or greater than 15

//AND:   T && T = T
//       T && F = F
//       F && T = F
//       F && F = F

//OR:
//      T || T = T
//      T || F = T
//      F || T = T
//      F || F = F

//NOT:
//      !(opposite) ie, !T = F
//                      !F = T

//3.
var number = 7

let isThisExpressionTrue = number > 10 && !(number < 20); // F && F = F

console.log(isThisExpressionTrue)

//4.
var number = 20
