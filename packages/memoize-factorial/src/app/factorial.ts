// Memoization Factorial
/**
 * If n is 0, return 1, otherwise return n times the factorial of n minus 1.
 * @param {number} n - number - The number we want to calculate the factorial of.
 * @returns The factorial of the number.
 */
/* function factorial(n: number): number {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const memoizeFactorial = () => {
  const cache: number[] = [];
  return (n: number) => {
    if (n in cache) {
      console.log('\nCache hit! Fetching from cache...');
      return cache[n];
    } else {
      console.log('\nCalculating cache...');
      const result = factorial(n);
      cache[n] = result;
      return result;
    }
  };
};
const NewMemoizeFactorial = memoizeFactorial();
const numberConsecutiveCalls = 50;
console.log(NewMemoizeFactorial(numberConsecutiveCalls));

async function main() {
  for (let index = 0; index <= numberConsecutiveCalls; index++) {
    const result = NewMemoizeFactorial(index);
    console.log(result);
  }
}
main();
 */
