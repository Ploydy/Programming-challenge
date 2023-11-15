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
 
