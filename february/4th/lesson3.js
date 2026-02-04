// Simple Quiz: Ask 3 questions about a favorite hobby; count how many they get right.

/**
 * 1. Is Gideon male or female?
 * 2. What state of origin is Loveth from?
 * 3. Is Loveth dark or fair
 */

let answer1 = "male";
let answer2 = "rivers";
let answer3 = "dark";

let personChoice1 = "femaale";
let personChoice2 = "RIVERS";
let personChoice3 = "fair";

let score = 0;

if(personChoice1.toLowerCase() === answer1){
    score++
}

if(personChoice2.toLowerCase() === answer2){
    score++
}

if(personChoice3.toLowerCase() === answer3){
    score++
}

console.log("The final score for this user is: " + score)