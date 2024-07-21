import type { FormItemProps, InputProps } from 'antd/lib';
import { Form, Input } from 'antd';
import { User } from 'iconsax-react';
import { useTranslation } from 'react-i18next';

interface Props<T> {
  formItemProps: FormItemProps<T>;
  inputProps?: InputProps;
}

function FullNameField<T>({ formItemProps, inputProps }: Props<T>) {
  const { t } = useTranslation();

  return (
    <Form.Item<T> label={t('common.label.fullName')} {...formItemProps}>
      <Input
        placeholder={t('common.placeholder.fullName')}
        suffix={<User className="text-neutral-700" size={20} />}
        {...inputProps}
      />
    </Form.Item>
  );
}

export default FullNameField;
