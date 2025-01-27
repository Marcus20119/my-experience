import type { EditableTableRow } from '@/app/features/component/table';
import type { ExcelTableEntity } from '@/app/features/feature/excel';
import type { BreadCrumbItem } from '@/app/features/header';
import {
  ExcelActions,
  ExcelTable,
  INITIAL_WIDTH,
} from '@/app/features/feature/excel';
import { useHeaderStore } from '@/app/features/header';
import { ContentLayout } from '@/app/layout';
import { HEIGHT, SPACING } from '@/shared/assets/styles/constants';
import { useCalculateElementSize } from '@/shared/hooks';
import { faker } from '@faker-js/faker';
import { Flex } from 'antd';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

function ExcelPage() {
  const { t } = useTranslation();

  const breadCrumb: BreadCrumbItem[] = [
    {
      title: t('layout.title.feature'),
    },
    {
      title: t('layout.title.excel'),
    },
  ];

  const { getHeaderHeight } = useHeaderStore();
  const { height } = useCalculateElementSize({
    heightOffset:
      getHeaderHeight() +
      SPACING.contentPadding * 3 +
      HEIGHT.tableHeader * 2 +
      HEIGHT.compactAction,
  });

  const defaultValue: EditableTableRow<ExcelTableEntity>[] = useMemo(
    () =>
      Array(20)
        .fill(null)
        .map((_, index) => ({
          key: index + 2,
          name: faker.person.fullName(),
        })),
    [],
  );

  const [dataSource, setDataSource] =
    useState<EditableTableRow<ExcelTableEntity>[]>(defaultValue);
  const [widths, setWidths] =
    useState<Record<keyof ExcelTableEntity, number>>(INITIAL_WIDTH);

  return (
    <ContentLayout breadCrumb={breadCrumb} title={t('layout.title.excel')}>
      <Flex gap="1rem" vertical>
        <ExcelActions dataSource={dataSource} widths={widths} />
        <ExcelTable
          dataSource={dataSource}
          setDataSource={setDataSource}
          setWidths={setWidths}
          tableHeight={height}
        />
      </Flex>
    </ContentLayout>
  );
}

export default ExcelPage;
