import readline from 'readline/promises';import {stdin as input, stdout as output} from 'process';

const rl = readline.createInterface({
    input, output
})


async function getRadius() {
    let radius = await rl.question("Enter the radius of the sphere: ");
    radius = parseFloat(radius);

    if (isNaN(radius) || radius <= 0){
        return null;
    }

    return radius;
} 


async function main() {
    const radius = await getRadius()

    if (radius === null){
        console.log("Invalid radius value.");
    }
    else{
        const volume = (4 * Math.PI * radius ** 3) / 3;
        console.log(`The sphere volume is ${volume.toFixed(2)}`)
    }
    rl.close()
}


main()