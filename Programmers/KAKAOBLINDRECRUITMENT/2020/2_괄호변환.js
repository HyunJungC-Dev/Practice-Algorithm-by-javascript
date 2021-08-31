const isCorrect = p => {
  const stack = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') stack.push(p[i]);
    else if (p[i] === ')') {
      const top = stack[stack.length - 1];
      if (top === '(') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
};

const reverse = p => {
  return p
    .substring(1, p.length - 1)
    .split('')
    .map(el => (el === '(' ? ')' : '('))
    .join('');
};

function solution(p) {
  const recur = subP => {
    if (subP === '') {
      return '';
    }
    let openingNum = 0;
    let closingNum = 0;
    let idx = 0;
    let u = '';
    while (
      idx <= subP.length - 1 &&
      ((openingNum === 0 && closingNum === 0) || openingNum !== closingNum)
    ) {
      if (subP[idx] === '(') {
        openingNum++;
      } else {
        closingNum++;
      }
      u += subP[idx];
      idx++;
    }
    const v = subP.substring(idx);
    // return '<' + u + recur(v) + '>';

    if (isCorrect(u)) {
      return u + recur(v);
    } else {
      return '(' + recur(v) + ')' + reverse(u);
    }
  };
  return recur(p);
}

console.log(solution('()))((()'));
