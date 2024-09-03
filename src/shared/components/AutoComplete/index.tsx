import type { AutoCompleteProps } from 'antd/lib';
import { COLOR } from '@/shared/assets/styles/constants';
import { AutoComplete as AntAutoComplete } from 'antd';
import { CloseCircle } from 'iconsax-react';

function AutoComplete({ allowClear, ...props }: AutoCompleteProps) {
  return (
    <AntAutoComplete
      allowClear={
        allowClear
          ? {
              clearIcon: (
                <CloseCircle
                  color={COLOR.neutral['400']}
                  size="18"
                  variant="Bold"
                />
              ),
            }
          : undefined
      }
      {...props}
    />
  );
}

export { AutoComplete };
