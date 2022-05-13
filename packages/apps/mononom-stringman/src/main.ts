import { digitize } from './app/digitize';

console.log('Hello World!');

/**
 * Main is an async function that takes a number as an argument
 * and returns a promise that resolves to a number.
 * @param {number} n - The number to be digitized.
 * @returns An array of numbers
 */
async function main(n: number): Promise<number> {
  const result = await digitize(n);
  console.log(result);
  return result;
}

/* Calling the main function with the number 3456 as an argument. */
main(3456);
