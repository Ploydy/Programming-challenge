import createPrompt from 'prompt-sync';

let prompt = createPrompt();

// 69. create a program to total the work that is done and how many are left 
const myArray =
  [
    1, 2, 3, 8, 10, 11, 15,
    6, 7, 17, 18, 22,
  ];
// submitted 7 items (15) 
const numbersNotInArray = [];

for (let i = 1; i <= 49; i++) {
  if (!myArray.includes(i)) {
    numbersNotInArray.push(i);
  }
}

const totalNumbersLeft = numbersNotInArray.length;
const totalOfAlreadyDone = myArray.length;

console.log('Numbers not present in the array:', numbersNotInArray);
console.log('Total of already finish:', totalOfAlreadyDone);
console.log('Total items left :', totalNumbersLeft);

// 4------------------------------------------------------------------------
//console.log('4. Write a program that will compute for the following given n & x:');


// 5-----------------------------------------------------------------------
console.log('5. Given an input n assumed one-digit, display a pattern. ex. if n = 5, display')
/* 
const pyramidOutput = (prompt("Enter a number to make pyramid: "));
function createPyramidPattern(height) {
  for (let i = 1; i <= height; i++) { // controls the number of rows in the pyramid base in te heigth parameter
      let line = ''; // this line initialize as an empty string for each row

      // Add spaces before the numbers
      for (let space = 1; space <= height - i; space++) { // this line is to add spaces before the numbers of each rows for the pyramid shape
          line += '  ';
      }

      // Add numbers and underscores
      for (let num = 1; num <= i; num++) { // this line adds number and underscores in a sequence to form the pyramid pattern
          line += num;
          if (num < i) {
              line += '_';
          }
      }

      console.log(line);
  }
}

createPyramidPattern(pyramidOutput);
 */





// 9-------------------------------------- --------------------------------------------------------------
console.log('9. Write a program that gets as input a binary number and outputs its corresponding decimal equivalent. Declare your integer variables as long. A long declaration accommodates 8 digits for a number.')

/* 
function binaryToDecimal(binary) {
  // Ensure that the binary input is no longer than 8 characters
  if (binary.length > 8) {
    return "Binary number is too long. Maximum length is 8 characters.";
  }

  let decimal = 0; // initialize a variable decimal to store the decimal equivalent of binary number, This variable starts at 0

  for (let i = binary.length - 1, power = 0; i >= 0; i--, power++) { // initializes the loop index i to the last digit || 'power = 0' initializes a power variable to keep track of the power of 2 for each binary digit || the loop continous  as long as i is greater than or equal to 0, decrementing i each time
    const digit = parseInt(binary[i]); // this digit represents 0 or 1
    decimal += digit * Math.pow(2, power); // calculates the decimal value by multiplying the current binary digit with 2 raised to the power of its position from the right
  }

  return decimal; // once all digits have been processed the function returns the calculated decimal equivalent of the binary number
}
const binaryNumber = prompt('binary input: ') // this line is to get the user to input a binary number and store the input as binaryNumber
const decimalEquivalent = binaryToDecimal(binaryNumber); // calls the binarytodecimal function and passes the user provided binarynumber as an argument to calculate its decimal equivalent
console.log(`Decimal equivalent is: ${decimalEquivalent}`); // finally the calculated decimal equivalent to the console log to display the result
*/


// 12
console.log('12. Write a program that will compute for ax given real value a and positive integer x')

/* 
function computePower(a, x) {
  if (x < 0) {
    return "x must be a positive integer.";
  }

  let result = 1;

  for (let i = 1; i <= x; i++) {
    result *= a;
  }

  return result;
}

// Example usage:
const a = parseFloat(prompt("Enter a value: "));
const x = parseInt(prompt("Enter a positive integer: "));

if (isNaN(a) || isNaN(x)) {
  console.log("Please enter valid numeric values.");
} else {
  const result = computePower(a, x);
  console.log(`${a}^${x} = ${result}`);
}
*/

// 13--------------------------------------------------------------------------------------

// 14--------------------------------------------------------------------------------------------


// 16-------------------------------------------------------------------------


// 19
// 20
// 21


// 23--------------------------------------------------------------------------------------------------

// 24
// 25
// 26
console.log('26. Given an input n assumed one-digit, display a pattern.')


// 27
// 28
/*
const victoryOutput = (prompt("Enter a number to make v shape: "));

function createVShape(height) {
  for (let i = 1; i <= height; i++) {
    let line = '';
    for (let j = 1; j <= height * 2 - 1; j++) {
      if (j === i || j === height * 2 - i || i === height) {
        line += '*';
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }
}

createVShape(victoryOutput);
  */
// 29

// 30
// 31
// 32
// 33
// 34
// 35
// 36
// 37
// 38
// 39
// 40
// 41
// 42
// 43
// 44
// 45
// 46
// 47
// 48
// 49