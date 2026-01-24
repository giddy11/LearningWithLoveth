/**
 * Continuation on types of functions:
 * We have the Void function:
 *      A function that doesn't return anything
 * 
 * The fourth type of function is the Return type function:
 *  A function that returns a value
 */

//First scenarior
let num1 = 5;
let num2 = 10;
let res = num1 + num2
console.log("The res is " + res)


function add(number1, number2){
  return number1 + number2
}

function name(name){
  // return name
  return null
}

let word = name("Loveth")

console.log("This word will print: " + word)



//Second Scenarior
let result = add(4,6);

console.log("This is result value: " +result)