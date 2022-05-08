// Memoization Square
import chalk from 'chalk';

// sleep function

async function sleep(ms = 0) {
  await new Promise((resolve) => setTimeout(resolve, ms));
  // const msg: string | null = `Slept for ${ms / 1000}s`;
  // console.count(chalk.bold(msg));
}
/**
 * It returns the number of times the number is multiplied by itself
 * @param {number} number - The number to be squared.
 * @returns The number of times the number is.
 */
function square(number: number) {
  let result: null | number = 0;
  /* A nested loop. */
  for (let i = 0; i < number; i += 1) {
    // console.log(chalk.bgGreen(`i: ${i} => result: ${result}`));
    // await sleep();
    /* A loop that is executed the number of times the number is. */
    for (let j = 0; j < number; j++) {
      // console.log(chalk.blue(`j: ${j} => result: ${result}`));
      // await sleep();
      result += 1;
      // console.log(chalk.red(`j: ${j}, i: ${i} => result++ => ${result}`));
    }
  }
  return result;
}

/**
 * It prints the square of the number passed to it in four different colors.
 * @param {number} number - number - This is the number that we want to square.
 */
async function main(number: number): Promise<void> {
  // await sleep();
  console.log(chalk.magenta(square(number)));
  // await sleep();
  console.log(chalk.blue(square(number)));
  // await sleep();
  console.log(chalk.green(square(number)));
  // await sleep();
  console.log(chalk.yellow(square(number)));
}

/* Calling the function `main` and passing in a number. */
main(2 ** 15);
