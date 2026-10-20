import readline from 'readline/promises';
import {stdin as input, stdout as output} from "process";

const rl = readline.createInterface({
    input, output
});


async function getEdgeLength() {
    let value = await rl.question("Enter the length of the edge: ")
    value = parseFloat(value)

    if (isNaN(value) || value <= 0){
        return null;
    }

    return value;
}


async function main() {
    const edge = await getEdgeLength();

    if (edge === null){
        console.log("Invalid value.")
    }
    else {
        const volume = edge ** 3;
        console.log(`The cube volume is ${volume.toFixed(2)}`)
    }
    rl.close()
    
}

main()