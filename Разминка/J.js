const fs = require('fs');
const readline = require('readline');

const inputFile = fs.createReadStream('input.txt');
const outputFile = fs.createWriteStream('output.txt');

const rl = readline.createInterface({
    input: inputFile,
});

let n, a, b, t;


rl.on('line', (line) => {

    t === undefined ? t = Number(line) : [n, a, b] = line.split(" ").map(Number);

    if (n !== undefined) {
        if (n % a <= parseInt(n / a) * (b - a)) {
            outputFile.write('YES' + '\n');
        } else {
            outputFile.write('NO' + '\n');
        }
    }

}).on('close', () => {


    }
);