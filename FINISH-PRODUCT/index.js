import createPrompt from 'prompt-sync';

let prompt = createPrompt();


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

// 8-----------------------------------------------------------------------------------------------------
console.log('8. Write a program that reverses an input number.')


let i = prompt('Input value: ')

const reversedNum = i =>
  parseFloat(i.toString().split('').reverse().join('')) * Math.sign(i)
console.log(reversedNum(i))


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

// 15-----------------------------------------------------------------------------------------------------
console.log('15. Write a program that will display the following: 4, 8, 12, 16, ..., 496')

for (let i = 4; i <= 496; i += 4) {
  console.log(' ' + i);
};
 