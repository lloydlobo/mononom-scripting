#!/usr/bin/env node

/**
 * Importing chalk module to color the console and
 * Importing the inquirer package, and then it's calling the promptUser function, which returns a promise, and then it's assigning the result of the promise to the length variable. It's calling the runExecuteAll function, which takes a number as an argument, and then it's logging the length of the fibonacci sequence in the console.
 * */

import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import inquirer from 'inquirer';
import * as fs from 'fs';
import path from 'path';

// import { manipulateArray } from './manipulateArray';

// ----------------------------------------------------------------------------
// --------------------------OVERVIEW PROCESS----------------------------------
// ----------------------------------------------------------------------------
// Memoize fibonacci series using memoize decorator
/**
 * It's taking the user's input and converting it to a number, it's calling the executeAll function,
 * which takes a number as an argument, and then it calls the forLoopFibonacci function, which returns
 * a promise, and then it calls the displayFibonacciResults function, which returns a promise, and then
 * it calls the sleepHelper function, which returns a promise, and then it logs the length of the cache
 * @param {number} length - number - The length of the fibonacci sequence.
 * @returns An array of numbers.
 */

// ----------------------------------------------------------------------------
// --------------------------GLOBAL VARIABLES----------------------------------
// ----------------------------------------------------------------------------

/* Creating an empty array. */
const cache = [];

/** Creating an empty array for Fibonnaci Sequence */
let fibonacci = [];

// ----------------------------------------------------------------------------
// --------------------------HELPER FUNCTIONS----------------------------------
// ----------------------------------------------------------------------------

// --------------------------SLEEP TIMEOUT-------------------------------------

/**
 * SleepHelper is an async function that returns a promise
 * that resolves after a given number of milliseconds.
 * @param [ms=1000] - The number of milliseconds to wait before resolving the promise.
 */
// await () => setTimeout(resolve, ms))
export async function sleepHelper(ms = 1000): Promise<void> {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// --------------------------NANO SPINNER LOADING------------------------------

const loading = async ({ ms = 1000 }: { ms?: number } = {}) => {
  const spinner = createSpinner();
  spinner.start({
    text: 'Loading...',
    color: 'red',
  });
  await sleepHelper(ms);
  spinner.stop({
    text: `Loaded in ${ms}ms!`,
    color: 'green',
  });
  console.log(`\n`);
};

// --------------------------READ INPUT FILE-------------------------------------

/**
 * It returns a promise that resolves to the contents of the file
 * @param {string} filename - string - the name of the file to read
 */
const readFile = (filename: string): Promise<string> =>
  new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) reject(err);
      resolve(data.toString());
    });
  });

/**
 * It reads the input file, splits it into an array,
 * and returns the length of the array and the array itself
 */
const readFileInput = async () =>
  await readFile(path.join(__dirname, './assets/input.txt')).then((data) => {
    const result = data;
    const length = result.split('\n').length;
    const resultSplit = result.split('');
    const resultSplitLength = resultSplit.length;
    return { length, resultSplit, resultSplitLength };
  });

// ----------------------------------------------------------------------------
// --------------------------FIBONACCI LOGIC-----------------------------------
// ----------------------------------------------------------------------------

/**
 * We're creating an array of numbers, destructuring the array into two variables, looping through the
 * length of the fibonacci sequence, checking to see if the fibonacci sequence has already been
 * calculated, pushing the starting digits of the fibonacci sequence into the fibonacci array, adding
 * the previous two numbers in the fibonacci sequence to get the next number in the sequence, and
 * caching the fibonacci sequence
 * @param {number} length - number - The length of the fibonacci sequence.
 * @returns An array of numbers.
 */
async function forLoopFibonacci(length: number): Promise<ArraySequence[]> {
  /* Destructuring the array fibonnaciStartingDigits into two variables, start and end. */
  const fibonnaciStartingDigits: number[] = [0, 1];
  let [start, end] = fibonnaciStartingDigits;
  for (let i = 0; i < length; i++) {
    if (cache[length] != null) {
      return cache[length];
    } else if (i === 0) {
      /* Pushing the starting digits of the fibonacci sequence into the fibonacci array. */
      fibonacci.push(start, end);
    } else if (i >= 1) {
      start = start + end;
      end = end + start;
      fibonacci.push(start, end);
    } else {
      console.error('Something went wrong');
    }
  }
  /* Caching the fibonacci sequence. */
  cache[length] = fibonacci;
  return fibonacci;
}

/**
 * This function takes an array of numbers and displays the results in the console
 * @param {ArraySequence[]} fibo - ArraySequence[]
 */
type ArraySequence = unknown | never;
async function displayFibonacciResults(fibo: ArraySequence[]): Promise<void> {
  /* It's logging the fibonacci sequence in the console. */
  try {
    console.log(chalk.red(`\nStart of Fibonacci Sequence`));
    console.log(fibo);
    console.log(fibo);
    console.log(fibo);
    console.log(fibo);
    console.table(fibo);
    console.log(chalk.red(`\nEnd of Fibonacci Sequence`));
    await sleepHelper();
  } catch (error) {
    console.error(error);
  }
}

// ----------------------------------------------------------------------------
// --------------------------INQUIRER USER PROMPTS-----------------------------
// ----------------------------------------------------------------------------

/**
 * It's prompting the user for a number, validating the input, and returning the number
 * @returns A promise that resolves to a number.
 */
async function promptUser(): Promise<number> {
  /* It's logging a message in the console. */
  const promptMessage = '\nEnter the length of the fibonacci sequence:\n';
  await loading({ ms: 500 });
  console.log(chalk.bgBlue(promptMessage));
  await loading({ ms: 800 });
  const answer: number | string = 'answer';
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: answer,
      message: 'Fibonacci sequence length:',
      default: 13,
      validate: (input: string) => {
        const parsedInput: number = parseInt(input, 10);
        if (isNaN(parsedInput)) {
          return 'Please enter a number';
        } else if (parsedInput < 0) {
          return 'Please enter a positive number';
        } else if (parsedInput === 0) {
          return 'Please enter a number greater than 0';
        } else if (parsedInput > 111) {
          return 'Please enter a number less than 111';
        } else if (parsedInput % 1 !== 0) {
          return 'Please enter a whole number';
        }
        return true;
      },
    },
  ]);
  /* It's taking the user's input and converting it to a number. */
  const resultInput: number = parseInt(answers[answer], 10);
  return resultInput;
}

/**
 * It prompts the user to choose an action to perform on the text file
 * @returns The user's choice of action.
 */
async function promptUserFileAction() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        { name: 'Run the program', value: 'run' },
        { name: 'Display the input text file', value: 'display' },
        { name: 'Write the output text file', value: 'write' },
        { name: 'Exit', value: 'exit' },
      ],
    },
  ]);
}

// ----------------------------------------------------------------------------
// --------------------------CONVERT FIBONACCI LOGIC RESULTS-------------------
// ----------------------------------------------------------------------------

/**
 * It returns a promise that resolves to an array of numbers
 * @param {number} length - The length of the fibonacci sequence you want to generate.
 * @returns An array of numbers
 */
async function executeAll(length: number): Promise<number[]> {
  fibonacci = await forLoopFibonacci(length);
  const fibo: number[] = fibonacci.slice(0, length);
  return fibo;
  // console.log({ cache_length: cache[length].length });
}

// --------------------------DISPLAY RESULTS STATS-----------------------------

/**
 * This function displays the length of the fibonacci sequence, the number of numbers in the cache, and
 * the last number in the fibonacci sequence
 * @param {number} length - number - The length of the fibonacci sequence
 */
async function displayResutStats(length: number): Promise<void> {
  console.log(`\nThe length of the fibonacci sequence is ${length}`);
  await sleepHelper();
  console.log(`\nThere are ${cache[length].length} numbers in the cache`);
  await sleepHelper();
  console.log(
    `\nThe last number in the fibonacci sequence is ${fibonacci[length - 1]}`
  );
  await sleepHelper();
  // sum in fibonacci sequence
  const fibonacciSort = fibonacci.sort((a, b) => a - b);
  console.log({ fibonacciSort });
  let currentindex = 0;
  const sum = fibonacciSort.reduce((acc, curr) => {
    if (currentindex === 0) {
      currentindex++;
      return acc + curr;
    } else {
      currentindex++;
      return acc + curr;
    }
  }, 0);
  await sleepHelper();
  console.log(`\nThe sum of the fibonacci sequence is ${sum}`);
  await sleepHelper();
  console.log(chalk.green.bgBlue(`\nEnd of program. Thank you for using.\n`));
  // process.exit();
}

// ----------------------------------------------------------------------------
// --------------------------RUN FIBONACCI LOGIC & DISPLAY---------------------
// ----------------------------------------------------------------------------

/**
 * It's logging the length of the fibonacci sequence
 * @param {number} length - number - The length of the fibonacci sequence.
 */
async function runExecuteAll(length: number): Promise<void> {
  try {
    const fibo = await executeAll(length);
    await displayFibonacciResults(fibo);
    await sleepHelper();
    await displayResutStats(length);
  } catch (error) {
    console.error(error);
  }
}

// ----------------------------------------------------------------------------
// --------------------------PROMPT USER FOR FIBONACCI SERVICE-----------------
// ----------------------------------------------------------------------------

/* It's calling the promptUser function, which returns a promise, and then it's logging the
length of the fibonacci sequence. */
async function postUserFibonacciResult(): Promise<number> {
  const length: number = await promptUser();
  await runExecuteAll(length);
  return length;
}

// ----------------------------------------------------------------------------
// --------------------------FILE SYSTEM READ/WRITE----------------------------
// ----------------------------------------------------------------------------

/**
 * The function `displayInputTextData` is an asynchronous function that returns a promise of type
 * `void`
 */
async function displayInputTextData(): Promise<void> {
  const resultReadFileInput = await readFileInput()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log({ read_input: resultReadFileInput });
}

/**
 * It takes a filename and data, and returns a promise that resolves when the file is written
 * @param {string} filename - The name of the file to write to.
 * @param {string | Buffer} data - The data to write to the file.
 * @returns A promise that resolves when the file has been written.
 */
// prettier-ignore
async function writeFile(filename: string, data: string | Buffer): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, (err) => {
      if (err) reject(err);
      console.log(chalk.bgBlue(`\nFile ${filename} written successfully.\n`));
      resolve();
    });
  });
}

// ----------------------------------------------------------------------------
// --------------------------MAIN FUNCTION ------------------------------------
// ----------------------------------------------------------------------------

/**
 * It's calling the promptUser function, which returns a promise,
 * and then it's logging the length of the fibonacci sequence
 */
async function main() {
  await loading({ ms: 1000 });

  console.clear();
  await loading({ ms: 1000 });

  await displayInputTextData();
  await postUserFibonacciResult();
  await loading({ ms: 1000 });

  await readFile(path.join(__dirname, './assets/output.txt')).then((data) => {
    console.log({ data });
  });

  await loading({ ms: 1000 });

  await promptUserFileAction();
  await loading({ ms: 1000 });

  await writeFile(
    path.join(__dirname, './assets/output.txt'),
    fibonacci.toString()
  );
  process.exit(0);
}

/* The function that runs all. */
main();

// --------------------------FIN-----------------------------------------------
