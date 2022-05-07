const fs = require('fs');

let fileContent: string = fs.readFileSync('input.txt').toString();

/* Replacing the string 'K:' with 'Kev:' and 'E:' with 'Eri:' */
fileContent = fileContent.replace(/K:/g, 'Kafka:');
fileContent = fileContent.replace(/E:/g, 'Eastwood:');

/**
 * Sleep is a function that returns a promise that resolves after a given number of milliseconds.
 * @param [ms=3000] - The number of milliseconds to wait before resolving the promise.
 * @returns A function that returns a promise that resolves after a given number of milliseconds.
 */
const sleep: (ms?: number) => Promise<unknown> = (
  ms = 3000
): Promise<unknown> => {
  return new Promise((resolve): NodeJS.Timeout => setTimeout(resolve, ms));
};

// turn string to array
const characterArray: string[] = fileContent.split('');

/**
 * Wait for the specified time, then log the character array.
 * @param {number} time - number - The time in milliseconds to wait before logging the array.
 */
async function logCharacterArray(time: number): Promise<void> {
  await sleep(time);
  console.log(characterArray);
  console.log(joinCharacterArray);
}

// Add line number
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
let lineNumber: number = 1;

/* Adding line numbers to the output.txt file. */
for (let i = 0; i < characterArray.length; i += 1) {
  /* Getting the previous character in the array. */
  const prevChar: string = characterArray[i - 1];

  /* Checking if the previous character in the array is a new line character OR a falsy value. */
  if (prevChar === '\n' || prevChar === undefined || !prevChar) {
    /* Adding line numbers to the output.txt file. */
    characterArray[i] = `${lineNumber}. ${characterArray[i]}`;
    lineNumber += 1;
  }
}

const joinCharacterArray: string = characterArray.join('');
fileContent = joinCharacterArray;

/**
 * The function editFile() is an asynchronous function that returns a promise of type void.
 * It waits for 4 seconds, then writes the fileContent to a file called output.txt,
 * then waits for 4 seconds, then logs the fileContent to the console
 */
async function editFile(): Promise<void> {
  console.log('\n');
  /* Waiting for 4 seconds before continuing to the next line of code. */
  console.log(`Generating new output...\n`);

  /* Writing the fileContent to a file called output.txt. */
  fs.writeFileSync('output.txt', fileContent);

  /* Logging the fileContent to the console. */
  await sleep(2000);
  console.log(`New output generated in output.txt file.\n`);
  await sleep(500);
  console.log(fileContent);
}
editFile();

// ---------------------------------------------------------------

// logCharacterArray(20);
/** [
 'K',  'a',    'f',  'k',    'a', ':', ' ',  'H',    'e',
      'l',  'l',    'o',  ' ',    't', 'h', 'e',  'r',    'e',
      '\n', '1. E', 'a',  's',    't', 'w', 'o',  'o',    'd',
      ':',  ' ',    'W',  'h',    'a', 't', ' ',  'i',    's',
      ' ',  'u',    'p',  ' ',    'k', 'e', 'v',  'i',    'n',
      '\n', '2. K', 'a',  'f',    'k', 'a', ':',  ' ',    'T',
      'h',  'e',    ' ',  's',    'k', 'y', '\n', '3. E', 'a',
      's',  't',    'w',  'o',    'o', 'd', ':',  ' ',    'Y',
      'o',  'u',    "'",  'r',    'e', ' ', 'f',  'u',    'n',
      'n',  'y',    '\n', '4. K', 'a', 'f', 'k',  'a',    ':',
      ' ',  'H',    'o',  'w',    ' ', 'a', 'm',  ' ',    'I',
      ' ',
      ... 44 more items
    ] 
    */

// logCharacterArray(30);
/* before if (prevChar === '\n') &  after if (prevChar === '\n' || prevChar === undefined || !prevChar) */
/** 
 * Kafka: Hello there
    1. Eastwood: What is up kevin
    2. Kafka: The sky
    3. Eastwood: You're funny
    4. Kafka: How am I funny? Like a clown? Am I here to amuse you?  
  */
