import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl=readline.createInterface({
    input, output
});


async function getRadius() {
    let radius = await rl.question("Enter the radius of the circle: ");
    radius = parseFloat(radius);

    if (isNaN(radius) || radius <= 0){
        return null;
    }
    return radius;
}


async function main() {
    const radius = await getRadius();

    if (radius === null){
        console.log("Invalid radius value.");
    }
    else{
        const circumference = 2 * Math.PI * radius;
        console.log(`Circle circumference is ${circumference}`);
    }
    rl.close()
}


main()