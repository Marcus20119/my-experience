import type { ExcelTableEntity } from './excelTable.types';

export const INITIAL_WIDTH: Record<keyof ExcelTableEntity, number> = {
  age: 100,
  dayOfBirth: 150,
  key: 40,
  name: 180,
  note: 400,
  otherIncome: 100,
  salary: 100,
};
