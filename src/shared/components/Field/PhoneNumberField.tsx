import type { FormItemProps, InputProps } from 'antd/lib';
import { sharedRules } from '@/shared/utils';
import { Form, Input } from 'antd';
import { Call } from 'iconsax-react';
import { useTranslation } from 'react-i18next';

interface Props<T> {
  formItemProps: FormItemProps<T>;
  inputProps?: InputProps;
}

function PhoneNumberField<T>({ formItemProps, inputProps }: Props<T>) {
  const { t } = useTranslation();

  return (
    <Form.Item<T>
      label={t('common.label.phoneNumber')}
      {...formItemProps}
      rules={[
        {
          whitespace: true,
        },
        ...sharedRules.phoneNumber,
        ...(formItemProps?.rules || []),
      ]}
    >
      <Input
        placeholder={t('common.placeholder.phoneNumber')}
        suffix={<Call className="text-neutral-700" size="20" />}
        {...inputProps}
      />
    </Form.Item>
  );
}

export default PhoneNumberField;
