import type { OriginalFieldForm } from '@/app/features/component/field';
import type { GridCardItem } from '@/shared/components';
import type { CheckboxOptionType } from 'antd/lib';
import { Card } from '@/shared/components';
import {
  Checkbox,
  Col,
  Flex,
  Form,
  Radio,
  Row,
  Switch,
  Typography,
} from 'antd';

const { Text } = Typography;

function BooleanFields() {
  const checkboxOptions: CheckboxOptionType[] = [
    { label: 'Python', value: 'python' },
    { label: 'Java', value: 'java' },
    { label: 'JavaScript', value: 'javascript' },
    { label: 'TypeScript', value: 'typescript' },
    { disabled: true, label: 'C++', value: 'c++' },
    { label: 'C#', value: 'c#' },
    { label: 'Ruby', value: 'ruby' },
    { label: 'PHP', value: 'php' },
    { label: 'Go', value: 'go' },
    { label: 'Swift', value: 'swift' },
  ];

  const radioOptions: CheckboxOptionType[] = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  const grids: GridCardItem[] = [
    {
      content: (
        <Form.Item<OriginalFieldForm>
          label="Checkbox"
          name="checkbox"
          valuePropName="checked"
        >
          <Checkbox>Agree with our conditions.</Checkbox>
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm>
          label="Checkbox group"
          name="checkboxGroup"
        >
          <Checkbox.Group className="w-full">
            <Row>
              {checkboxOptions.map(option => (
                <Col key={option.value} span={6}>
                  <Checkbox disabled={option.disabled} value={option.value}>
                    {option.label}
                  </Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Form.Item>
      ),
      span: 16,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm> label="Switch" name="switch">
          <Flex align="center" gap="0.5rem">
            <Switch />
            <Text>Apply</Text>
          </Flex>
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm> label="Radio group" name="radioGroup">
          <Radio.Group options={radioOptions} />
        </Form.Item>
      ),
      span: 16,
    },
  ];

  return <Card.Grid grids={grids} title="Boolean fields" />;
}

export default BooleanFields;
