const fs = require('fs');
const readline = require('readline');

const inputFile = fs.createReadStream('input.txt');
const outputFile = fs.createWriteStream('output.txt');

const rl = readline.createInterface({
    input: inputFile,
});

let n, rating;

rl.on('line', (line) => {

    n === undefined ? n = Number(line) : rating = line.split(" ").map(Number);

}).on('close', () => {
        let sum = 0;
        let result = [];

        for (let i = 0; i < n; i++) {
            result.push(i * rating[i] - sum);
            sum += rating[i];
        }

        sum = 0;

        for (let i = n - 1; i >= 0; i--) {
            result[i] += sum - (n - 1 - i) * rating[i];
            sum += rating[i];
        }

        outputFile.write(result.join(" "));
    }
);