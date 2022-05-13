/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');

console.log('Hello World!');

const fileNames = fs.readdirSync(path.join(__dirname, './'));
console.log({ fileNames });

const digitsRegex = /\d{1,}/;
const lettersRegex = /[a-zA-Z]{1,}/;
const fileTypesRegex = /[\u002E](.{1,})/;

/* Getting the second argument from the command line. */
const commandLineArgument = process.argv[2];
console.log({ commandLineArgument });

for (const fileName of fileNames) {
  // prettier-ignore
  const name = fileName.match(lettersRegex) && fileName.match(lettersRegex)[0];
  // prettier-ignore
  const studentId = fileName.match(digitsRegex) && fileName.match(digitsRegex)[0];

  // prettier-ignore
  /* only one case since .txt is being used */
  const fileType = fileName.match(fileTypesRegex) && fileName.match(fileTypesRegex)[0];

  console.log({ name, studentId, fileType });

  if (name && studentId) {
    let newFileName;

    if (commandLineArgument === `nameFirst`) {
      newFileName = `${name}${studentId}${fileType}`;
    } else if (commandLineArgument === `idFirst`) {
      newFileName = `${studentId}${name}${fileType}`;
    } else {
      throw 'Please enter a CLI argument of nameFirst or idFirst';
    }
    console.log({ newFileName });

    /* Renaming the file. */
    fs.renameSync(fileName, newFileName);
  }
}
// ============================================================

// const digitsRegex = new RegExp(/\d+/g);
/* [
  '.gitkeep',
  '20220513195330JohnDoe.txt',
  'JaneDoe20220513195359.txt'
] */

/* The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched. The first element will be execPath. See process.argv0 if access to the original value of argv[0] is needed. The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command-line arguments. */
