import type { OriginalFieldForm } from '@/app/features/component/field';
import type { GridCardItem } from '@/shared/components';
import type { Color } from 'antd/es/color-picker';
import { Card } from '@/shared/components';
import { NumberTool } from '@/shared/utils';
import { ColorPicker, Form, Rate, Slider } from 'antd';

const MIN_PRICE = 0;
const MAX_PRICE = 5000000;

function OtherFields() {
  const grids: GridCardItem[] = [
    {
      content: (
        <Form.Item<OriginalFieldForm> label="Slider" name="slider">
          <Slider
            marks={{
              [0]: '0°C',
              [20]: '20°C',
              [40]: '40°C',
              [60]: '60°C',
              [80]: '80°C',
              [100]: '100°C',
            }}
          />
        </Form.Item>
      ),
      span: 12,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm> label="Slider range" name="sliderRange">
          <Slider
            marks={{
              [MAX_PRICE]: {
                label: NumberTool.formatMoney(MAX_PRICE),
                style: {
                  marginTop: '1rem',
                  transform: 'translateX(-95%)',
                  whiteSpace: 'nowrap',
                },
              },
              [MIN_PRICE]: {
                label: NumberTool.formatMoney(MIN_PRICE),
                style: {
                  marginTop: '1rem',
                  transform: 'translateX(-25%)',
                  whiteSpace: 'nowrap',
                },
              },
            }}
            max={MAX_PRICE}
            min={MIN_PRICE}
            range
            step={100000}
            tooltip={{
              formatter: total => NumberTool.formatMoney(total),
            }}
          />
        </Form.Item>
      ),
      span: 12,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm> label="Rate" name="rate">
          <Rate allowHalf />
        </Form.Item>
      ),
      span: 12,
    },
    {
      content: (
        <Form.Item<OriginalFieldForm>
          getValueFromEvent={(color: Color) => `#${color.toHex()}`}
          label="Color picker"
          name="colorPicker"
        >
          <ColorPicker format="hex" />
        </Form.Item>
      ),
      span: 12,
    },
  ];

  return <Card.Grid grids={grids} title="Other fields" />;
}

export default OtherFields;
