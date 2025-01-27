/* eslint-disable prefer-destructuring */
export const getExcelRange = (
  data: (Date | number | string)[][],
  startCell = 'A1',
): string => {
  // Helper function to convert column letter to index
  const columnToIndex = (col: string): number => {
    let index = 0;

    for (let i = 0; i < col.length; i++) {
      index = index * 26 + (col.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
    }

    return index;
  };

  // Helper function to convert column index back to letter
  const indexToColumn = (index: number): string => {
    let column = '';
    let currentIndex = index;

    while (currentIndex > 0) {
      currentIndex -= 1;
      column =
        String.fromCharCode((currentIndex % 26) + 'A'.charCodeAt(0)) + column;
      currentIndex = Math.floor(currentIndex / 26);
    }

    return column;
  };

  // Parse the starting cell
  const startColumn = startCell.match(/[A-Z]+/)![0];
  const startRow = parseInt(startCell.match(/\d+/)![0]);

  const startColIndex = columnToIndex(startColumn);

  // Determine the size of the data array
  const rowCount = data.length;
  const colCount = Math.max(...data.map(row => row.length));

  // Calculate the ending cell's column and row
  const endColIndex = startColIndex + colCount - 1;
  const endRow = startRow + rowCount - 1;

  const endColumn = indexToColumn(endColIndex);

  // Return the range
  return `${startCell}:${endColumn}${endRow}`;
};
