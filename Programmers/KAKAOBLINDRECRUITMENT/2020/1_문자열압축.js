function solution(s) {
  let minLength = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < Math.ceil(s.length / 2) + 1; i++) {
    let words = [];
    let startIdx = 0;
    while (startIdx + i <= s.length) {
      words.push(s.substring(startIdx, startIdx + i));
      startIdx = startIdx + i;
    }
    let compressedS = '';
    let prevWord = words[0];
    let num = 1;
    for (let j = 1; j < words.length; j++) {
      if (prevWord === words[j]) {
        num++;
      } else {
        compressedS += num > 1 ? num + prevWord : prevWord;
        prevWord = words[j];
        num = 1;
      }
    }
    compressedS += num > 1 ? num + prevWord : prevWord;
    minLength = Math.min(minLength, compressedS.length + (s.length % i));
  }
  return minLength;
}

console.log(solution('ababcdcdababcdcd'));
