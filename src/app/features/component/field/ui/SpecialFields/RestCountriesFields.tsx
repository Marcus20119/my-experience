import type { SpecialFieldForm } from '@/app/features/component/field';
import type { GridCardItem } from '@/shared/components';
import { Card, Field } from '@/shared/components';
import { Form } from 'antd';

function RestCountriesFields() {
  const grids: GridCardItem[] = [
    {
      content: (
        <Form.Item<SpecialFieldForm>
          label="Phone number (Online)"
          name="phoneNumberOnline"
          tooltip="Get options by calling the API from REST Countries"
        >
          <Field.PhoneNumberOnline />
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<SpecialFieldForm>
          label="Phone number (Offline)"
          name="phoneNumberOffline"
          tooltip="Get options by stored data (from REST Countries v3.1)"
        >
          <Field.PhoneNumberOffline />
        </Form.Item>
      ),
      span: 8,
    },
    {
      span: 8,
    },
    {
      content: (
        <Form.Item<SpecialFieldForm>
          label="Nationality (Online)"
          name="nationalityOnline"
          tooltip="Get options by calling the API from REST Countries"
        >
          <Field.NationalityOnline />
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<SpecialFieldForm>
          label="Nationality (Offline)"
          name="nationalityOffline"
          tooltip="Get options by stored data (from REST Countries v3.1)"
        >
          <Field.NationalityOffline />
        </Form.Item>
      ),
      span: 8,
    },
  ];

  return <Card.Grid grids={grids} title="Rest Countries API fields" />;
}

export default RestCountriesFields;
