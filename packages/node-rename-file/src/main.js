/* eslint-disable @typescript-eslint/no-var-requires */
var path = require('path');
var fs = require('fs');
console.log('Hello World!');
var fileNames = fs.readdirSync(path.join(__dirname, './'));
console.log({ fileNames: fileNames });
var digitsRegex = /\d{1,}/;
var lettersRegex = /[a-zA-Z]{1,}/;
var fileTypesRegex = /[\u002E](.{1,})/;
/* Getting the second argument from the command line. */
var commandLineArgument = process.argv[2];
console.log({ commandLineArgument: commandLineArgument });
for (var _i = 0, fileNames_1 = fileNames; _i < fileNames_1.length; _i++) {
    var fileName = fileNames_1[_i];
    // prettier-ignore
    var name_1 = fileName.match(lettersRegex) && fileName.match(lettersRegex)[0];
    // prettier-ignore
    var studentId = fileName.match(digitsRegex) && fileName.match(digitsRegex)[0];
    // prettier-ignore
    /* only one case since .txt is being used */
    var fileType = fileName.match(fileTypesRegex) && fileName.match(fileTypesRegex)[0];
    console.log({ name: name_1, studentId: studentId, fileType: fileType });
    if (name_1 && studentId) {
        var newFileName = void 0;
        if (commandLineArgument === "nameFirst") {
            newFileName = "".concat(name_1).concat(studentId).concat(fileType);
        }
        else if (commandLineArgument === "idFirst") {
            newFileName = "".concat(studentId).concat(name_1).concat(fileType);
        }
        else {
            throw 'Please enter a CLI argument of nameFirst or idFirst';
        }
        console.log({ newFileName: newFileName });
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
