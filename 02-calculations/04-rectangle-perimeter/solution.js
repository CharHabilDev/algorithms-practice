import readline from 'readline/promises';
import {stdin as input, stdout as output} from 'process';

const rl=readline.createInterface({
    input, output
});


async function getValue(label){
    let value = await rl.question(`Enter the value for the ${label} of the rectangle: `);
    value = parseFloat(value)

    if (isNaN(value) || value <= 0){
        return null
    }

    return value;
}


async function main() {
    const length = await getValue('length');
    const width = await getValue('width');

    if (length === null || width === null){
        console.log("Invalid value.");
    } else{
        const perimetre = 2 * (length + width);
        console.log("Perimetre:", perimetre)
    }
    rl.close()
}

main()