import { TextTool } from '@/shared/utils';
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
  unit,
  value,
  size = 'default',
  mode = 'default',
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
          ? TextTool.formatRangeMoney(value?.min, value?.max)
          : TextTool.formatMoney(value)}
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
