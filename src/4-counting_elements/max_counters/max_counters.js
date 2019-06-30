function solution(N, A) {
  // prefill counters and set to 0
  const map = new Map(
    Array(N)
      .fill(0)
      .map((_, i) => [i + 1, 0])
  );
  let baseline = 0;
  let max = 0;
  A.forEach(a => {
    if (a <= N) {
      map.set(a, Math.max(baseline, map.get(a)) + 1);
      max = Math.max(max, map.get(a));
    } else {
      // find highest value and set baseline
      baseline = Math.max(max, baseline);
    }
  });
  map.forEach((value, key) => {
    if (value < baseline) map.set(key, baseline);
  });
  return Array.from(map.values());
}
