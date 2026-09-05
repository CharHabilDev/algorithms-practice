import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({
    input, output
});

let firstNumber = (await rl.question("Enter first number : ")).trim();
let secondNumber = (await rl.question("Enter second number : ")).trim();

firstNumber = parseFloat(firstNumber)
secondNumber = parseFloat(secondNumber)

console.log(`Sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`)
rl.close()