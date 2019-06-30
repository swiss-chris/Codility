const solution = (A, K, shift = A.length - (K % A.length)) => [
  ...A.slice(shift),
  ...A.slice(0, shift)
];

test("some test cases", () => {
  expect(solution([1], 100)).toEqual([1]);
  expect(solution([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
  expect(solution([0, 0, 0], 1)).toEqual([0, 0, 0]);
  expect(solution([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
  expect(solution([1, 2, 3, 4], 6)).toEqual([3, 4, 1, 2]);
  expect(solution([1, 2, 3, 4], 9)).toEqual([4, 1, 2, 3]);
});
