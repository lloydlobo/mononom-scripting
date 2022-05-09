// import { factorial } from './app/factorial';
// console.log('Hello World!');
// /* https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/ */
// const factorial50 = factorial(50);
// console.log(factorial50);
// // repeated
// // const factorial51 = factorial(51);
// // console.log(factorial51);
// const facotrialNum = (n: number) => factorial(n);
// console.log(facotrialNum(51));
// const factorialNumNext = (n: number) => factorial(n) * (n + 1);
// console.log(factorialNumNext(50));
// Memoization
const lineBreak = () => console.log(`\n`);
/**
 * It returns a function that takes a number or string and returns the number plus 10, but if the
 * number or string has already been passed in, it returns the result from the cache
 * @param {number} n - number | string
 */
/**
 * Add is a function that takes a number and returns a number.
 * @param {number} n - number
 */
const add = (n: number) => n + 10;
add(9);

interface myInterface {
  [index: number]: string | number;
  myVal?: string;
  cache?: number;
}

/**
 * It returns a function that takes a number or string and returns the number plus 10, but if the
 * number or string has already been passed in, it returns the result from the cache
 * @returns A function that takes a number or string and returns the number plus 10.
 */
const memoizedAdd = () => {
  const cache: myInterface = [];
  return (n: number) => {
    if (n in cache) {
      console.time('memoizedAdd');
      lineBreak();
      console.log('Cache hit! Fetching from cache');
      console.timeEnd('memoizedAdd');
      return cache[n];
    } else {
      lineBreak();
      console.time('calculateAdd');
      console.log('Calculating cache...');
      const result: number = n + 10;
      cache[n] = result;
      console.timeEnd('calculateAdd');
      return result;
    }
  };
};
const newAdd = memoizedAdd();
const numToAdd = 100000000;
console.log(newAdd(numToAdd)); // calculates and caches

console.log(newAdd(numToAdd)); // returns cached value
