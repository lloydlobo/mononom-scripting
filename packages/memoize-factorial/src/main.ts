#!/usr/bin/env node
import chalk from 'chalk';

// Memoize fibonacci series using memoize decorator
// import { memoize } from 'typescript-memoize';

/* Creating an empty array. */
const cache = [];

/** Creating an empty array.
 * Fibonnaci Sequence */
let fibonacci = [];

/**
 * SleepHelper is an async function that returns a promise
 * that resolves after a given number of milliseconds.
 * @param [ms=1000] - The number of milliseconds to wait before resolving the promise.
 */
const sleepHelper = async (ms = 1) =>
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
      await sleepHelper();
      // console.log({ i, start, end });
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
}

/**
 * It takes a number, and then it calls the forLoopFibonacci function, which returns a promise
 * It's taking the fibonacci array and slicing it into a new array,
 * and then it's assigning that new array to the fibo variable
 * @param {number} length - number
 */
async function executeAll(length: number): Promise<void> {
  fibonacci = await forLoopFibonacci(length);
  /* It's taking the fibonacci array and slicing it into a new array, 
      and then it's assigning that new array to the fibo variable. */
  const fibo: number[] = fibonacci.slice(0, length);
  await displayFibonacciResults(fibo);
  await sleepHelper();
  /* It's logging the length of the cache. */
  console.log({ cache_length: cache[length].length });
}

/** Calling the executeAll function, which takes a number as an argument,
 * and then it calls the forLoopFibonacci function, which returns a promise,
 * and then it calls the displayFibonacciResults function, which returns a promise,
 * and then it calls the sleepHelper function, which returns a promise, and then
 * it logs the length of the cache. */
executeAll(13);
