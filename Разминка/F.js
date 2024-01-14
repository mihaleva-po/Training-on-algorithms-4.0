const fs = require('fs');
const readline = require('readline');

const inputFile = fs.createReadStream('input.txt');
const outputFile = fs.createWriteStream('output.txt');

const rl = readline.createInterface({
    input: inputFile,
});

let n, k;
let people = [];
let time = 0;


rl.on('line', (line) => {

    k === undefined ? k = Number(line) :
        n === undefined ? n = Number(line)
            : people.push(Number(line));

}).on('close', () => {

        while (people.length !== 0) {
            if (people[people.length - 1] === 0) {
                people.pop();
            } else {
                time += people.length;
                let freeMest = k;
                while (freeMest !== 0 && people.length !== 0) {
                    if (people[people.length - 1] === 0) {
                        people.pop();
                        time++;
                    } else if (freeMest === people[people.length - 1]) {
                        time += people.length;
                        people.pop();
                        freeMest = 0;
                    } else if (freeMest > people[people.length - 1]) {
                        freeMest -= people[people.length - 1];
                        people.pop();
                        time++;
                    } else {
                        if (freeMest === k) {
                            let a = parseInt(people[people.length - 1] / k);
                            people[people.length - 1] -= freeMest * a;
                            time += people.length * a * 2 - people.length;
                            freeMest = 0;
                        } else {
                            people[people.length - 1] -= freeMest;
                            freeMest = 0;
                            time += people.length;
                        }
                    }
                }
            }
        }
        outputFile.write(time.toString());
    }
);