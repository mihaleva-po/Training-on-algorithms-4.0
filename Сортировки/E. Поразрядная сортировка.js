const fs = require('fs');
const readline = require('readline');

const inputFile = fs.createReadStream('input.txt');
const outputFile = fs.createWriteStream('output.txt');

const rl = readline.createInterface({
    input: inputFile,
});

let n;
let arr = [];


rl.on('line', (line) => {

    n === undefined ? n = Number(line) :
        arr.push(line);

}).on('close', () => {

        outputFile.write('Initial array:' + '\n');
        outputFile.write(arr.join(", ") + '\n');

        let a = arr[0].length - 1;
        let numFaza = 1;

        let bucket;
        let count = 0;

        while (count < arr[0].length) {
            outputFile.write('**********' + '\n');
            outputFile.write('Phase ' + numFaza.toString() + '\n');

            bucket = new Array(10).fill("");

            for (let j = 0; j < n; j++) {
                if (bucket[arr[j][a]] === "") {
                    bucket[arr[j][a]] += arr[j];
                } else {
                    bucket[arr[j][a]] += ', ' + arr[j];
                }
            }

            arr = bucket.join(", ").split(", ").filter(n => n.toString());

            for (let i = 0; i < 10; i++) {
                let res = bucket[i] ? bucket[i].toString() : 'empty';
                outputFile.write('Bucket ' + i.toString() + ': ' + res + '\n');
            }
            a--;
            numFaza++;
            count++;
        }
        outputFile.write('**********' + '\n');
        outputFile.write('Sorted array:' + '\n');
        outputFile.write(bucket.filter(n => n).join(", "));

    }
);


