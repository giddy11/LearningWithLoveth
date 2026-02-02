//Square Maker: A function that prints a 3x3 block of # symbols.

function drawSquare(){
  for (let i = 0; i < 3; i++){
    console.log("###");
  }
}

// drawSquare()

// Lunch Picker: A function that randomly picks between "Pizza" or "Tacos."

function pickLunch(){
  let choices = ["Pizza", "Tacos", "Salad", "Soup"];
  // let randomNumber = Math.floor
  let randomNumber = Math.floor(Math.random() * 4)
  // let randomNumber = Math.random() * 40
  console.log("The random number is: ", + randomNumber)
  return choices[randomNumber];
}

let result = pickLunch()

console.log("The lunch that was selected is: " + result)