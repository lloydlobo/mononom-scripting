import { readFileInput } from './main';

// ----------------------------------------------------------------------------
// --------------------------FILE SYSTEM READ/WRITE----------------------------
// ----------------------------------------------------------------------------
/**
 * The function `displayInputTextData` is an asynchronous function that returns a promise of type
 * `void`
 */

async function displayInputTextData(): Promise<void> {
  const resultReadFileInput = await readFileInput()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log({ read_input: resultReadFileInput });
}
