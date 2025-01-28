import type { RangeAddress } from '../model';

export const isSameRange = (
  firstRange?: null | RangeAddress,
  secondRange?: null | RangeAddress,
) => {
  if (!firstRange || !secondRange) {
    return false;
  }

  const maxFirstCol =
    firstRange.start.col > firstRange.end.col
      ? firstRange.start.col
      : firstRange.end.col;
  const minFirstCol =
    firstRange.start.col < firstRange.end.col
      ? firstRange.start.col
      : firstRange.end.col;
  const maxFirstRow = Math.max(firstRange.start.row, firstRange.end.row);
  const minFirstRow = Math.min(firstRange.start.row, firstRange.end.row);
  const maxSecondCol =
    secondRange.start.col > secondRange.end.col
      ? secondRange.start.col
      : secondRange.end.col;
  const minSecondCol =
    secondRange.start.col < secondRange.end.col
      ? secondRange.start.col
      : secondRange.end.col;
  const maxSecondRow = Math.max(secondRange.start.row, secondRange.end.row);
  const minSecondRow = Math.min(secondRange.start.row, secondRange.end.row);

  return (
    maxFirstCol === maxSecondCol &&
    minFirstCol === minSecondCol &&
    maxFirstRow === maxSecondRow &&
    minFirstRow === minSecondRow
  );
};
