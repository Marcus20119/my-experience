import type { OriginalFieldForm } from '@/app/features/component/field';
import type { GridCardItem } from '@/shared/components';
import { Card } from '@/shared/components';
import { Form, Input, InputNumber } from 'antd';
import { Eye, EyeSlash } from 'iconsax-react';

const { OTP, Password, TextArea } = Input;

function InputFields() {
  const grids: GridCardItem[] = [
    {
      content: (
        <Form.Item<OriginalFieldForm>
          label="Input text"
          name="text"
          // rules={[
          //   {
          //     required: true,
          //     whitespace: true,
          //   },
          // ]}
        >
          <Input placeholder="Enter text" />
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm> label="Input number" name="number">
          <InputNumber
            addonAfter="point"
            changeOnWheel
            max={10}
            min={0}
            placeholder="Enter number"
            precision={1}
            step={0.5}
            type="number"
          />
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm> label="Input password" name="password">
          <Password
            className="[&_.ant-input-suffix]:cursor-pointer"
            iconRender={visible =>
              visible ? <Eye size={16} /> : <EyeSlash size={16} />
            }
            placeholder="Enter password"
          />
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm>
          className="[&_.ant-input-affix-wrapper]:aspect-square [&_.ant-input-suffix]:hidden [&_.ant-input]:text-center [&_.ant-otp]:max-w-full"
          label="Input OTP"
          name="otp"
        >
          <OTP formatter={str => str.toUpperCase()} size="large" />
        </Form.Item>
      ),
      span: 8,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm> label="Textarea" name="textarea">
          <TextArea
            autoSize={{
              maxRows: 4,
              minRows: 2,
            }}
            maxLength={100}
            placeholder="Enter text"
            showCount
          />
        </Form.Item>
      ),
      span: 16,
    },
  ];

  return <Card.Grid grids={grids} title="Input fields" />;
}

export default InputFields;
