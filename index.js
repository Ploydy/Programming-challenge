import createPrompt from 'prompt-sync';

let prompt = createPrompt();

// 69. create a program to total the work that is done and how many are left 
const myArray =
  [
    1, 2, 3, 8, 10, 11, 15,
    6, 7, 17, 18, 22,
    5, 26, 28, 9, 12,
  ];
// submitted 7 items (15) 
// submitted 5 items (16)
// submitted 5 items (17)
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








// 13--------------------------------------------------------------------------------------

// 14--------------------------------------------------------------------------------------------


// 16-------------------------------------------------------------------------


// 19
// 20
// 21


// 23--------------------------------------------------------------------------------------------------

// 24
// 25

// 27
console.log('27. Given an input n assumed one-digit, display a pattern. ')
/* 
const pyramidOutput = (prompt("Enter a number to make pyramid: "));
function createPyramidPattern(height) {
  for (let i = 1; i <= height; i++) { // controls the number of rows in the pyramid base in te heigth parameter
    let line = ''; // this line initialize as an empty string for each row

    // Add numbers and underscores
    for (let num = 1; num <= i; num++) { // this line adds number and underscores in a sequence to form the pyramid pattern
      line += num;
      if (num < i) {
        line += ' ';
      }
    }

    // Add spaces before the numbers
    for (let space = 1; space <= height - i; space++) { // this line is to add spaces before the numbers of each rows for the pyramid shape
      line += '^';
    }



    console.log(line);
  }
}

createPyramidPattern(pyramidOutput);

 */


/* 
const victoryOutput = (prompt("Enter a number to make v shape: "));

function createVShape(height) {
  for (let i = 1; i <= height; i++) {  // for rows of the pattern
    let line = ' ';
    for (let j = 1; j <= height * 2  ; j++) {  // for the columns of each row
      if (j === i || j === height * 2 - i || i === height) { // conditional statement for the inner loop whetherr to print an asterisk or space at each position to make v shape
        line += i;
      } else {
        line += '-';
      }
    }
    console.log(line);
  }
}

createVShape(victoryOutput);

 */




// 29

// 30
// 31----------------------------------------------------------------------------
console.log('31. Write a program that will create a rectangle based on length and width. Use 2 iterative/loop statements.')
// box output length is 5 then width is 10



// 32














// 33-----------------------------------------------------------
console.log('33. Write a program that will display a pattern depending on the value of n entered by the user')


const userDiamond = prompt('diamond output: ')

function diamondOutput(height) { 
  if (height % 2 === 0) {  //  if the height is even, it increments it by 1 to ensure that the diamond has an odd height
    height++;
  }

  for (let i = 1; i <= height; i += 2) {
    let spaces = (height - i) / 2;
    let asterisks = i;

    console.log(" ".repeat(spaces) + "*".repeat(asterisks));  // this loop print the top part of the diamond 
  }

  for (let i = height - 2; i > 0; i -= 2) {
    let spaces = (height - i) / 2;
    let asterisks = i;

    console.log(" ".repeat(spaces) + "*".repeat(asterisks));  // this loop pirnt the bottom part of the diamond
  }
}
diamondOutput(userDiamond);  // this line print the output with the users input 'userDiamon' as the height parameter














// 34------------------------------------------------------------
console.log('34.  Write a program that will display a pattern depending on the value of n entered by the user')
/*
function createZShape() {
  const userInput = prompt('user input: ')

  for(let i = 1; i <= userInput; i++ ){
    let line = '';
    console.log(i)

  }
}
console.log(createZShape)
*/


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