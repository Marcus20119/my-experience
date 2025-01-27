import type {
  EditableColumnType,
  EditableTableRow,
} from '@/app/features/component/table';
import type { Dispatch, SetStateAction } from 'react';
import { EditableTable } from '@/app/features/component/table';
import { DateTimeTool, NumberTool } from '@/shared/utils';
import { Typography } from 'antd';
import { useCallback, useMemo } from 'react';
import type { ExcelTableEntity } from '../model';
import { getExcelColumnName } from '../lib';
import { INITIAL_WIDTH } from '../model';

const { Paragraph, Text } = Typography;
const { formatDate } = DateTimeTool;
const { formatMoney } = NumberTool;

interface Props {
  dataSource: EditableTableRow<ExcelTableEntity>[];
  setDataSource: Dispatch<SetStateAction<EditableTableRow<ExcelTableEntity>[]>>;
  setWidths: Dispatch<SetStateAction<Record<keyof ExcelTableEntity, number>>>;
  tableHeight: number;
}

function ExcelTable({
  dataSource,
  setDataSource,
  setWidths,
  tableHeight,
}: Props) {
  const handleSave = useCallback(
    (row: EditableTableRow<ExcelTableEntity>) => {
      const newData = [...dataSource];
      const index = newData.findIndex(item => row.key === item.key);
      const item = newData[index];

      newData.splice(index, 1, {
        ...item,
        ...row,
      });
      setDataSource(newData);
    },
    [dataSource, setDataSource],
  );

  const columns = useMemo<
    EditableColumnType<EditableTableRow<ExcelTableEntity>>[]
  >(
    () => [
      {
        align: 'center',
        className: 'bg-neutral-100',
        dataIndex: 'key',
        fixed: 'left',
        inputType: 'text',
        key: 'key',
        render: (_, { key }) => (
          <Text className="w-full text-wrap text-sm font-semibold">{key}</Text>
        ),
        title: 1,
        width: INITIAL_WIDTH.key,
      },
      {
        dataIndex: 'name',
        editable: true,
        fixed: 'left',
        inputType: 'text',
        key: 'name',
        render: (_, { name }) => (
          <Text className="w-full text-wrap text-sm">{name}</Text>
        ),
        title: 'Name',
        width: INITIAL_WIDTH.name,
      },
      {
        dataIndex: 'age',
        editable: true,
        inputNumberProps: {
          min: 0,
        },
        inputType: 'number',
        key: 'age',
        render: (_, { age }) => (
          <Text className="w-full text-wrap text-sm">{age}</Text>
        ),
        title: 'Age',
        width: INITIAL_WIDTH.age,
      },
      {
        dataIndex: 'dayOfBirth',
        editable: true,
        inputType: 'date',
        key: 'dayOfBirth',
        render: (_, { dayOfBirth }) => (
          <Text className="w-full text-wrap text-sm">
            {formatDate(dayOfBirth)}
          </Text>
        ),
        title: 'Day of birth',
        width: INITIAL_WIDTH.dayOfBirth,
      },
      {
        dataIndex: 'salary',
        editable: true,
        inputNumberProps: {
          min: 0,
        },
        inputType: 'number',
        key: 'salary',
        render: (_, { salary }) => (
          <Text className="w-full text-wrap text-sm">
            {formatMoney(salary)}
          </Text>
        ),
        title: 'Salary',
        width: INITIAL_WIDTH.salary,
      },
      {
        dataIndex: 'otherIncome',
        editable: true,
        inputNumberProps: {
          min: 0,
        },
        inputType: 'number',
        key: 'otherIncome',
        render: (_, { otherIncome }) => (
          <Text className="w-full text-wrap text-sm">
            {formatMoney(otherIncome)}
          </Text>
        ),
        title: 'Other income',
        width: INITIAL_WIDTH.otherIncome,
      },
      {
        dataIndex: 'note',
        editable: true,
        inputTextAreaProps: {
          autoSize: true,
        },
        inputType: 'textarea',
        key: 'note',
        render: (_, { note }) => (
          <Paragraph className="mb-0 w-full whitespace-pre-line text-wrap text-sm">
            {note}
          </Paragraph>
        ),

        title: 'Note',
        width: INITIAL_WIDTH.note,
      },
    ],
    [],
  );

  const formattedColumns = useMemo(() => {
    const excelColumns: EditableColumnType<
      EditableTableRow<ExcelTableEntity>
    >[] = columns.map((col, index) => ({
      align: 'center',
      children: [col],
      className: 'bg-neutral-100',
      editable: col.editable,
      fixed: col.fixed,
      title: getExcelColumnName(index),
      width: col.width,
    }));

    return excelColumns.map(col => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        children: col.children?.map(child => ({
          ...child,
          onCell: (record: EditableTableRow<ExcelTableEntity>) => ({
            ...child,
            handleSave,
            record,
          }),
        })),
        onCell: (record: EditableTableRow<ExcelTableEntity>) => ({
          ...col,
          handleSave,
          record,
        }),
      };
    });
  }, [columns, handleSave]);

  return (
    <EditableTable<EditableTableRow<ExcelTableEntity>>
      columns={formattedColumns as EditableColumnType<ExcelTableEntity>[]}
      dataSource={dataSource}
      onResize={columns => {
        const widths = columns.reduce(
          (acc, col) => {
            const key = col.children?.[0].dataIndex as keyof ExcelTableEntity;
            acc[key] = col.children?.[0].width ?? 0;
            return acc;
          },
          {} as Record<keyof ExcelTableEntity, number>,
        );

        setWidths(widths);
      }}
      pagination={false}
      resizable
      scroll={{ x: 'max-content', y: tableHeight }}
    />
  );
}

export default ExcelTable;
