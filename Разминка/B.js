const fs = require('fs');
const readline = require('readline');

const inputFile = fs.createReadStream('input.txt');
const outputFile = fs.createWriteStream('output.txt');

const rl = readline.createInterface({
    input: inputFile,
});

let a, b, c, d;

rl.on('line', (line) => {

    [a, b, c, d] = line.split(" ").map(Number);

}).on('close', () => {

        let m = a * d + c * b;
        let n = d * b;

        for (let i = 2; i <= n; i++) {
            while (m % i === 0 && n % i === 0) {
                m /= i;
                n /= i;
            }
        }

        outputFile.write([m, n].join(" "));

    }
);
