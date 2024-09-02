import type { SingleStepFormEntity } from '@/app/features/component/form';
import {
  ModalFormWrapper,
  SingleStepForm,
  useFormStore,
} from '@/app/features/component/form';
import { WIDTH } from '@/shared/assets/styles/constants/width';
import { DEFAULT_TIMEOUT } from '@/shared/constants';
import { Form } from 'antd';
import { useState } from 'react';

interface Props {
  onCancel: () => void;
}

function FormModal({ onCancel }: Props) {
  const [singleStepForm] = Form.useForm<SingleStepFormEntity>();
  const { setFormStates, singleStepFormValue } = useFormStore();

  const [loading, setLoading] = useState(false);

  const onFinish = (values: SingleStepFormEntity) => {
    setLoading(true);

    setTimeout(() => {
      setFormStates({
        singleStepFormValue: {
          ...singleStepFormValue,
          ...values,
        },
      });
      onCancel();
      setLoading(false);
    }, DEFAULT_TIMEOUT);
  };

  return (
    <ModalFormWrapper
      okButtonProps={{
        loading,
        onClick: singleStepForm.submit,
      }}
      onCancel={onCancel}
      open={true}
      title="Modal router form"
      width={WIDTH.form}
    >
      <SingleStepForm
        form={singleStepForm}
        onFinish={onFinish}
        showButton={false}
      />
    </ModalFormWrapper>
  );
}

export default FormModal;
