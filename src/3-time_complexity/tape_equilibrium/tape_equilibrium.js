// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let sum1 = 0;
  // 1. sum the entire array
  let sum2 = A.reduce((a, b) => a + b);
  let min = Number.MAX_VALUE;
  // 2. subtract the first element from the sum and add it to a second sum
  for (let i = 0; i < A.length - 1; i++) {
    sum1 += A[i];
    sum2 -= A[i];
    min = Math.min(min, Math.abs(sum1 - sum2));
  }
  return min;
}

console.log([].reduce((a, b) => a + b), 0);
