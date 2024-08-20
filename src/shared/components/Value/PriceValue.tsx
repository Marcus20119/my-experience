import { NumberTool, TextTool } from '@/shared/utils';
import { Typography } from 'antd';
import { cn } from '@/lib/tailwind';

const { Text } = Typography;

interface Props {
  mode?: 'default' | 'error' | 'line-through' | 'primary';
  size?: 'default' | 'large' | 'small';
  unit?: null | string;
  value?: { max: number; min: number } | null | number;
}

function PriceValue({
  mode = 'default',
  size = 'default',
  unit,
  value,
}: Props) {
  return (
    <Typography>
      <Text
        className={cn(
          'font-semibold',
          mode === 'default' ? 'text-neutral-800' : '',
          mode === 'error' ? 'text-system-error' : '',
          mode === 'line-through' ? 'text-neutral-500 line-through' : '',
          mode === 'primary' ? 'text-primary' : '',
          size === 'large' ? 'text-lg' : '',
          size === 'small' ? 'text-xs' : '',
          size === 'default' ? 'text-base' : '',
        )}
      >
        {typeof value === 'object'
          ? NumberTool.formatRangeMoney(value?.min, value?.max)
          : NumberTool.formatMoney(value)}
      </Text>
      {unit ? (
        <Text
          className={cn(
            size === 'large' ? 'text-lg' : '',
            size === 'small' ? 'text-sm' : '',
            size === 'default' ? 'text-base' : '',
          )}
        >
          {' '}
          {TextTool.formatUnit(unit)}
        </Text>
      ) : null}
    </Typography>
  );
}

export default PriceValue;
