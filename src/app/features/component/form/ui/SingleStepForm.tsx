import type { FormInstance } from 'antd/lib';
import { Button, Col, Flex, Form, Input, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import type { SingleStepFormEntity } from '../model';

const { TextArea } = Input;

interface Props {
  form?: FormInstance<SingleStepFormEntity>;
  onFinish?: (values: SingleStepFormEntity) => void;
  showButton?: boolean;
}

function SingleStepForm({ form, onFinish, showButton = true }: Props) {
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
          <Form.Item<SingleStepFormEntity>
            label="Full Name"
            name="fullName"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter full name" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<SingleStepFormEntity>
            label="Email"
            name="email"
            rules={[{ required: true, type: 'email' }]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<SingleStepFormEntity> label="City" name="city">
            <Input placeholder="Enter city" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<SingleStepFormEntity> label="Country" name="country">
            <Input placeholder="Enter country" />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item<SingleStepFormEntity> label="Address" name="address">
            <TextArea placeholder="Enter address" rows={4} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<SingleStepFormEntity>
            label="Phone number"
            name="phoneNumber"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<SingleStepFormEntity> label="State" name="state">
            <Input placeholder="Enter state" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<SingleStepFormEntity> label="Zip code" name="zip">
            <Input placeholder="Enter zip code" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<SingleStepFormEntity> label="Major" name="major">
            <Input placeholder="Enter major" />
          </Form.Item>
        </Col>
      </Row>

      {showButton ? (
        <Flex justify="end">
          <Button htmlType="submit" type="primary">
            {t('common.button.save')}
          </Button>
        </Flex>
      ) : null}
    </Form>
  );
}

export default SingleStepForm;
