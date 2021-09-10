function solution(dartResult) {
  const stack = dartResult.split('');
  const scores = [];
  let score = '';
  while (stack.length) {
    const top = stack.shift();
    // 숫자 아스키 코드
    if (top.charCodeAt(0) >= 48 && top.charCodeAt(0) <= 57) {
      score += top;
    }
    switch (top) {
      case 'S':
      case 'D':
      case 'T':
        score = +score;
        score **= top === 'S' ? 1 : top === 'D' ? 2 : 3;
        scores.push(score);
        score = '';
        break;
      case '*':
        scores[scores.length - 1] *= 2;
        if (scores.length - 2 >= 0) {
          scores[scores.length - 2] *= 2;
        }
        break;
      case '#':
        scores[scores.length - 1] *= -1;
        break;
      default:
        break;
    }
  }
  return scores.reduce((pre, cur) => pre + cur, 0);
}

console.log(solution('1S2D*3T'));
