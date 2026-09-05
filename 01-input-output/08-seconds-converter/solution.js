import readline from 'readline/promises';
import {stdin as input, stdout as output} from 'process';

const rl = readline.createInterface({
    input, output
});


let userSeconds = await rl.question("Seconds: ");
userSeconds = parseInt(userSeconds);

let hours = parseInt(userSeconds / 3600);
let remainingSeconds = userSeconds % 3600;
let minutes = parseInt(remainingSeconds / 60);
let seconds = remainingSeconds % 60;

console.log(`${userSeconds} seconds = ${hours}H:${minutes}M:${seconds}S`);

rl.close();