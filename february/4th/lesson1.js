// Rock, Paper, Scissors: Use if statements to see who wins.

let user = "paper";
let computer = "rock";

if(user === computer){
    console.log("This is a tie");
} else if(user === "rock" && computer === "scissors") {
    console.log("User wins")
} else if (computer === "rock" && user === "scissors"){
    console.log("Computer wins")
} else if(user === "scissors" && computer === "paper") {
    console.log("User wins")
} else if (computer === "scissors" && user === "paper"){
    console.log("Computer wins")
} else if(user === "paper" && computer === "rock") {
    console.log("User wins")
} else if (computer === "paper" && user === "rock"){
    console.log("COmputer wins")
}