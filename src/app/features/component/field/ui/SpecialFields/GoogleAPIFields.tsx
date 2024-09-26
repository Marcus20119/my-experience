import type { SpecialFieldForm } from '@/app/features/component/field';
import type { GridCardItem } from '@/shared/components';
import { Card, Field } from '@/shared/components';
import { Form } from 'antd';

function GoogleAPIFields() {
  const grids: GridCardItem[] = [
    {
      content: (
        <Form.Item<SpecialFieldForm>
          label="Auto complete address"
          name="google"
        >
          <Field.GoogleAddressField placeholder="Enter your address" />
        </Form.Item>
      ),
      span: 12,
    },
  ];

  return <Card.Grid grids={grids} title="Google API fields" />;
}

export default GoogleAPIFields;
