const { spawn } = require('child_process');
const fs = require('fs');

const parameters = process.argv.slice(2);

const param = parameters[0].split('/');

const sprintNumber = param[0];
const taskName = param[1];

const scriptPath = `./tasks/${sprintNumber}/${taskName}.js`;
const inputFilePath = `./tasks/${sprintNumber}/data/${taskName}`;

const childProcess = spawn('node', [scriptPath], {
    stdio: ['pipe', process.stdout, process.stderr]
});

const inputContent = fs.readFileSync(inputFilePath, 'utf8');
childProcess.stdin.write(inputContent);
childProcess.stdin.end();
