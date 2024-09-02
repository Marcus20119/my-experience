import type { MultipleFormFirstStepEntity } from '@/app/features/component/form';
import type { FormInstance } from 'antd/lib';
import { DatePickerUI } from '@/shared/components';
import { Button, Col, Flex, Form, Input, Row } from 'antd';
import { useTranslation } from 'react-i18next';

interface Props {
  form?: FormInstance<MultipleFormFirstStepEntity>;
  loading?: boolean;
  onFinish?: (values: MultipleFormFirstStepEntity) => void;
  showButton?: boolean;
}

function FirstStepForm({ form, loading, onFinish, showButton = true }: Props) {
  const { t } = useTranslation();

  return (
    <Form
      autoComplete="off"
      form={form}
      layout="vertical"
      onFinish={onFinish}
      scrollToFirstError={{
        behavior: 'smooth',
        block: 'center',
        scrollMode: 'always',
      }}
      size="middle"
    >
      <Row gutter={[16, 0]}>
        <Col span={12}>
          <Form.Item<MultipleFormFirstStepEntity>
            label="Full name"
            name="fullName"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter full name" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormFirstStepEntity>
            label="Email"
            name="email"
            rules={[{ required: true, type: 'email' }]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormFirstStepEntity>
            label="Phone number"
            name="phoneNumber"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormFirstStepEntity>
            label="Date of birth"
            name="dateOfBirth"
          >
            <DatePickerUI placeholder="Select date of birth" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormFirstStepEntity> label="City" name="city">
            <Input placeholder="Enter city" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormFirstStepEntity>
            label="Address"
            name="address"
          >
            <Input placeholder="Enter address" />
          </Form.Item>
        </Col>
      </Row>

      {showButton ? (
        <Flex justify="end">
          <Button htmlType="submit" loading={loading} type="primary">
            {t('common.button.next')}
          </Button>
        </Flex>
      ) : null}
    </Form>
  );
}

export default FirstStepForm;
