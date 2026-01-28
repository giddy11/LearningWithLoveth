// Name Tag Maker: Ask for a first and last name, then print: "Welcome to the club, [Last Name], [First Name]!"

let firstName = "Loveth";
let lastName = "Ayauwu"

// console.log("Welcome to the club, " + lastName + ", " + firstName + "!")
// console.log(`Welcome to the club, ${lastName}`)

// Initial Finder: Ask for three words (like "Central Intelligence Agency") and print the initials (CIA).
let word1 = "Apple";
let word2 = "Banana";
let word3 = "Cherry";

// console.log(word1[0] + word2[0] + word3[0])

// Reverse Word: Take a word like "Python" and print it backward: "nohtyP".
/**
 * In JS, There are two kinds of of functions:
 *  1. In built functions: Are functions that comes with javascript when installed. The programmer doesnt create the inbuilt functions
 *  2. Custom functions: They are user defined functions. The user creates the function
 * 
 * Examples of Inbuilt Functions:
 *  1. String.reverse - reverses the string value
 * 
 * The String Class:
 *  - Strings are enclosed in double quotes
 *  - They are immutable ie they cannot change
 *  - You can only create a new strings but cant change the content
 *  - They do not have a reverse function.
 *  - The split function is responsible for converting a string to an array.
 * 
 * The Arrays Class:
 *  - They are mutable
 *  - Examples are:
 *      1. ["Oranges", "Pawpaw", "Mango"]
 *      2. [1, 3, 5, 7]
 *      3. ["Monday", "Tuesday", "Wednesday"]
 *  - They have a reverse function
 *  - If i want to convert a string to an array, i will make use of an inbuilt function called split:
 *      Hello.split("") => ["H", "e", "l", "l", "o"]
 * 
 *  - Assuming i have the following strings value:
 *    1. Loveth.split("") => ["L", "o", "v", "e", "t", "h"]
 *    2. Gideon.split("") => ["G", "i", "d", "e", "o", "n"]
 * 
 *  - The join("") function converts th array to a string;
 *     1. ["L", "o", "v", "e", "t", "h"].join("") => "Loveth"
 *     2. ["n", "o", "e", "d", "i", "G"].join("") => "oediG"
 * 
 *    Steps to solving this problem:
 *      1. Convert the string to an array using the split function in the string class
 *      2. In the array class, call the reverse function to reverse the elements.
 *      3. Convert the array back to a string using the join function
 */

let word4 = "Pythonshghdjdhdjdhjdhdjdhd";
let convertedString = word4.split("");
let reversedArray = convertedString.reverse();
let convertBackToString = reversedArray.join("");

let text = ""
console.log(text);

console.log(convertBackToString)