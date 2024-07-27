import type { SelectProps } from 'antd';
import { COLOR } from '@/shared/assets/styles/constants';
import { Icon } from '@iconify/react/dist/iconify.cjs';
import { Select } from 'antd';
import { ArrowDown2, ArrowUp2, CloseCircle } from 'iconsax-react';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/tailwind';
import { StyledSelect } from './styles';

interface Props extends SelectProps {
  prefixIcon?: React.ReactNode;
}

function SelectUI({
  allowClear,
  className,
  loading,
  onDropdownVisibleChange,
  prefixIcon,
  ...props
}: Props) {
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
      <Select
        allowClear={
          allowClear
            ? {
                clearIcon: (
                  <CloseCircle
                    color={COLOR.neutral['400']}
                    size="20"
                    variant="Bold"
                  />
                ),
              }
            : undefined
        }
        className={cn('w-full', className)}
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

export default SelectUI;
