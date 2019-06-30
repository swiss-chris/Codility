export const solution = (A, K, shift = A.length - (K % A.length)) => [
  ...A.slice(shift),
  ...A.slice(0, shift)
];
