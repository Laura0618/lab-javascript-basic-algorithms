// Iteration 1: Names and Input
let hacker1 = "Adam"
// console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Bob"
// console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

 if (hacker1.length ==  hacker2.length) { 
 console.log("Wow, you both have equally long names")
 } else if (hacker1.length <  hacker2.length) { 
     console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
     } else {
         console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
     }

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let driverSplited = hacker1.split(``);
let driverSpaces = driverSplited.join(` `);
let driverUppercase = driverSpaces.toUpperCase();
console.log(driverUppercase)

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
var splitString = hacker2.split("");
var reverseArray = splitString.reverse();
var joinArray = reverseArray.join("");
console.log(joinArray);


// 3.3 Depending on the lexicographic order of the strings, print:

if (hacker1.localeCompare(hacker2) == hacker2.localeCompare(hacker1)) {
    console.log("What?! You both have the same name?")
}
  else if (hacker1.localeCompare(hacker2) > hacker2.localeCompare(hacker1)) {
     console.log(`Yo, the navigator goes first definitely`)
 } 
 else {
     console.log(`The driver's name goes first.`)
 }



// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!

