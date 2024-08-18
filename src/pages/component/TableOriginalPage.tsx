import type { ItemType } from 'antd/es/menu/interface';
import type { TourProps } from 'antd/lib';
import { OriginalTable } from '@/app/features/component/table';
import { TableLayout } from '@/app/layout';
import { Value } from '@/shared/components';
import { useToggle } from '@/shared/hooks';
import { Tour } from 'antd';
import { InfoCircle } from 'iconsax-react';
import { useTranslation } from 'react-i18next';

function TableOriginalPage() {
  const { t } = useTranslation();
  const {
    onClose: onCloseTour,
    onOpen: onOpenTour,
    open: openTour,
  } = useToggle();

  const tabItems: ItemType[] = [
    {
      icon: <InfoCircle size={16} />,
      key: 'introduction',
      label: t('layout.action.introduction'),
      onClick: onOpenTour,
    },
  ];

  const steps: TourProps['steps'] = [
    {
      description: (
        <Value.List
          value={[
            'Includes all basic and some advanced features.',
            'Always fit the window size.',
          ]}
        />
      ),
      placement: 'center',
      title: 'Original table',
    },
    {
      description: (
        <Value.List
          value={[
            'Hover here to see the resizable handle',
            'Drag and drop to resize the column.',
            'Double click to reset the size.',
          ]}
        />
      ),
      target: () => {
        const element = document.querySelector('.resize-handle');
        return element as HTMLElement;
      },
      title: 'Resizable columns',
    },
    {
      description: (
        <Value.List
          value={[
            'Click here to see the customizable columns panel.',
            'Drag and drop to reorder the column.',
            'Toggle the checkbox to show/hide the column.',
          ]}
        />
      ),
      target: () => {
        const element = document.querySelector('.customize-cell');
        return element as HTMLElement;
      },
      title: 'Customizable columns',
    },
    {
      description: <Value.List value={['Includes all pagination features.']} />,
      target: () => {
        const element = document.querySelector('.ant-pagination');
        return element as HTMLElement;
      },
      title: 'Pagination',
    },
    {
      description: (
        <Value.List
          value={[
            'Allow select multiple rows.',
            'Add more action to these rows at table footer.',
          ]}
        />
      ),
      target: () => {
        const element = document.querySelector('.ant-table-selection-column');
        return element as HTMLElement;
      },
      title: 'Multiple selection',
    },
    {
      description: (
        <Value.List value={['Basic sort feature by each column.']} />
      ),
      target: () => {
        const element = document.querySelector('.ant-table-column-sorter');
        return element as HTMLElement;
      },
      title: 'Sortable columns',
    },
    {
      description: (
        <Value.List
          value={[
            'Filter feature is currently not include in this table because it based on BE query structure. ',
            'Depends on each project, I will define this feature later.',
          ]}
        />
      ),
      title: 'Filter',
    },
  ];

  return (
    <TableLayout
      route={{
        path: '/component/table/original',
      }}
      tabItems={tabItems}
    >
      <OriginalTable />
      <Tour onClose={onCloseTour} open={openTour} steps={steps} />
    </TableLayout>
  );
}

export default TableOriginalPage;
