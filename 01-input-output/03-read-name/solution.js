import readline from "readline/promises";
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output});

const name = await rl.question("What's your name? ");
console.log("Hello, ", name);
rl.close();