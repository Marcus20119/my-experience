import type { SelectProps } from 'antd/lib';
import { COLOR } from '@/shared/assets/styles/constants';
import { Icon } from '@iconify/react';
import { Select as AntSelect, Tooltip } from 'antd';
import { ArrowDown2, ArrowUp2, CloseCircle } from 'iconsax-react';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/tailwind';
import { StyledSelect } from './styles';
import TreeSelect from './TreeSelect';

export interface MySelectProps extends SelectProps {
  prefixIcon?: React.ReactNode;
}

function Select<T>({
  allowClear,
  className,
  loading,
  onDropdownVisibleChange,
  prefixIcon,
  ...props
}: MySelectProps) {
  const [isOpened, setIsOpened] = useState(false);

  const suffixIcon = useMemo(() => {
    if (loading) {
      return (
        <Icon
          color={COLOR.neutral['500']}
          height="20"
          icon="line-md:loading-loop"
          width="20"
        />
      );
    }

    if (isOpened) {
      return <ArrowUp2 color={COLOR.neutral['700']} size="20" />;
    }

    return <ArrowDown2 color={COLOR.neutral['700']} size="20" />;
  }, [isOpened, loading]);

  return (
    <StyledSelect hasPrefixIcon={!!prefixIcon}>
      {prefixIcon ? <div className="prefix-icon">{prefixIcon}</div> : null}
      <AntSelect<T>
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
        className={cn('w-full', className)}
        filterOption={false}
        maxTagCount="responsive"
        maxTagPlaceholder={omittedValues => (
          <Tooltip
            overlayStyle={{ pointerEvents: 'none' }}
            title={omittedValues.map(({ label }) => label).join(', ')}
          >
            <span>{`+ ${omittedValues.length} ...`}</span>
          </Tooltip>
        )}
        onDropdownVisibleChange={open => {
          setIsOpened(open);
          onDropdownVisibleChange?.(open);
        }}
        suffixIcon={suffixIcon}
        {...props}
      />
    </StyledSelect>
  );
}

Select.Tree = TreeSelect;

export { Select };
