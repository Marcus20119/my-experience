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
            label={t('component.label.fullName')}
            name="fullName"
            rules={[{ required: true }]}
          >
            <Input placeholder={t('component.placeholder.fullName')} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormFirstStepEntity>
            label={t('component.label.email')}
            name="email"
            rules={[{ required: true, type: 'email' }]}
          >
            <Input placeholder={t('component.placeholder.email')} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormFirstStepEntity>
            label={t('component.label.phoneNumber')}
            name="phoneNumber"
            rules={[{ required: true }]}
          >
            <Input placeholder={t('component.placeholder.phoneNumber')} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormFirstStepEntity>
            label={t('component.label.dateOfBirth')}
            name="dateOfBirth"
          >
            <DatePickerUI
              placeholder={t('component.placeholder.dateOfBirth')}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormFirstStepEntity>
            label={t('component.label.city')}
            name="city"
          >
            <Input placeholder={t('component.placeholder.city')} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormFirstStepEntity>
            label={t('component.label.country')}
            name="address"
          >
            <Input placeholder={t('component.placeholder.country')} />
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
