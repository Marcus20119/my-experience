export const getExcelColumnName = (colIndex: number): string => {
  if (colIndex < 0)
    throw new Error('Column index must be a non-negative integer.');
  if (colIndex === 0) return ''; // Return an empty string for colIndex = 0

  let columnName = '';
  let currentIndex = colIndex;

  while (currentIndex > 0) {
    const remainder = (currentIndex - 1) % 26;
    columnName = String.fromCharCode(65 + remainder) + columnName;
    currentIndex = Math.floor((currentIndex - 1) / 26);
  }

  return columnName;
};
