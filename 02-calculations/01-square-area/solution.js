import readline from 'readline/promises';
import {stdin as input, stdout as output} from 'process';

const rl = readline.createInterface({
    input, output
});


async function getSide(){
    let side = (await rl.question("Enter the value of the side of the square: ")).trim();
    side = parseFloat(side);

    if (!isNaN(side) && side > 0){
        return side;
    }   
    
    return 0.0;
}


async function main(){
    const side = await getSide();
    if (side == 0.0){
        console.log('Invalid side value.');
    } else {
        const area = side * side;
        console.log(`Square area is ${area}`);
    }
    rl.close();
}

main()
