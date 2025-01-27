import type { EditableTableRow } from '@/app/features/component/table';
import type { CompactActionEntity } from '@/shared/components';
import { Action } from '@/shared/components';
import dayjs from 'dayjs';
import { DocumentDownload } from 'iconsax-react';
import { useCallback, useMemo } from 'react';
import * as XLSX from 'xlsx-js-style';
import type { ExcelExportTableEntity, ExcelTableEntity } from '../model';
import { getExcelRange } from '../lib';

interface Props {
  dataSource: EditableTableRow<ExcelTableEntity>[];
  widths: Record<keyof ExcelTableEntity, number>;
}

function ExcelActions({ dataSource, widths }: Props) {
  const handleExport = useCallback(() => {
    const wb = XLSX.utils.book_new();
    const order: (keyof ExcelExportTableEntity)[] = [
      'name',
      'age',
      'dayOfBirth',
      'salary',
      'otherIncome',
      'note',
    ];
    const header: Record<keyof ExcelExportTableEntity, string> = {
      age: 'Age',
      dayOfBirth: 'Date of birth',
      name: 'Name',
      note: 'Note',
      otherIncome: 'Other income',
      salary: 'Salary',
    };

    const mappedHeader = order.map(key => header[key]);
    const mappedData: (Date | number | string)[][] = dataSource.map(row =>
      order.map(key => {
        if (key === 'dayOfBirth' && row[key]) {
          return dayjs(row[key] as string).toDate();
        }

        return row[key] ?? '';
      }),
    );

    const ws = XLSX.utils.aoa_to_sheet([mappedHeader, ...mappedData], {
      cellDates: true,
    });

    // Set column widths
    ws['!cols'] = order.map(key => ({
      wpx: widths[key],
    }));

    const headerRange = XLSX.utils.decode_range(
      getExcelRange(mappedData, 'A1'),
    );
    const bodyRange = XLSX.utils.decode_range(getExcelRange(mappedData, 'A2'));

    const headerCellStyle: XLSX.CellStyle = {
      fill: { fgColor: { rgb: 'f5f5f5' } },
      font: {
        bold: true,
        sz: 14,
      },
    };

    // Set header style
    for (let R = headerRange.s.r; R <= headerRange.e.r; ++R) {
      for (let C = headerRange.s.c; C <= headerRange.e.c; ++C) {
        const cell: XLSX.CellObject =
          ws[XLSX.utils.encode_cell({ c: C, r: R })];

        if (!cell) {
          continue;
        }

        cell.s = headerCellStyle;
      }
    }

    const defaultBodyCellStyle: XLSX.CellStyle = {
      font: {
        sz: 14,
      },
    };

    // Set body style
    for (let R = bodyRange.s.r; R <= bodyRange.e.r; ++R) {
      for (let C = bodyRange.s.c; C <= bodyRange.e.c; ++C) {
        const cell: XLSX.CellObject =
          ws[XLSX.utils.encode_cell({ c: C, r: R })];

        if (!cell) {
          continue;
        }

        cell.s = defaultBodyCellStyle;
      }
    }

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'export.xlsx');
  }, [dataSource, widths]);

  const actions = useMemo<CompactActionEntity[]>(
    () => [
      {
        icon: <DocumentDownload size="20" />,
        label: 'download',
        onClick: () => {
          handleExport();
          // handleTest();
        },
        type: 'button',
      },
    ],
    [handleExport],
  );

  return <Action.Compact actions={actions} />;
}

export default ExcelActions;
