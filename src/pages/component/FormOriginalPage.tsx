import type { SingleStepFormEntity } from '@/app/features/component/form';
import type { ItemType } from 'antd/es/menu/interface';
import { FormStepType, SingleStepForm } from '@/app/features/component/form';
import { useFormStore } from '@/app/features/component/form/store';
import { FormLayout } from '@/app/layout';
import { Flex, Form, Typography } from 'antd';
import { Convertshape2 } from 'iconsax-react';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

function FormOriginalPage() {
  const { t } = useTranslation();
  const [singleStepForm] = Form.useForm<SingleStepFormEntity>();
  const { originalFormType, setFormStates } = useFormStore();

  const tabItems: ItemType[] = [
    {
      icon: <Convertshape2 size={16} />,
      key: 'change-form-type',
      label:
        originalFormType === FormStepType.Single
          ? t('layout.title.multipleStepForm')
          : t('layout.title.singleStepForm'),
      onClick: () => {
        if (originalFormType === FormStepType.Single) {
          setFormStates({
            originalFormType: FormStepType.Multiple,
          });
          return;
        }

        if (originalFormType === FormStepType.Multiple) {
          setFormStates({
            originalFormType: FormStepType.Single,
          });
          return;
        }
      },
    },
  ];

  return (
    <FormLayout
      route={{
        path: '/component/form/original',
      }}
      tabItems={tabItems}
    >
      <Flex justify="center">
        <div className="max-w-form">
          {originalFormType === FormStepType.Single ? (
            <Flex align="center" className="w-full" gap="2rem" vertical>
              <Title className="text-xl" level={2}>
                {t('layout.title.singleStepForm')}
              </Title>
              <SingleStepForm form={singleStepForm} />
            </Flex>
          ) : (
            <Flex align="center" className="w-full" gap="2rem" vertical>
              <Title className="text-xl" level={2}>
                {t('layout.title.multipleStepForm')}
              </Title>
            </Flex>
          )}
        </div>
      </Flex>
    </FormLayout>
  );
}

export default FormOriginalPage;
