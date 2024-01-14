const fs = require('fs');
const readline = require('readline');

const inputFile = fs.createReadStream('input.txt');
const outputFile = fs.createWriteStream('output.txt');

const rl = readline.createInterface({
    input: inputFile,
});

let n, m, arr1, arr2;


rl.on('line', (line) => {

    n === undefined ? n = Number(line) :
        arr1 === undefined ? arr1 = line.split(" ").map(Number) :
            m === undefined ? m = Number(line) :
                arr2 = line.split(" ").map(Number);

}).on('close', () => {

    if (n !== 0 && m !== 0) {
        let r = 0;
        let l = 0;

        let result = [];

        while (r < arr1.length && l < arr2.length) {
            if (arr1[r] < arr2[l]) {
                result.push(arr1[r]);
                r++;
            } else {
                result.push(arr2[l]);
                l++;
            }
        }

        if (r < arr1.length) {
            result.push(...arr1.slice(r));
        }

        if (l < arr2.length) {
            result.push(...arr2.slice(l));
        }
        outputFile.write(result.join(" "));
    } else {
        if (n === 0) {
            outputFile.write(arr2.join(" "));
        } else {
            outputFile.write(arr1.join(" "));
        }
    }

    }
);