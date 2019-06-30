// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  const stack = [{ _: 0, b: 0 }];
  for (let i = 0; i < A.length; i++) {
    const next = { a: A[i], b: B[i] };
    while (true) {
      const top = stack[stack.length - 1];
      if (next.b === 1 || top.b === 0) {
        stack.push(next);
        break;
      } else if (top.a > next.a) {
        break;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length - 1;
}
