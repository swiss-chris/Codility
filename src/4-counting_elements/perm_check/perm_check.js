// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const set = new Set();
  let max = 1;
  A.forEach(a => {
    set.add(a);
    max = Math.max(max, a);
  });
  return A.length === set.size && max === A.length ? 1 : 0;
}
