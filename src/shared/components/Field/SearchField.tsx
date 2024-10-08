import type { InputProps, InputRef } from 'antd/lib';
import type { LegacyRef } from 'react';
import { Input } from 'antd';
import { SearchNormal1 } from 'iconsax-react';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

function SearchField({ ...props }: InputProps, ref: LegacyRef<InputRef>) {
  const { t } = useTranslation();

  return (
    <Input
      placeholder={t('common.placeholder.search')}
      prefix={<SearchNormal1 size="20" />}
      ref={ref}
      {...props}
    />
  );
}

export default forwardRef(SearchField);
