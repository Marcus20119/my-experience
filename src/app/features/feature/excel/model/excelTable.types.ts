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
