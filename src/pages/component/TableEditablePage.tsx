import type { StudentFormEntity } from '@/app/features/component/table';
import type { ItemType } from 'antd/es/menu/interface';
import { StudentTable } from '@/app/features/component/table';
import { TableLayout } from '@/app/layout';
import { Form } from 'antd';
import { InfoCircle } from 'iconsax-react';
import { useTranslation } from 'react-i18next';

function TableEditablePage() {
  const { t } = useTranslation();
  const [form] = Form.useForm<StudentFormEntity>();

  const tabItems: ItemType[] = [
    {
      icon: <InfoCircle size={16} />,
      key: 'introduction',
      label: t('layout.action.introduction'),
    },
  ];

  return (
    <TableLayout
      route={{
        path: '/component/table/editable',
      }}
      tabItems={tabItems}
    >
      <Form<StudentFormEntity>
        form={form}
        layout="vertical"
        onFinish={values => console.log(values)}
        size="small"
      >
        <Form.Item<StudentFormEntity>
          className="mb-0"
          name="students"
          valuePropName="students"
        >
          <StudentTable />
        </Form.Item>
      </Form>
    </TableLayout>
  );
}

export default TableEditablePage;
