import open from 'open';
import fs from 'fs';
import path from 'path';
// const __filename = require('__filename');
// const __dirname = require('__dirname');

console.clear();
console.log(`Gloria in Excelsis Deo`);

const readFile = fs.readFileSync(
  'packages/lazy-workflow/src/assets/urls.json',
  'utf8'
);
const urlsReadFileResult = JSON.parse(readFile);
// console.log(urlsReadFileResult);
// console.log(urlsReadFileResult.javascript);
// console.log(urlsReadFileResult.opensource);

async function filterUrls(urls: string[]) {
  return urls.filter(async (url) => url.includes('/'));
}

const main = async () => {
  console.log('main');
  const urlJavascript = await filterUrls(urlsReadFileResult.javascript);
  const urlOpensource = await filterUrls(urlsReadFileResult.opensource);

  for (const opensource of urlOpensource) {
    await open(opensource, { wait: false });
  }

  for (const javascript of urlJavascript) {
    await open(javascript, { wait: false });
  }
};
main();

// retrieve the javascript object array from urls.json

// map through the urlsReadFileResult and open each url

// urlsReadFileResult.map((url: string) => {
//   open(url);
// });

// const urls = urlsReadFileResult.urls;
// console.log(urls);

// function main() {
//   console.log(`Gloria in Excelsis Deo`);
// }
// main();

// console.log(urlJSON);
// const categoryJSON = JSON.stringify(category);
// console.log(categoryJSON);

// async function openURL(url: string) {
//   for (const item of url) {
//     await open(item);
//   }
// }

// openURL(url);

// async function main(): Promise<void> {
//   for (const url of urls) {
//     await open(url, { wait: false }).catch((err) => {
//       console.error(err);
//     });
//   }
//   try {
//     await open.openApp('vs-code');
//     console.log('Opened VS Code');
//   } catch (err) {
//     console.error(err);
//   }
//   try {
//     // await open.openApp('chrome');
//     await open.openApp(open.apps.chrome, { arguments: [''] });
//     console.log('Opened Chrome');
//   } catch (err) {
//     console.error(err);
//   }
// }

// main();

// const urls: string[] = [
//   'https://developer.mozilla.org/en-US/',
//   'https://eloquentjavascript.net/',
//   'https://doc.rust-lang.org/book/',
// ];

// function stringifyURLCategory(
//   items: (string[] | string[][])[]
// ): string | undefined {
//   let stringified;
//   for (const [i, item] of items.entries()) {
//     stringified = JSON.stringify(item);
//     console.log(`${i}: ${stringified}`);
//   }
//   return stringified;
// }
// const resultString = stringifyURLCategory(items);
// console.log({ resultString });

// const category = urls.map(({ category }) => category);
// const url = urls.map(({ url }) => url);

// const items = [category, url];
