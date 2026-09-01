import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({
    input, output
});

let age = await rl.question("How old are you? ")
age = parseInt(age)
console.log(`You're ${age} years old.`)
rl.close()