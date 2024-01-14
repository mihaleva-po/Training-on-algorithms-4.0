const fs = require('fs');
const readline = require('readline');

const inputFile = fs.createReadStream('input.txt');
const outputFile = fs.createWriteStream('output.txt');

const rl = readline.createInterface({
    input: inputFile,
});

let n, a, b;


rl.on('line', (line) => {

    a === undefined ? a = Number(line) :
        b === undefined ? b = Number(line) : n = Number(line);


}).on('close', () => {
        if (Math.ceil(b / n) < a) {
            outputFile.write('YES');
        } else {
            outputFile.write('NO');
        }
    }
);