function solution(N, stages) {
  const lastStageCnts = Array.from({ length: N + 2 }, () => 0);
  const clearStageCnts = Array.from({ length: N + 2 }, () => 0);
  for (let i = 0; i < stages.length; i++) {
    const lastStage = stages[i];
    lastStageCnts[lastStage]++;
    if (lastStage - 1 > 0) {
      clearStageCnts[lastStage - 1]++;
    }
  }

  let clearCnt = lastStageCnts[0];
  for (let i = clearStageCnts.length - 1; i >= 0; i--) {
    clearCnt += clearStageCnts[i];
    clearStageCnts[i] = clearCnt;
  }

  const failureRates = [];
  for (let i = 1; i < N + 1; i++) {
    failureRates.push([
      lastStageCnts[i] / (clearStageCnts[i] + lastStageCnts[i]),
      i
    ]);
  }
  return failureRates
    .sort((a, b) => b[0] - a[0] || a[1] - b[1])
    .map(([_, idx]) => idx);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
