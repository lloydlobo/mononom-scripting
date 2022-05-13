"use strict";
exports.__esModule = true;
exports.digitize = void 0;
/**
 * Convert a number to a string, split the string into an array of characters, reverse the array,
 * convert the array of characters to an array of numbers, and return the array of numbers.
 * @param {number} n - number
 * @returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
 */
function digitize(n) {
    var numberToStringSplitReverse = n.toString().split('').reverse();
    var stringSplitReverseParseNumber = numberToStringSplitReverse.map(function (number) { return parseInt(number, 10); });
    // const stringItemsParseNumber = numberToStringSplitReverse.map(Number);
    return stringSplitReverseParseNumber;
}
exports.digitize = digitize;
// ============================================================================
/**
 * The digitize function takes a number as an argument, converts the number to an array of strings,
 * reverses the array, converts the array of strings to an array of numbers, converts the array of
 * numbers to a single number, and returns a promise that resolves to the result of the function
 * @param {number} n - number - The number to be reversed.
 * @returns A promise that resolves to the result of the function.
 */
// export async function digitize(n: number): Promise<number> {
//   /* Converting the number to an array of strings, reversing the array, and then converting the array
//   of strings to an array of numbers. */
//   const numberToArray: string[] = n.toString().split('');
//   const numberToArrayReversed: string[] = numberToArray.reverse();
//   const numberToArrayReversedAsNumber: number[] = numberToArrayReversed.map(
//     (x) => parseInt(x, 10)
//   );
//   // console.log(numberToArrayReversedAsNumber); // [ 4, 3, 2, 1 ]
//   /* Creating a promise that resolves to an array of numbers. */
//   const result: Promise<number[]> = Promise.resolve(
//     numberToArrayReversedAsNumber
//   );
//   // console.log(result); // Promise { [ 4, 3, 2, 1 ] }
//   /* Converting the array of numbers to a single number. */
//   const resultPromiseToNumber: number = await result.then((n) => {
//     // console.log(n); // [ 4, 3, 2, 1]
//     return n.reduce((a, b) => {
//       const result = a.toString() + b.toString();
//       // console.log(result); // 43, 432, 4321
//       return parseInt(result, 10);
//     });
//   });
//   // console.log(resultPromiseToNumber); // 4321
//   /* Returning a promise that resolves to the result of the function. */
//   return new Promise((resolve) => {
//     resolve(resultPromiseToNumber);
//     // console.log(resultPromiseToNumber); // 4321
//   });
// }
// digitize(1234); // digitize(1234)
