import createPrompt from 'prompt-sync';

let prompt = createPrompt();




// 69. create a program to total the work that is done and how many are left 
const myArray =
  [
    1, 2, 3, 8, 10, 11, 15,
    6, 7, 17, 18, 22,
  ];
// submitted 7 items (15) 
// submitted 5 items (16)

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









// 1 ---------------------------------------------------------------------------------------------------

console.log('1. Write a program that will display the even numbers from 1 to 100.')

for (let i = 2; i <= 100; i += 2) {
  console.log(' ' + i)
};












// 2 ----------------------------------------------------------------------------------------------------

console.log('2. Write a program that will compute for and display the sum of the numbers divisible by 3, ranging from 1 to 100.')

for (let i = 3; i <= 100; i += 3) {
  console.log(' ' + i);
};













// 3-----------------------------------------------------------------------------------------------------

console.log('3. Write a program that will compute and display the sum of the powers of 2 from the first power to the nth power, where n is a nonnegative integer given by the user.');

function sumOfPowersOf2(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(2, i);
  }
  return sum;
}

const n = parseInt(prompt("Enter a nonnegative integer: "));

if (!isNaN(n) && n >= 0) {
  const result = sumOfPowersOf2(n);
  console.log(result);
}
















// 5-----------------------------------------------------------------------
console.log('5. Given an input n assumed one-digit, display a pattern.')

const pyramidOutput = (prompt("Enter a number to make pyramid: "));
function createPyramidPattern(height) {
  for (let i = 1; i <= height; i++) { // controls the number of rows in the pyramid base in te heigth parameter
      let line = ''; // this line initialize as an empty string for each row

      // Add spaces before the numbers
      for (let space = 1; space <= height - i; space++) { // this line is to add spaces before the numbers of each rows for the pyramid shape
          line += ' ';
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











// 6--------------------------------------------------------------------------------------------
console.log('6. Write a program that will display a pattern depending on the value of n entered by the user.')


const victoryOutput = (prompt("Enter a number to make v shape: "));

function createVShape(height) {
  for (let i = 1; i <= height; i++) {  // for rows of the pattern
    let line = '';
    for (let j = 1; j <= height * 2 - 1; j++) {  // for the columns of each row
      if (j === i || j === height * 2 - i || i === height) { // conditional statement for the inner loop whetherr to print an asterisk or space at each position to make v shape
        line += '*';
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }
}

createVShape(victoryOutput); // finally this generates the v shave pattern using asterisks with the specific height provided by the user












// 7--------------------------------------------------------------------------------
console.log('7. Write a program to display all combinations of A and B (from 1 to 100) that will make the expression false: (5 * A)-(3 * B) > 30 ')


for (let A = 1; A <= 100; A++) { // initiates a loop starts with A as 1 and continous until A reaches to 100, increment by 1 each time
  for (let B = 1; B <= 100; B++) { // inside A theres another loop for B that also starts at 1 until it reaches to 100
    if ((5 * A) - (3 * B) <= 30) { // conditional statement, it calculates the (5 * A) - (3 * B) and check if the result is less than or equal to 30
      console.log(`A=${A}, B=${B} => (5 * ${A}) - (3 * ${B}) = ${(5 * A) - (3 * B)}`); // evaluates to a value less than or equal to 30, it iterates through all posible combinations of A and B until the pair meet the condition
    }
  }
}











// 8-----------------------------------------------------------------------------------------------------
console.log('8. Write a program that reverses an input number.')


let i = prompt('Input value: ')

const reversedNum = i =>
  parseFloat(i.toString().split('').reverse().join('')) * Math.sign(i)
console.log(reversedNum(i))











// 9-------------------------------------- --------------------------------------------------------------
console.log('9. Write a program that gets as input a binary number and outputs its corresponding decimal equivalent. Declare your integer variables as long. A long declaration accommodates 8 digits for a number.')


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







// 10-----------------------------------------------------------------------------------------------------
console.log('10. Given the value of n from the user, write a program that will display the first n even numbers. ')

function displayEvenNumbers(n) {
  if (n <= 0) {
    console.log("Enter a positive integer.");
    return;
  }

  let count = 0;
  let evenNumber = 2;

  while (count < n) {
    console.log(evenNumber);
    evenNumber += 2;
    count++;
  }

}
const n = prompt("Enter a value: ");
displayEvenNumbers(parseInt(n));

















// 11-----------------------------------------------------------------------------------------------------
console.log('11. Write a program that accepts a number n and displays the sum of even numbers and the sum of odd numbers from 1 to n.')

function sumOfEvenAndOddNumbers(n) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      // Even number
      sumEven += i;
    } else {
      // Odd number
      sumOdd += i;
    }
  }

  console.log(`Sum of even numbers from 1 to ${n}: ${sumEven}`);
  console.log(`Sum of odd numbers from 1 to ${n}: ${sumOdd}`);
}


const n = prompt("Enter a number (n):");
sumOfEvenAndOddNumbers(parseInt(n));












// 12 ---------------------------------------------------------------------
console.log('12. Write a program that will compute for ax given real value a and positive integer x')


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











// 15-----------------------------------------------------------------------------------------------------
console.log('15. Write a program that will display the following: 4, 8, 12, 16, ..., 496')

for (let i = 4; i <= 496; i += 4) {
  console.log(' ' + i);
};


// 17------------------------------------------------------------------------
console.log('17. Write a program that will ask the user to enter 10 numbers and display the largest number entered.')

const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
let largest;

if (num1 >= num2) {
  largest = num1;
} else {
  largest = num2
}

console.log("The largest number is " + largest);



// 18-----------------------------------------------------------------------------------
console.log('18. Write a program that will ask the user to enter 100 numbers and display on the screen the highest and lowest of these numbers. ')

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



// 22-------------------------------------------------------------------------------------------------
console.log('22. Write a program that would print out a part of the multiplication table. Get as input the start number and end number. ')


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

// 26 -----------------------------------------------------------------------------------------------------------------------
console.log('26. Given an input n assumed one-digit, display a pattern.')

const pyramidOutput = (prompt("Enter a number to make pyramid: "));
function createPyramidPattern(height) {
  for (let i = 1; i <= height; i++) { // controls the number of rows in the pyramid base in te heigth parameter
    let line = ''; // this line initialize as an empty string for each row
    // Add spaces before the numbers
    for (let space = 1; space <= height - i; space++) { // this line is to add spaces before the numbers of each rows for the pyramid shape
      line += '';
    }
    // Add numbers and underscores
    for (let num = 1; num <= i; num++) { // this line adds number and underscores in a sequence to form the pyramid pattern
      line += num;
      if (num < i) {
        line += ' ';
      }
    }
    console.log(line);
  }
}

createPyramidPattern(pyramidOutput);
 

// 28----------------------------------------------------------------------------------------------------------
console.log('28. Write a program that will display a pattern depending on n')

const pyramidOutput = (prompt("Enter a number to make pyramid: "));

function createPyramidPattern(height) {
  for (let i = 1; i <= height; i++) { // controls the number of rows in the pyramid base in te heigth parameter
      let line = ' '; // this line initialize as an empty string for each row

      // Add spaces before the *
      for (let space = 1; space <= height - i; space++) { // this line is to add spaces before the numbers of each rows for the pyramid shape
          line += ' ';
      }
      for (let num = 1; num <= i; num++) { // this line adds Add * and sapce in a sequence to form the pyramid pattern
          line += '*';
          if (num < i) {
              line += ' ';
          }
      }
      console.log(line);
  }
}

createPyramidPattern(pyramidOutput);
