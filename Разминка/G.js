const fs = require('fs');
const readline = require('readline');

const inputFile = fs.createReadStream('input.txt');
const outputFile = fs.createWriteStream('output.txt');

const rl = readline.createInterface({
    input: inputFile,
});

let n, m;
let matrix = [];


rl.on('line', (line) => {

    n === undefined ? [n, m] = line.split(" ").map(Number)
         : matrix.push(line.split(" ").map(Number));

}).on('close', () => {

        let maxSide = 0;


        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (matrix[i][j] === 1) {
                    maxSide = Math.max(maxSide, 1);
                    let l = 0;
                    let result = true;
                    while (result) {
                        l++;
                        let sum;
                        for (let k = i; k < l; k++) {
                            for (let p = j; p < l; p++) {
                                sum += matrix[k][p];
                            }
                        }
                        if (sum === )
                    }
                    maxSide = Math.max(maxSide, l - 1);
                }
            }
        }



            outputFile.write(maxSide.toString());

    }
);