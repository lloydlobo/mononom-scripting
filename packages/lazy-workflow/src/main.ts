import open from 'open';
import fs from 'fs';
// import path from 'path';
// const __filename = require('__filename');
// const __dirname = require('__dirname');

const readFile: string = fs.readFileSync(
  'packages/lazy-workflow/src/assets/urls.json',
  'utf8'
);

const urlsReadFileResult = JSON.parse(readFile);

async function filterUrls(urls: string[]) {
  return urls.filter(async (url) => url.includes('/'));
}

async function openURLS(
  urlOpensource: string[],
  urlJavascript: string[],
  urlRust: string[]
): Promise<void> {
  for (const opensource of urlOpensource) {
    await open(opensource, { wait: false });
  }
  for (const javascript of urlJavascript) {
    await open(javascript, { wait: false });
  }
  for (const rust of urlRust) {
    await open(rust, { wait: false });
  }
}

const main = async () => {
  console.log('main');
  const urlOpensource = await filterUrls(urlsReadFileResult.opensource);
  const urlJavascript = await filterUrls(urlsReadFileResult.javascript);
  const urlRust = await filterUrls(urlsReadFileResult.rust);

  await openURLS(urlOpensource, urlJavascript, urlRust);
};

main();
