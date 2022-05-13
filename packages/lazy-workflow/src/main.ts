import open from 'open';

const urls: string[] = [
  'https://developer.mozilla.org/en-US/',
  'https://eloquentjavascript.net/',
  'https://doc.rust-lang.org/book/',
];

async function main(): Promise<void> {
  for (const url of urls) {
    await open(url, { wait: false }).catch((err) => {
      console.error(err);
    });
  }
}

main();
