const fs = require('fs');
const readline = require('readline');

const inputFile = fs.createReadStream('input.txt');
const outputFile = fs.createWriteStream('output.txt');

const rl = readline.createInterface({
    input: inputFile,
});

let n, arr;


const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    let rand = Math.floor(1 + Math.random() * (arr.length - 1));
    let pivot = arr[rand];

    let left = [];
    let centre = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            centre.push(arr[i]);
        }
    }

    return [...quickSort(left), ...centre, ...quickSort(right)];
}


rl.on('line', (line) => {

    n === undefined ? n = Number(line) :
        arr = line.split(" ").map(Number);

}).on('close', () => {

        if (n === 0) {
            outputFile.write("");
        } else {
            outputFile.write(quickSort(arr).join(" "));
        }


    }
);