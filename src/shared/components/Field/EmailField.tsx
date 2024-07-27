import type { FormItemProps, InputProps } from 'antd/lib';
import { sharedRules } from '@/shared/utils';
import { Icon } from '@iconify/react/dist/iconify.cjs';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

interface Props<T> {
  formItemProps: FormItemProps<T>;
  inputProps?: InputProps;
}

function EmailField<T>({ formItemProps, inputProps }: Props<T>) {
  const { t } = useTranslation();

  return (
    <Form.Item<T>
      label={t('common.label.email')}
      {...formItemProps}
      rules={[
        {
          whitespace: true,
        },
        ...sharedRules.email,
        ...(formItemProps?.rules || []),
      ]}
    >
      <Input
        placeholder={t('common.placeholder.email')}
        suffix={
          <Icon
            className="text-neutral-700"
            height="20"
            icon="solar:letter-linear"
            width="20"
          />
        }
        {...inputProps}
      />
    </Form.Item>
  );
}

export default EmailField;
