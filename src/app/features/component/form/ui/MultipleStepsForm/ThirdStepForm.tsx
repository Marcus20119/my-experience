import type { MultipleFormThirdStepEntity } from '@/app/features/component/form';
import type { FormInstance } from 'antd/lib';
import { DatePickerUI } from '@/shared/components';
import { Button, Col, Flex, Form, Input, InputNumber, Row } from 'antd';
import { useTranslation } from 'react-i18next';

interface Props {
  form?: FormInstance<MultipleFormThirdStepEntity>;
  loading?: boolean;
  onBack?: () => void;
  onFinish?: (values: MultipleFormThirdStepEntity) => void;
  showButton?: boolean;
}

function ThirdStepForm({
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
          <Form.Item<MultipleFormThirdStepEntity>
            label="Highest education level"
            name="highestEducationLevel"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter highest education level" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormThirdStepEntity>
            label="Major"
            name="major"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter major" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormThirdStepEntity>
            label="University"
            name="university"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter university" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormThirdStepEntity>
            label="GPA"
            name="gpa"
            rules={[{ required: true }]}
          >
            <InputNumber
              className="w-full"
              max={4}
              min={0}
              placeholder="Enter gpa"
              precision={2}
              step={0.01}
              type="number"
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<MultipleFormThirdStepEntity>
            label="Graduation date"
            name="graduationDate"
          >
            <DatePickerUI placeholder="Select graduation date" />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item<MultipleFormThirdStepEntity>
            label="Relevant courses"
            name="relevantCourses"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter relevant courses" />
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

export default ThirdStepForm;
