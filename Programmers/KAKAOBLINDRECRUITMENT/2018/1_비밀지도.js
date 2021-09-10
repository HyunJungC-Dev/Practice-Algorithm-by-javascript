function solution(n, arr1, arr2) {
  const map1 = arr1.map(rowNum => {
    const binary = rowNum.toString(2);
    return binary.length < n
      ? Array.from({ length: n - binary.length }, () => '0').join('') + binary
      : binary;
  });

  const map2 = arr2.map(rowNum => {
    const binary = rowNum.toString(2);
    return binary.length < n
      ? Array.from({ length: n - binary.length }, () => '0').join('') + binary
      : binary;
  });

  return map1.map((map1Row, idx) => {
    const map1RowSplit = map1Row.split('');
    const map2RowSplit = map2[idx].split('');
    return map1RowSplit
      .map((map1Bit, idx) =>
        map1Bit === '1' || map2RowSplit[idx] === '1' ? '#' : ' '
      )
      .join('');
  });
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
