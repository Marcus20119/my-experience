import type { InputNumberProps } from 'antd';
import { NumberTool } from '@/shared/utils';
import { InputNumber } from 'antd';
import { useEffect, useRef } from 'react';

interface Props extends InputNumberProps {
  editing: boolean;
  onSave: () => Promise<void>;
}

function InputNumberCell({ editing, onSave, ...props }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) {
      ref.current?.focus();
      ref.current?.select();
    }
  }, [editing]);

  return (
    <InputNumber
      className="w-full"
      formatter={NumberTool.formatterInputNumber}
      onBlur={onSave}
      onPressEnter={onSave}
      parser={NumberTool.parserInputNumber}
      ref={ref}
      size="small"
      type="number"
      {...props}
    />
  );
}

export default InputNumberCell;
