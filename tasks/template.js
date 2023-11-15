const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

let input;
let lineNum = 0;

ioInterface.on('line', function (line) {
    input = line.split(' ').map(val => Number(val));
    lineNum++;
});

ioInterface.on('close', function () {
    let result;
    process.stdout.write(String(result));
});
