/**
 * Why functions matter in frontend:
 * 1. Handle button clicks
 * 2. Validate form inputs
 * 3. fetch and display data
 * 4. Reuse logic across pages or projects
 */

// write a progra that calculates the area  of a circle
// PI * r * r

function calculateAreaOfCircle(radius){
  return 3.142 * radius * radius
}

// First method
const PI = 3.142;
let r = 5
let areaOfCircle = PI * r * r

console.log(areaOfCircle)

// Second method
let res = calculateAreaOfCircle(5)
console.log("The result from second method is: " + res)