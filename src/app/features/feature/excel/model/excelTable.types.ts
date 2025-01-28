import type * as XLSX from 'xlsx-js-style';

export interface ExcelTableEntity {
  age?: number;
  dayOfBirth?: string;
  key: number;
  name: string;
  note?: string;
  otherIncome?: number;
  salary?: number;
}

export type ExcelExportTableEntity = Omit<ExcelTableEntity, 'key'>;

export interface CellAddress {
  col: string;
  row: number;
}

export interface RangeAddress {
  end: CellAddress;
  start: CellAddress;
}

export interface RangeStyle {
  range: RangeAddress;
  style: XLSX.CellStyle;
}
