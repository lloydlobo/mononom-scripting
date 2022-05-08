import chalk from 'chalk';

// Memoization Square
/**
 * Declaring a constant variable called `cache` and
 * initializing it to an empty array.
 */
const cache: number[] = [];
/**
 * Sleep is a function that returns a promise that resolves after a specified number of milliseconds.
 * @param [ms=1000] - The number of milliseconds to wait before resolving the promise.
 */
const sleep: (ms?: number) => Promise<void> = async (ms = 1000) => {
  await new Promise((resolve): NodeJS.Timeout => setTimeout(resolve, ms));
};
/**
 * It takes a number, checks to see if it has already been squared, if it has, it returns the result,
 * if it hasn't, it squares the number and returns the result
 * @param {number} number - The number that is being squared.
 * @returns The result of the square function.
 */
function square(number: number): number {
  /* Checking to see if the number has already been squared. If it has, it returns the result. */
  if (cache[number] != null) {
    return cache[number];
  }
  /* Initializing the variable `result` to zero. */
  let result: number | null = 0;
  /* A nested loop. */
  for (let i = 0; i < number; i += 1) {
    /* A loop that is executed the number of times the number is. */
    for (let j = 0; j < number; j++) {
      result += 1;
    }
  }
  /* Storing the result of the square function in the cache array. */
  cache[number] = result;
  return result;
}
/**
 * The function takes a number as an argument, logs the square of that number to the console, and then
 * waits for a second before logging the square of the number again
 * @param {number} number - number - The number to square.
 */

async function logSquareResults(number: number): Promise<void> {
  console.log(`\n`);
  console.time('Elapsed Time');
  console.log(chalk.magenta(square(number)));
  console.log(chalk.blue(square(number)));
  console.log(chalk.green(square(number)));
  console.log(chalk.yellow(square(number)));
  console.log(chalk.magenta(square(number)));
  console.log(chalk.blue(square(number)));
  console.log(chalk.green(square(number)));
  console.log(chalk.yellow(square(number)));
  console.log(chalk.magenta(square(number)));
  console.log(chalk.blue(square(number)));
  console.log(chalk.green(square(number)));
  console.log(chalk.yellow(square(number)));
  console.log(chalk.magenta(square(number)));
  console.log(chalk.blue(square(number)));
  console.log(chalk.green(square(number)));
  console.log(chalk.yellow(square(number)));
  console.log(`\n`);
  console.timeEnd('Elapsed Time');
  await sleep();
}
/**
 * "Log the square of a number to the console."
 * The function takes a number as an argument and
 * logs the square of that number to the console
 * @param {number} number - number - The number to square.
 */

async function logFinalSquareResult(number: number): Promise<void> {
  console.log(chalk.yellow(`\nThe square of ${number} is ${square(number)}\n`));
  await sleep();
}
/**
 * Storing the length of the cache array in a variable called `cacheItems`
 * It displays the number of cached items
 */

async function displayCacheDetails(): Promise<void> {
  const cacheItems: number = cache.length;
  console.log({ no_of_cached_items: cacheItems });
  await sleep();
}
/**
 * It prints the square of the number passed to it in four different colors.
 * @param {number} number - number - This is the number that we want to square.
 */
/**
 * The main function is an async function that takes a number as an argument
 * and returns a promise that resolves to void
 * @param {number} number - The number to square.
 */

async function main(number: number): Promise<void> {
  logSquareResults(number);
  await logFinalSquareResult(number);
  await displayCacheDetails();
  console.log(chalk.bgBlue(`\n End of program. \n`));
}
/* Calling the function `main` and passing in a number. */
main(2 ** 15);
