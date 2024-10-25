import type { SpecialFieldForm } from '@/app/features/component/field';
import {
  GoogleAPIFields,
  RestCountriesFields,
  UploadFields,
} from '@/app/features/component/field/ui/SpecialFields';
import { FieldLayout } from '@/app/layout';
import { Button, Flex, Form } from 'antd';

function FieldSpecialPage() {
  const [form] = Form.useForm<SpecialFieldForm>();

  return (
    <FieldLayout
      route={{
        path: '/component/field/special',
      }}
    >
      <Form<SpecialFieldForm>
        form={form}
        layout="vertical"
        onFinish={values => console.log(values)}
        size="middle"
      >
        <Flex gap="1rem" vertical>
          <Flex gap="1rem" vertical>
            <RestCountriesFields />
            <GoogleAPIFields />
            <UploadFields />
          </Flex>
          <Flex justify="end">
            <Button htmlType="submit" type="primary">
              Save
            </Button>
          </Flex>
        </Flex>
      </Form>
    </FieldLayout>
  );
}

export default FieldSpecialPage;
