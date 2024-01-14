const fs = require('fs');
const readline = require('readline');

const inputFile = fs.createReadStream('input.txt');
const outputFile = fs.createWriteStream('output.txt');

const rl = readline.createInterface({
    input: inputFile,
});

let skobki;

rl.on('line', (line) => {

    skobki = line.split("");

}).on('close', () => {

        let stek = [];

        for (let i = 0; i < skobki.length; i++) {
            if (skobki[i] === '(' || skobki[i] === '[' || skobki[i] === '{') {
                stek.push(skobki[i]);
            } else {
                if ((skobki[i] === ')' && stek.pop() === '(') ||
                    (skobki[i] === ']' && stek.pop() === '[') ||
                    (skobki[i] === '}' && stek.pop() === '{')) {
                    null;
                } else {
                    outputFile.write('no');
                    return;
                }
            }
        }
        if (stek.length === 0) {
            outputFile.write('yes');
        } else {
            outputFile.write('no');
        }
    }
);