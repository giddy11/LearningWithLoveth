// The Fortune Teller: User asks a question, the computer gives one of 3 random answers

let fortunes = ["Yes", "No", "Maybe"];

let result = fortunes[Math.floor(Math.random() * 3)];

console.log(result);