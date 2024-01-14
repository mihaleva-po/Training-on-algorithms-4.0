const fs = require('fs');
const readline = require('readline');

const inputFile = fs.createReadStream('input.txt');
const outputFile = fs.createWriteStream('output.txt');

const rl = readline.createInterface({
    input: inputFile,
});

let n, arr;

const mergeSort = (arr) => {
    if (arr.length === 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    let r = 0;
    let l = 0;
    let sortedArr = [];

    while (r < right.length && l < left.length) {
        if (left[l] < right[r]) {
            sortedArr.push(left[l]);
            l++;
        } else {
            sortedArr.push(right[r]);
            r++;
        }
    }

    if (r < right.length) {
        sortedArr.push(...right.slice(r));
    }

    if (l < left.length) {
        sortedArr.push(...left.slice(l));
    }

    return sortedArr;
}


rl.on('line', (line) => {

    n === undefined ? n = Number(line) :
        arr = line.split(" ").map(Number);

}).on('close', () => {

        if (n === 0) {
            outputFile.write("");
        } else {
            outputFile.write(mergeSort(arr).join(" "));
        }


    }
);