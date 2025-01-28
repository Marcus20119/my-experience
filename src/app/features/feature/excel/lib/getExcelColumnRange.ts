const letterToNumber = (letter: string): number =>
  [...letter].reduce(
    (result, char) =>
      result * 26 + (char.charCodeAt(0) - 'A'.charCodeAt(0) + 1),
    0,
  );

const numberToLetter = (num: number): string => {
  let result = '';
  let currentNum = num;

  while (currentNum > 0) {
    currentNum -= 1; // Adjust for 1-based indexing
    result =
      String.fromCharCode((currentNum % 26) + 'A'.charCodeAt(0)) + result;
    currentNum = Math.floor(currentNum / 26);
  }

  return result;
};

export const getExcelColumnRange = (start: string, end: string): string[] => {
  const startNum = letterToNumber(start);
  const endNum = letterToNumber(end);

  const result: string[] = [];

  for (let i = startNum; i <= endNum; i++) {
    result.push(numberToLetter(i)); // Convert back to letters and add to result
  }

  return result;
};
