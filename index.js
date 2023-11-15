import createPrompt from 'prompt-sync';

let prompt = createPrompt();


// 4------------------------------------------------------------------------
//console.log('4. Write a program that will compute for the following given n & x:');


// 5-----------------------------------------------------------------------
console.log('5. Given an input n assumed one-digit, display a pattern. ex. if n = 5, display')
/* 
const pyramidOutput = (prompt("Enter a number to make pyramid: "));
function createPyramidPattern(height) {
  for (let i = 1; i <= height; i++) {
      let line = '';

      // Add spaces before the numbers
      for (let space = 1; space <= height - i; space++) {
          line += '  ';
      }

      // Add numbers and underscores
      for (let num = 1; num <= i; num++) {
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
// 6--------------------------------------------------------------------------------------------
console.log('6. Write a program that will display a pattern depending on the value of n entered by the user.')
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

// 7--------------------------------------------------------------------------------
console.log('7. Write a program to display all combinations of A and B (from 1 to 100) that will make the expression false: (5 * A)-(3 * B) > 30 ')
/* 
for (let A = 1; A <= 100; A++) {
  for (let B = 1; B <= 100; B++) {
    if ((5 * A) - (3 * B) <= 30) {
      console.log(`A=${A}, B=${B} => (5 * ${A}) - (3 * ${B}) = ${(5 * A) - (3 * B)}`);
    }
  }
}
*/

// 9-------------------------------------- --------------------------------------------------------------
console.log('9. Write a program that gets as input a binary number and outputs its corresponding decimal equivalent. Declare your integer variables as long. A long declaration accommodates 8 digits for a number.')
/* 
function binaryToDecimal(binary) {
  // Ensure that the binary input is no longer than 8 characters
  if (binary.length > 8) {
    return "Binary number is too long. Maximum length is 8 characters.";
  }

  let decimal = 0;

  for (let i = binary.length - 1, power = 0; i >= 0; i--, power++) {
    const digit = parseInt(binary[i]);
    decimal += digit * Math.pow(2, power);
  }

  return decimal;
}
const binaryNumber = prompt('binary input: ')
const decimalEquivalent = binaryToDecimal(binaryNumber);
console.log(`Decimal equivalent is: ${decimalEquivalent}`);
*/



 
// 12
console.log('12. Write a program that will compute for axgiven real value a and positive integer x')

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
// 17------------------------------------------------------------------------
console.log('17. Write a program that will ask the user to enter 10 numbers and display the largest number entered.')
/* 
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
let largest;

if (num1 >= num2){
  largest = num1;
} else {
  largest = num2
}

console.log("The largest number is " + largest);
 */
// 18-----------------------------------------------------------------------------------
console.log('18. Write a program that will ask the user to enter 100 numbers and display on the screen the highest and lowest of these numbers. ')
/*
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let smallest;
let largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}

if (num1 <= num2 && num1 <= num3) {
  smallest = num1;
} else if (num2 <= num1 && num2 <= num3) {
  smallest = num2;
} else {
  smallest = num3;
}

console.log('the smallest number is ' + smallest);
console.log('The largest number is ' + largest);
*/

// 19
// 20
// 21
// 22-------------------------------------------------------------------------------------------------
console.log('22. Write a program that would print out a part of the multiplication table. Get as input the start number and end number. ')

/* 
const table = []


const fnum = parseInt(prompt('Enter start number: '));
const lnum = parseInt(prompt('Enter end number: ')); 

for (let i = fnum; i <= lnum; i++) {

  let row = []

  for (let j = 1; j <= 10; j++) {
    row.push((i) * (j));
  }
  table.push(row)
}

for (let i = 0; i < table.length; i++) {
  let row = table[i]
  for (let j = 0; j < row.length; j++) {
    let value = row[j]
    process.stdout.write(value.toString());
    process.stdout.write('\t')
  }
  console.log()
}
 */

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