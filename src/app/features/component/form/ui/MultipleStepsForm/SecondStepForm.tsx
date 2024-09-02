import type { MultipleFormSecondStepEntity } from '@/app/features/component/form';
import type { FormInstance } from 'antd/lib';
import { Button, Col, Flex, Form, Input, InputNumber, Row } from 'antd';
import { useTranslation } from 'react-i18next';

interface Props {
  form?: FormInstance<MultipleFormSecondStepEntity>;
  loading?: boolean;
  onBack?: () => void;
  onFinish?: (values: MultipleFormSecondStepEntity) => void;
  showButton?: boolean;
}

function SecondStepForm({
  form,
  loading,
  onBack,
  onFinish,
  showButton = true,
}: Props) {
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
        <Col span={24}>
          <Form.Item<MultipleFormSecondStepEntity>
            label="Company name"
            name="companyName"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter company name" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormSecondStepEntity>
            label="Current job title"
            name="currentJobTitle"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter current job title" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormSecondStepEntity>
            label="Years of experience"
            name="yearsOfExperience"
            rules={[{ required: true }]}
          >
            <InputNumber
              className="w-full"
              min={0}
              placeholder="Enter years of experience"
              precision={1}
              step={0.5}
              type="number"
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item<MultipleFormSecondStepEntity>
            label="Previous company name"
            name="previousCompanyName"
          >
            <Input placeholder="Enter previous company name" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormSecondStepEntity>
            label="Previous job title"
            name="previousJobTitle"
          >
            <Input placeholder="Enter previous job title" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormSecondStepEntity>
            label="Years of experience"
            name="yearsOfExperienceInPreviousJob"
          >
            <InputNumber
              className="w-full"
              min={0}
              placeholder="Enter years of experience"
              precision={1}
              step={0.5}
              type="number"
            />
          </Form.Item>
        </Col>
      </Row>

      {showButton ? (
        <Flex gap="0.5rem" justify="end">
          <Button htmlType="submit" onClick={onBack}>
            {t('common.button.back')}
          </Button>
          <Button htmlType="submit" loading={loading} type="primary">
            {t('common.button.next')}
          </Button>
        </Flex>
      ) : null}
    </Form>
  );
}

export default SecondStepForm;
