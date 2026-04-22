let numbers = [1,2,3,4,5,6,7,8,9,10];

// numbers.push(11);
// numbers.push(12);
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.shift();
// numbers.shift();

//slice
let newArray = numbers.slice(3,6);

console.log(newArray);


// let lengthOfNumbers = numbers.length;

// console.log(lengthOfNumbers)
console.log("Number arrays before splice was performed")
console.log(numbers)
console.log("------------------------------------------------")

console.log("When splice was performed");
// numbers.splice(2,4)
numbers.splice(1, 3, 99)

console.log("The final numbers arrays is:", numbers);

