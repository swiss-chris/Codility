function solution(N, A) {
  // prefill counters and set to 0
  let counters = new Array(N).fill(0);
  let baseline = 0;
  let max = 0;
  A.forEach(a => {
    if (a <= N) {
      counters[a - 1] = Math.max(baseline, counters[a - 1]) + 1;
      max = Math.max(max, counters[a - 1]);
    } else {
      // find highest value and set baseline
      baseline = Math.max(baseline, max);
    }
  });
  for (let i = 0; i < counters.length; i++) {
    if (counters[i] < baseline) counters[i] = baseline;
  }
  return counters;
}
