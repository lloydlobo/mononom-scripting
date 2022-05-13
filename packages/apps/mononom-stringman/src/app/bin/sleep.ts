// prettier-ignore
export async function sleep({ ms = 1000 }: { ms?: number; } = {}): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
      reject();
    }, ms);
  });
}
