// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // const openers = ["(", "[", "{"]; // optimization ?
  const matching = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  const stack = [];
  for (let i = 0, s = S.charAt(0); i < S.length; i++, s = S.charAt(i)) {
    if (Object.values(matching).includes(s)) stack.push(s);
    else if (stack[stack.length - 1] === matching[s]) stack.pop();
    else return 0; // optimization
  }
  return stack.length === 0 ? 1 : 0;
}

test("test", () => {
  expect(solution("()")).toBe(1);
});
