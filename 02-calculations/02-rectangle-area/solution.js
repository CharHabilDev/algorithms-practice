import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl=readline.createInterface({
    input, output
});

async function getValue(label) {
    let value = (await rl.question(`Enter the value for the ${label} of the rectangle: `));
    value = parseFloat(value);

    if (!isNaN(value) && value > 0){
        return value;
    }
    
    return null;
}


async function main() {
    const length = await getValue('length');
    const width = await getValue('width');

    if (length === null || width === null){
        console.log('Invalid value.');
    } else {
        const area = length * width;
        console.log(`Rectangle area is ${area}`);
    }
    rl.close();
}

main()