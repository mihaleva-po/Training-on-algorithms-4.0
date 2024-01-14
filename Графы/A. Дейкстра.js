const fs = require('fs');
const readline = require('readline');

const inputFile = fs.createReadStream('input.txt');
const outputFile = fs.createWriteStream('output.txt');

const rl = readline.createInterface({
    input: inputFile,
});

let countVertex, beginningVertex, finishedVertex;
let matrix = [];


rl.on('line', (line) => {

    !countVertex ? [countVertex, beginningVertex, finishedVertex] = line.split(" ").map(Number)
        : matrix.push(line.split(" ").map(Number));

}).on('close', () => {

        let visited = new Array(countVertex).fill(false);
        let dist = new Array(countVertex).fill(Infinity);

        let stack = [beginningVertex - 1];
        dist[beginningVertex - 1] = 0;

        while (stack.length > 0) {
            let currentVertex = stack.pop();
            visited[currentVertex] = true;
            matrix[currentVertex].forEach((edge, index) => {

                if (edge > 0) {
                    let newDist = dist[currentVertex] + edge;
                    if (newDist < dist[index]) {
                        dist[index] = newDist;
                    }
                }
            })

            let minDist = Infinity;
            let index = -1;
            for (let i = 0; i < countVertex; i++) {
                if (!visited[i] && dist[i] < minDist) {
                    minDist = dist[i];
                    index = i;
                }
            }
            if (index !== -1) {
                stack.push(index);
            }
        }

        let distance = dist[finishedVertex - 1];
        if (distance === Infinity) {
            outputFile.write('-1');
        } else {
            outputFile.write(distance.toString());
        }
    }
);
