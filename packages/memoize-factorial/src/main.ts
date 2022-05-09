#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import { arrayBuffer } from 'stream/consumers';

// Memoize fibonacci series using memoize decorator
/**
 * It's taking the user's input and converting it to a number, it's calling the executeAll function,
 * which takes a number as an argument, and then it calls the forLoopFibonacci function, which returns
 * a promise, and then it calls the displayFibonacciResults function, which returns a promise, and then
 * it calls the sleepHelper function, which returns a promise, and then it logs the length of the cache
 * @param {number} length - number - The length of the fibonacci sequence.
 * @returns An array of numbers.
 */

/* Creating an empty array. */
const cache = [];

/** Creating an empty array for Fibonnaci Sequence */
let fibonacci = [];

/**
 * SleepHelper is an async function that returns a promise
 * that resolves after a given number of milliseconds.
 * @param [ms=1000] - The number of milliseconds to wait before resolving the promise.
 */
const sleepHelper = async (ms = 500) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * We're creating an array of numbers, destructuring the array into two variables, looping through the
 * length of the fibonacci sequence, checking to see if the fibonacci sequence has already been
 * calculated, pushing the starting digits of the fibonacci sequence into the fibonacci array, adding
 * the previous two numbers in the fibonacci sequence to get the next number in the sequence, and
 * caching the fibonacci sequence
 * @param {number} length - number - The length of the fibonacci sequence.
 * @returns An array of numbers.
 */
async function forLoopFibonacci(length: number) {
  /* Creating an array of numbers. */
  const fibonnaciStartingDigits: number[] = [0, 1];
  /* Destructuring the fibonnaciStartingDigits array into two variables, start and end. */
  let [start, end] = fibonnaciStartingDigits;
  /* Looping through the length of the fibonacci sequence. */
  for (let i = 0; i < length; i++) {
    /* Checking to see if the fibonacci sequence has already been calculated. */
    if (cache[length] != null) {
      return cache[length];
    } else if (i === 0) {
      /* Pushing the starting digits of the fibonacci sequence into the fibonacci array. */
      fibonacci.push(start, end);
    } else if (i >= 1) {
      /* Adding the previous two numbers in the fibonacci sequence to 
      get the next number in the sequence. */
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
  console.clear();
  /* It's logging the fibonacci sequence in the console. */
  try {
    console.log(chalk.red(`\nStart of Fibonacci Sequence`));
    console.log(fibo);
    console.log(fibo);
    console.log(fibo);
    console.log(fibo);
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

async function promptUser(): Promise<number> {
  /* It's logging a message in the console. */
  console.log('\nEnter the length of the fibonacci sequence:\n');
  await sleepHelper(1000);
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
 * It's calling the forLoopFibonacci function, which returns a promise, and then it's assigning the
 * result of the promise to the fibonacci variable. It's taking the fibonacci array and slicing it into
 * a new array, and then it's assigning that new array to the fibo variable. It's calling the
 * displayFibonacciResults function, which takes an array of numbers as an argument, and then it's
 * logging the fibonacci sequence in the console. It's logging the length of the cache
 * @param {number} length - number - The length of the fibonacci sequence.
 */
async function executeAll(length: number): Promise<void> {
  /* It's calling the forLoopFibonacci function, which returns a promise, 
  and then it's assigning the result of the promise to the fibonacci variable. */
  fibonacci = await forLoopFibonacci(length);
  const fibo: number[] = fibonacci.slice(0, length);
  await displayFibonacciResults(fibo);
  // console.log({ cache_length: cache[length].length });
}

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
  process.exit();
}

/**
 * It's logging the length of the fibonacci sequence
 * @param {number} length - number - The length of the fibonacci sequence.
 */
async function runExecuteAll(length: number): Promise<void> {
  try {
    await executeAll(length);
    await sleepHelper();
    await displayResutStats(length);
  } catch (error) {
    console.error(error);
  }
}

/* It's calling the promptUser function, which returns a promise, and then it's logging the
length of the fibonacci sequence. */
async function postUserFibonacciResult(): Promise<void> {
  const length: number = await promptUser();
  /* It's calling the executeAll function, which takes a number as an argument, and then it calls the
  forLoopFibonacci function, which returns a promise, and then it calls the displayFibonacciResults
  function, which returns a promise, and then it calls the sleepHelper function, which returns a
  promise, and then it logs the length of the cache */
  await runExecuteAll(length);
  process.exit(0);
}

async function manipulateArray() {
  const array = [11, 2, 22, 1];
  console.log({ array });
  await sleepHelper();
  const arraySorted = array.sort((a, b) => a - b);
  console.log({ arraySorted });
  await sleepHelper();
  arraySorted.map((item, index) => {
    console.log({ item, index });
  });
  await sleepHelper();
  console.log({ arraySorted });
  arraySorted.filter((item, index) => {
    console.log({ item, index });
  });
  await sleepHelper();
  console.log({ arraySorted });
  await sleepHelper();
}

async function main() {
  await sleepHelper();
  await manipulateArray();
  /* It's calling the promptUser function, which returns a promise, 
  and then it's logging the length of the fibonacci sequence. */
  await postUserFibonacciResult();
}

main();
