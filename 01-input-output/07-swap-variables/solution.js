import readline from 'readline/promises';
import {stdin as input, stdout as output} from 'process';

const rl = readline.createInterface({
    input, output
});

let firstNumber = await rl.question("Enter first number : ");
let secondNumber = await rl.question("Enter second number : ");
let tempNumber;

firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

console.log(`First number: ${firstNumber} | Second number: ${secondNumber}`);

console.log("\nPermutation.....")

tempNumber = firstNumber;
firstNumber = secondNumber;
secondNumber = tempNumber;

console.log(`First number: ${firstNumber} | Second number: ${secondNumber}`);
rl.close()