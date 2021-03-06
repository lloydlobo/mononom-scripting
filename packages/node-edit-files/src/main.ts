#!/usr/bin/env node
/* Importing the fs, path, inquirer, chalk, fileURLToPath, and dirname modules. */
import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import chalk from 'chalk';

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
/* Getting the current directory of the file. */
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

/* Reading the input.txt file and storing it in the readFile variable. */
let readFile = fs
  .readFileSync(path.join(__dirname, './assets/input.txt'), 'utf8')
  .toString();

/* Declaring the actor1 and actor2 variables as type any. */
let actor1: unknown;
let actor2: unknown;

/**
 * Sleep is a function that returns a promise that resolves after a given number of milliseconds.
 * @param [ms=2000] - The number of milliseconds to wait before resolving the promise.
 */
const sleep: (ms?: number) => Promise<unknown> = (ms = 2000) =>
  new Promise((response) => setTimeout(response, ms));

/**
 * It asks the user to enter the names of two actors, and then stores those names in the variables
 * actor1 and actor2
 * @returns the answers from the inquirer prompt.
 */
async function inquireActorNames(): Promise<void> {
  console.log('Enter the names of the two actors:');
  const answers = await inquirer.prompt([
    {
      name: 'actor1',
      type: 'input',
      message: 'Actor 1:',
      default(): string {
        return 'Actor 1';
      },
    },
    {
      name: 'actor2',
      type: 'input',
      message: 'Actor 2:',
      default(): string {
        return 'Actor 2';
      },
    },
  ]);

  /* Assigning the answers from the inquirer prompt to the actor1 and actor2 variables. */
  const getInputActorNames = (): void => {
    actor1 = answers.actor1;
    actor2 = answers.actor2;
  };
  await sleep(1000);
  getInputActorNames();
}

/**
 * This asynchronous function takes no parameters and returns no values.
 * It uses the console.log() method to display the values
 * of the actor1 and actor2 variables
 */
async function displayActorNameInputs(): Promise<void> {
  console.log(chalk.green('Actor 1:', actor1));
  console.log(chalk.green('Actor 2:', actor2));
}

/**
 * It reads the file, replaces the actor names, and writes the file to the output.txt file
 */
async function writeFileToOutput(): Promise<void> {
  readFile = readFile.replace(/K:/g, `${actor1}:`);
  readFile = readFile.replace(/E:/g, `${actor2}:`);
  fs.writeFileSync(path.join(__dirname, './assets/output.txt'), readFile);
}

/**
 * The main function is an async function that calls the inquireActorNames function, waits 2 seconds,
 * calls the displayActorNameInputs function, waits 3 seconds, calls the writeFileToOutput function,
 * and then logs the readFile variable to the console
 */
const main: () => Promise<void> = async () => {
  await inquireActorNames();
  await sleep(2000);
  await displayActorNameInputs();
  await sleep(3000);
  await writeFileToOutput();
  console.log(chalk.greenBright.bgYellow(readFile));
};

/* Calling the main function. */
main();
