import { useHeaderStore } from '@/app/features/header';
import { useSidebarStore } from '@/app/features/sidebar';
import { HEIGHT } from '@/shared/assets/styles/constants/height';
import { SPACING } from '@/shared/assets/styles/constants/spacing';
import { WIDTH } from '@/shared/assets/styles/constants/width';
import { SelectUI } from '@/shared/components';
import { useCalculateElementSize } from '@/shared/hooks';
import { DateTimeTool } from '@/shared/utils';
import { Button, Flex, Popconfirm, Typography } from 'antd';
import dayjs from 'dayjs';
import { Add, Trash } from 'iconsax-react';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type {
  EditableColumnType,
  EditableTableRow,
  StudentTableEntity,
} from '../model';
import { Gender } from '../model';
import EditableTable from './EditableTable';

const { Paragraph, Text } = Typography;

const ADD_STUDENT_BUTTON_HEIGHT = 48;

interface Props {
  onChange?: (students: StudentTableEntity[]) => void;
  students?: StudentTableEntity[];
}

function StudentTable({ onChange, students }: Props) {
  const { t } = useTranslation();
  const { getHeaderHeight } = useHeaderStore();
  const { getSidebarWidth } = useSidebarStore();
  const { height, width } = useCalculateElementSize({
    heightOffset:
      getHeaderHeight() +
      SPACING.contentPadding * 2 +
      HEIGHT.tableHeader +
      +ADD_STUDENT_BUTTON_HEIGHT,
    widthOffset:
      getSidebarWidth() + SPACING.contentPadding * 2 + WIDTH.scrollbar,
  });

  const defaultValue: EditableTableRow<StudentTableEntity> = useMemo(
    () => ({
      age: 0,
      applyDate: [dayjs(), dayjs().add(1, 'month')],
      birthDate: dayjs(),
      gender: undefined,
      key: 0,
      name: 'Student 1',
      note: undefined,
      scores: [
        {
          key: 'math',
          name: 'math',
          score: 0,
        },
      ],
    }),
    [],
  );

  const [dataSource, setDataSource] = useState<
    EditableTableRow<StudentTableEntity>[]
  >([defaultValue]);

  const [count, setCount] = useState(1);

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter(item => item.key !== key);
    setDataSource(newData);
    onChange?.(newData);
  };

  const handleAdd = () => {
    const newData: EditableTableRow<StudentTableEntity> = {
      ...defaultValue,
      key: count,
      name: `Student ${count + 1}`,
    };
    setDataSource([...dataSource, newData]);
    onChange?.([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleSave = (row: EditableTableRow<StudentTableEntity>) => {
    const newData = [...dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];

    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
    onChange?.(newData);
  };

  const columns: EditableColumnType<EditableTableRow<StudentTableEntity>>[] = [
    {
      dataIndex: 'name',
      editable: true,
      fixed: 'left',
      inputType: 'text',
      key: 'name',
      render: (_, { name }) => (
        <Text className="w-full text-wrap text-sm">{name}</Text>
      ),
      title: t('component.table.name'),
      width: 180,
    },
    {
      dataIndex: 'gender',
      key: 'gender',
      render: (_, student) => (
        <SelectUI
          className="w-full"
          onChange={value =>
            handleSave({
              ...student,
              gender: value,
            })
          }
          options={[
            {
              label: t('common.gender.male'),
              value: Gender.Male,
            },
            {
              label: t('common.gender.female'),
              value: Gender.Female,
            },
            {
              label: t('common.gender.nonBinary'),
              value: Gender.NonBinary,
            },
          ]}
          placeholder={t('common.placeholder.selectGender')}
          value={student.gender}
        />
      ),
      title: t('component.table.gender'),
      width: 180,
    },
    {
      dataIndex: 'age',
      editable: true,
      fixed: 'left',
      inputNumberProps: {
        min: 0,
      },
      inputType: 'number',
      key: 'age',
      render: (_, { age }) => (
        <Text className="w-full text-wrap text-right text-sm">{age}</Text>
      ),
      title: t('component.table.age'),
      width: 180,
    },
    {
      dataIndex: 'birthDate',
      editable: true,
      fixed: 'left',
      inputType: 'date',
      key: 'birthDate',
      render: (_, { birthDate }) => (
        <Text className="w-full text-wrap text-right text-sm">
          {DateTimeTool.formatDate(birthDate)}
        </Text>
      ),
      title: t('component.table.birthDate'),
      width: 180,
    },
    {
      dataIndex: 'applyDate',
      editable: true,
      fixed: 'left',
      inputType: 'rangeDate',
      key: 'applyDate',
      render: (_, { applyDate }) => (
        <Text className="w-full text-wrap text-right text-sm">
          {DateTimeTool.formatDateRange(applyDate?.[0], applyDate?.[1])}
        </Text>
      ),
      title: t('component.table.applyDate'),
      width: 180,
    },
    {
      children: [
        {
          title: 'Math',
        },
      ],
      title: t('component.table.academicTranscript'),
    },
    {
      dataIndex: 'note',
      editable: true,
      fixed: 'left',
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
      title: t('component.table.note'),
      width: 180,
    },
    {
      align: 'center',
      fixed: 'right',
      key: 'actions',
      render: (_, record) =>
        dataSource.length > 1 ? (
          <Popconfirm
            cancelButtonProps={{
              size: 'small',
              style: { fontSize: '0.875rem' },
            }}
            cancelText={t('common.button.cancel')}
            okButtonProps={{
              size: 'small',
              style: { fontSize: '0.875rem' },
            }}
            okText={t('common.button.delete')}
            onConfirm={() => handleDelete(record?.key ?? '')}
            title={t('common.title.sureDelete')}
          >
            <Button icon={<Trash size="20" />} />
          </Popconfirm>
        ) : null,
      width: 60,
    },
  ];

  const formattedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record: EditableTableRow<StudentTableEntity>) => ({
        ...col,
        handleSave,
        record,
      }),
    };
  });

  useEffect(() => {
    if (students && count === 1) {
      setDataSource(
        students.map((student, index) => ({
          ...student,
          key: index,
        })),
      );
      setCount(students.length + 1);
    }

    if (!students && count > 1) {
      setDataSource([defaultValue]);
      setCount(1);
    }
  }, [count, defaultValue, students]);

  return (
    <Flex vertical>
      <EditableTable<EditableTableRow<StudentTableEntity>>
        columns={formattedColumns as EditableColumnType<StudentTableEntity>[]}
        dataSource={dataSource}
        pagination={false}
        scroll={{ x: width, y: height }}
      />
      <Flex
        align="center"
        className="cursor-pointer border border-x-0 border-b border-t-0 border-solid border-neutral-100 border-b-neutral-500 px-3 py-3 hover:bg-neutral-100 hover:text-system-information"
        gap="0.75rem"
        onClick={handleAdd}
        style={{ height: ADD_STUDENT_BUTTON_HEIGHT }}
      >
        <Add size={20} />
        <Text className="text-sm font-medium text-inherit">
          {t('component.button.student')}
        </Text>
      </Flex>
    </Flex>
  );
}

export default StudentTable;
