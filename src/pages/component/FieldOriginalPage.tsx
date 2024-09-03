import type { OriginalFieldForm } from '@/app/features/component/field';
import {
  DatePickerFields,
  InputFields,
  SelectFields,
} from '@/app/features/component/field';
import { FieldLayout } from '@/app/layout';
import { Button, Flex, Form } from 'antd';
import { useTranslation } from 'react-i18next';

function FieldOriginalPage() {
  const { t } = useTranslation();
  const [form] = Form.useForm<OriginalFieldForm>();

  return (
    <FieldLayout
      route={{
        path: '/component/field/original',
      }}
    >
      <Form<OriginalFieldForm>
        form={form}
        layout="vertical"
        onFinish={values => console.log(values)}
        size="middle"
      >
        <Flex gap="1rem" vertical>
          <Flex gap="1rem" vertical>
            <InputFields />
            <SelectFields />
            <DatePickerFields />
          </Flex>

          <Flex justify="end">
            <Button htmlType="submit" type="primary">
              {t('common.button.save')}
            </Button>
          </Flex>
        </Flex>
      </Form>
    </FieldLayout>
  );
}

export default FieldOriginalPage;
