import readline from "readline/promises";
import {stdin as input, stdout as output} from 'process';

const rl = readline.createInterface({
    input, output
});


let firstNumber = (await rl.question("Enter first number : ")).trim();
let secondNumber = (await rl.question("Enter second number : ")).trim();
let thirdNumber = (await rl.question("Enter third number : ")).trim();

firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);
thirdNumber = parseFloat(thirdNumber);

let average = (firstNumber + secondNumber + thirdNumber) / 3

console.log(`Average of ${firstNumber}, ${secondNumber}, ${thirdNumber} is ${average}`)
rl.close()