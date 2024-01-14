const fs = require('fs');
const readline = require('readline');

const inputFile = fs.createReadStream('input.txt');
const outputFile = fs.createWriteStream('output.txt');

const rl = readline.createInterface({
    input: inputFile,
});

let str1;
let str2;

rl.on('line', (line) => {

    str1 === undefined ? str1 = line.split("") : str2 = line.split("");

}).on('close', () => {

        str1.sort();
        str2.sort();
        if (str1.join("") === str2.join("")) {
            outputFile.write('YES');
        } else {
            outputFile.write('NO');
        }
    }
);