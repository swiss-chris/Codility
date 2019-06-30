export const solution = N => {
  const numbers = new Map();

  N.forEach(n => {
    if (numbers.has(n)) {
      numbers.set(n, numbers.get(n) + 1);
    } else {
      numbers.set(n, 1);
    }
  });

  for (const [n, count] of numbers) {
    if (count % 2 === 1) {
      return n;
    }
  }
};
