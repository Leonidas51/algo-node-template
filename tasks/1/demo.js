const readline = require('readline');
const ioInterface = readline.createInterface({ input: process.stdin });

let input;

ioInterface.on('line', function (line) {
    input = line.split(' ').map(val => Number(val));
});

ioInterface.on('close', function () {
    const values = {
        a: input[0],
        b: input[1],
        c: input[2]
    };

    process.stdout.write(String(values.a + values.b + values.c));
});
