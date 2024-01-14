const fs = require('fs');
const readline = require('readline');

const inputFile = fs.createReadStream('input.txt');
const outputFile = fs.createWriteStream('output.txt');

const rl = readline.createInterface({
    input: inputFile,
});

let N, M, str, R, L;
let otrezok;


rl.on('line', (line) => {

    if (N === undefined) {
        [N, M] = line.split(" ").map(Number);
    } else if (str === undefined) {
        str = line.split(" ").map(Number);
    } else {
        [R, L] = line.split(" ").map(Number);

        otrezok = str.slice(R, L + 1);

        otrezok.sort((a, b) => a - b);

        if (otrezok[0] === otrezok[otrezok.length - 1]) {
            outputFile.write('NOT FOUND' + '\n');
        } else {
            outputFile.write(otrezok[otrezok.length - 1].toString()+ '\n');
        }
    }


}).on('close', () => {

    }
);
