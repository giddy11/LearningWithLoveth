// Talk Like a Pirate: A program that replaces "Hello" with "Ahoy" and "Friend" with "Matey."
 /**
  * 1. This is my friend. Her name is Loveth
  *    This is my matey. Her name is Loveth
  * 
  * 2. Hello my friend
  *    ahoy my matey
  */

 let speech = "Hello my friend"
 let pirate = speech.replace("Hello", "ahoy").replace("friend", "matey");

 console.log(pirate)