import { digitize } from './app/digitize';
import { sleep } from './app/bin/sleep';

/**
 * Main is an async function that takes a number n
 * and returns a promise of an array of numbers.
 * @param {number} n - The number to be digitized.
 * @returns An array of numbers.
 */
async function main(n: number): Promise<number[]> {
  await sleep();
  const result = await digitize(n);
  console.log(result);
  return result;
}
/* Calling the main function and passing in the number 3456. */
main(3456);
