function solution(n, arr1, arr2) {
  return arr1.map((map1Row, idx) => {
    const binary = (map1Row | arr2[idx]).toString(2);
    return (
      binary.length < n
        ? Array.from({ length: n - binary.length }, () => '0').join('') + binary
        : binary
    )
      .replace(/1/g, '#')
      .replace(/0/g, ' ');
  });
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
