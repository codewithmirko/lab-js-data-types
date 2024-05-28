/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

const tongueTwister = s1.concat(" ", s2, " ", s3, " ", s4, " ", s5);

// Print out the concatenated string
console.log(tongueTwister);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

console.log(part1.length);

const CamelTrail =
  part1.slice(0, part1.length - 1) +
  part1[part1.length - 1].toUpperCase() +
  part2.slice(0, part2.length - 1) +
  part2[part2.length - 1].toUpperCase();

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

// Print the cameLtaiL-formatted string
console.log(CamelTrail);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;
const tipPercentage = 15;

// Calculate the tip (15% of the bill total)

const tipAmount = (billTotal * tipPercentage) / 100;

// Print out the tipAmount
console.log(tipAmount);

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomNum = Math.ceil(Math.random() * 10);

// Print the generated random number

console.log(randomNum);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//false

const expression2 = a || b;
//true

const expression3 = !a && b;
// false

const expression4 = !(a && b);
// true

const expression5 = !a || !b;
// true

const expression6 = !(a || b);
// false

const expression7 = a && a;
// true
