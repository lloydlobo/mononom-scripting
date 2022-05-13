import { sleep } from './bin/sleep';

export async function digitize(n: number): Promise<number[]> {
  const numberToArray: string[] = n.toString().split('');
  const numberToArrayReversed: string[] = numberToArray.reverse();
  const numberToArrayReversedAsNumber: number[] = numberToArrayReversed.map(
    (x) => parseInt(x, 10)
  );
  const result = Promise.resolve(numberToArrayReversedAsNumber);
  result.then((n) => {
    console.log(n);
  });

  await sleep();

  return new Promise((resolve) => {
    resolve(result);
    console.log(result);
  });
}

digitize(1234);
