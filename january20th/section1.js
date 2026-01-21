/**
 * Odd numbers: 1, 3, 5, 7, 9, ... 3/2=remainder; 4/2=0
 * Even numbers: 0, 2, 4, 6, 8, ...
 * 
 * DIvisor: / for examople 5/3....
 * Modulus: %
 */

let num1 = 3
let num2 = 2
let result;

result = num1 % num2

console.log(result)


let value = 0

if (value % 2 == 1){
  console.log("Odd Number");
} else{
  console.log("Even Number");
}