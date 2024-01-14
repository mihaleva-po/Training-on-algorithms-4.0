const fs = require('fs');
const readline = require('readline');

const inputFile = fs.createReadStream('input.txt');
const outputFile = fs.createWriteStream('output.txt');

const rl = readline.createInterface({
    input: inputFile,
});

let xA, yA, xB, yB;

const evclid = (x1, y1, x2, y2) => {

    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

rl.on('line', (line) => {

    [xA, yA, xB, yB] = line.split(" ").map(Number);

}).on('close', () => {

        let radiusA = evclid(0, 0, xA, yA);
        let radiusB = evclid(0, 0, xB, yB);

        let l2 = Math.abs(radiusA - radiusB);

        let a = Math.atan2(yA, xA);
        let b = Math.atan2(yB, xB);

        let ygol = Math.abs(a - b);

        let l1 = ygol * Math.min(radiusA, radiusB);


        let L = l1 + l2;

        if (L < radiusA + radiusB) {
            outputFile.write(L.toString());
        } else {
            outputFile.write((radiusA + radiusB).toString());
        }

    }
);
