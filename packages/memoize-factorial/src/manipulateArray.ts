import { sleepHelper } from './main';

/**
 * It sorts an array, then maps over it, then filters it, then logs it
 */
export async function manipulateArray() {
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
}
