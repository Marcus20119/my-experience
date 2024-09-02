import type {
  MultipleFormFirstStepEntity,
  MultipleFormSecondStepEntity,
  MultipleFormThirdStepEntity,
  SingleStepFormEntity,
} from '@/app/features/component/form';
import {
  DrawerFormWrapper,
  ModalFormWrapper,
  MultipleStepsForm,
  SingleStepForm,
  useFormStore,
} from '@/app/features/component/form';
import { FormLayout } from '@/app/layout';
import { WIDTH } from '@/shared/assets/styles/constants/width';
import { DEFAULT_TIMEOUT } from '@/shared/constants';
import { useDrawerRouter, useModalRouter, useToggle } from '@/shared/hooks';
import { Button, Flex, Form, Progress, Typography } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const { Text, Title } = Typography;

function FormSpecialPage() {
  const { t } = useTranslation();
  const {
    onClose: onCloseModalSingle,
    onOpen: onOpenModalSingle,
    open: openModalSingle,
  } = useToggle();
  const {
    onClose: onCloseModalMultiple,
    onOpen: onOpenModalMultiple,
    open: openModalMultiple,
  } = useToggle();
  const {
    onClose: onCloseModalProgress,
    onOpen: onOpenModalProgress,
    open: openModalProgress,
  } = useToggle();
  const {
    onClose: onCloseDrawerSingle,
    onOpen: onOpenDrawerSingle,
    open: openDrawerSingle,
  } = useToggle();
  const {
    onClose: onCloseDrawerMultiple,
    onOpen: onOpenDrawerMultiple,
    open: openDrawerMultiple,
  } = useToggle();
  const {
    onClose: onCloseDrawerProgress,
    onOpen: onOpenDrawerProgress,
    open: openDrawerProgress,
  } = useToggle();
  const { onOpenModal } = useModalRouter();
  const { onOpenDrawer } = useDrawerRouter();

  const [singleStepForm] = Form.useForm<SingleStepFormEntity>();
  const [multipleFirstStepForm] = Form.useForm<MultipleFormFirstStepEntity>();
  const [multipleSecondStepForm] = Form.useForm<MultipleFormSecondStepEntity>();
  const [multipleThirdStepForm] = Form.useForm<MultipleFormThirdStepEntity>();
  const {
    currentStep = 1,
    multipleStepFormValue,
    setFormStates,
    singleStepFormValue,
  } = useFormStore();

  const [loading, setLoading] = useState(false);

  const specialFormItems = [
    {
      children: [
        {
          onClick: onOpenModalSingle,
          title: 'Single step',
        },
        {
          onClick: onOpenModalMultiple,
          title: 'Multiple steps',
        },
        {
          onClick: onOpenModalProgress,
          title: 'Progress',
        },
      ],
      description: 'Form inside a regular modal',
      title: 'Modal form',
    },
    {
      children: [
        {
          onClick: onOpenDrawerSingle,
          title: 'Single step',
        },
        {
          onClick: onOpenDrawerMultiple,
          title: 'Multiple steps',
        },
        {
          onClick: onOpenDrawerProgress,
          title: 'Progress',
        },
      ],
      description: 'Form inside a regular drawer',
      title: 'Drawer form',
    },
    {
      children: [
        {
          onClick: () => onOpenModal({ path: 'user/edit' }),
          title: 'Modal',
        },
        {
          onClick: () => onOpenDrawer({ path: 'user/edit' }),
          title: 'Drawer',
        },
      ],
      description: 'Form that keep opening even when reloading the page',
      title: 'Router form',
    },
    {
      children: [
        {
          onClick: () => {
            console.log('Confirm info form');
          },
          title: 'Info',
        },
        {
          onClick: () => {
            console.log('Confirm warning form');
          },
          title: 'Warning',
        },
        {
          onClick: () => {
            console.log('Confirm error form');
          },
          title: 'Error',
        },
      ],
      title: 'Confirm form',
    },
  ];

  const onCancel = () => {
    onCloseModalSingle();
    onCloseModalMultiple();
    onCloseModalProgress();
    onCloseDrawerSingle();
    onCloseDrawerMultiple();
    onCloseDrawerProgress();
    singleStepForm.resetFields();
    multipleFirstStepForm.resetFields();
    multipleSecondStepForm.resetFields();
    setFormStates({
      currentStep: 1,
      multipleStepFormValue: undefined,
      singleStepFormValue: undefined,
    });
  };

  // ----- Single step form -----
  const onFinishSingleStep = (values: SingleStepFormEntity) => {
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

  // ----- Multiple steps form -----
  const onNext = () => {
    setFormStates({
      currentStep: currentStep + 1,
    });
  };

  const onPrevious = () => {
    setFormStates({
      currentStep: currentStep - 1,
    });
  };

  const onFinishFirstStep = (values: MultipleFormFirstStepEntity) => {
    setLoading(true);

    setTimeout(() => {
      setFormStates({
        multipleStepFormValue: {
          ...multipleStepFormValue,
          firstStep: values,
        },
      });
      setLoading(false);
      onNext();
    }, DEFAULT_TIMEOUT);
  };

  const onFinishSecondStep = (values: MultipleFormSecondStepEntity) => {
    setLoading(true);

    setTimeout(() => {
      setFormStates({
        multipleStepFormValue: {
          ...multipleStepFormValue,
          secondStep: values,
        },
      });
      setLoading(false);
      onNext();
    }, DEFAULT_TIMEOUT);
  };

  const onFinishThirdStep = (values: MultipleFormThirdStepEntity) => {
    setLoading(true);

    setTimeout(() => {
      setFormStates({
        multipleStepFormValue: {
          ...multipleStepFormValue,
          thirdStep: values,
        },
      });
      setLoading(false);
      onCancel();
    }, DEFAULT_TIMEOUT);
  };

  const onClickNext = () => {
    if (currentStep === 1) {
      multipleFirstStepForm.submit();
      return;
    }

    if (currentStep === 2) {
      multipleSecondStepForm.submit();
      return;
    }

    if (currentStep === 3) {
      multipleThirdStepForm.submit();
      return;
    }
  };

  // ----- Progress form -----
  const progress = Form.useWatch(values => {
    const { email, fullName, phoneNumber } = values;

    const valuesArray = [email, fullName, phoneNumber];

    const percent =
      (valuesArray.filter(Boolean).length / valuesArray.length) * 100;

    return Math.round(percent);
  }, singleStepForm);

  return (
    <>
      <FormLayout
        route={{
          path: '/component/form/special',
        }}
      >
        <Flex align="center" className="w-full" gap="2rem" vertical>
          {specialFormItems.map((item, index) => (
            <Flex align="center" gap="1rem" key={index} vertical>
              <Flex align="center" vertical>
                <Title className="text-2xl font-bold tracking-wider" level={2}>
                  {item.title}
                </Title>
                <Text>{item.description}</Text>
              </Flex>
              <Flex gap="0.5rem">
                {item.children.map((child, childIndex) => (
                  <Button
                    key={childIndex}
                    onClick={child.onClick}
                    size="middle"
                    type="primary"
                  >
                    {child.title}
                  </Button>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </FormLayout>

      {/* Single step form */}
      <ModalFormWrapper
        okButtonProps={{
          loading,
          onClick: singleStepForm.submit,
        }}
        onCancel={onCancel}
        open={openModalSingle}
        title="Modal single step form"
        width={WIDTH.form}
      >
        <SingleStepForm
          form={singleStepForm}
          onFinish={onFinishSingleStep}
          showButton={false}
        />
      </ModalFormWrapper>

      <DrawerFormWrapper
        footer={
          <Flex align="center" gap="0.5rem" justify="end">
            <Button onClick={onCancel} size="middle">
              {t('common.button.cancel')}
            </Button>
            <Button
              loading={loading}
              onClick={singleStepForm.submit}
              size="middle"
              type="primary"
            >
              {t('common.button.save')}
            </Button>
          </Flex>
        }
        onClose={onCancel}
        open={openDrawerSingle}
        title="Drawer single step form"
        width={WIDTH.form}
      >
        <SingleStepForm
          form={singleStepForm}
          onFinish={onFinishSingleStep}
          showButton={false}
        />
      </DrawerFormWrapper>

      {/* Multiple steps form */}
      <ModalFormWrapper
        classNames={{
          body: 'p-0',
        }}
        footer={
          <Flex align="center" justify="space-between">
            <Button
              className={currentStep === 1 ? 'invisible' : 'visible'}
              onClick={onPrevious}
              size="middle"
            >
              {t('common.button.back')}
            </Button>
            <Flex align="center" gap="0.5rem">
              <Button onClick={onCancel} size="middle">
                {t('common.button.cancel')}
              </Button>
              <Button
                loading={loading}
                onClick={onClickNext}
                size="middle"
                type="primary"
              >
                {t('common.button.next')}
              </Button>
            </Flex>
          </Flex>
        }
        onCancel={onCancel}
        open={openModalMultiple}
        title="Modal multiple steps form"
        width={WIDTH.stepForm}
      >
        <MultipleStepsForm
          direction="vertical"
          firstStepForm={multipleFirstStepForm}
          onFinishFirstStep={onFinishFirstStep}
          onFinishSecondStep={onFinishSecondStep}
          onFinishThirdStep={onFinishThirdStep}
          secondStepForm={multipleSecondStepForm}
          showButton={false}
          thirdStepForm={multipleThirdStepForm}
        />
      </ModalFormWrapper>

      <DrawerFormWrapper
        classNames={{
          body: 'pt-10',
        }}
        footer={
          <Flex align="center" justify="space-between">
            <Button
              className={currentStep === 1 ? 'invisible' : 'visible'}
              onClick={onPrevious}
              size="middle"
            >
              {t('common.button.back')}
            </Button>
            <Flex align="center" gap="0.5rem">
              <Button onClick={onCancel} size="middle">
                {t('common.button.cancel')}
              </Button>
              <Button
                loading={loading}
                onClick={onClickNext}
                size="middle"
                type="primary"
              >
                {t('common.button.next')}
              </Button>
            </Flex>
          </Flex>
        }
        onClose={onCancel}
        open={openDrawerMultiple}
        title="Drawer multiple steps form"
        width={WIDTH.form}
      >
        <MultipleStepsForm
          firstStepForm={multipleFirstStepForm}
          onFinishFirstStep={onFinishFirstStep}
          onFinishSecondStep={onFinishSecondStep}
          onFinishThirdStep={onFinishThirdStep}
          secondStepForm={multipleSecondStepForm}
          showButton={false}
          thirdStepForm={multipleThirdStepForm}
        />
      </DrawerFormWrapper>

      {/* Progress form */}
      <ModalFormWrapper
        extraHeader={<Progress percent={progress} />}
        okButtonProps={{
          loading,
          onClick: singleStepForm.submit,
        }}
        onCancel={onCancel}
        open={openModalProgress}
        title="Modal progress form"
        width={WIDTH.form}
      >
        <SingleStepForm
          form={singleStepForm}
          onFinish={onFinishSingleStep}
          showButton={false}
        />
      </ModalFormWrapper>

      <DrawerFormWrapper
        extraHeader={<Progress percent={progress} />}
        footer={
          <Flex align="center" gap="0.5rem" justify="end">
            <Button onClick={onCancel} size="middle">
              {t('common.button.cancel')}
            </Button>
            <Button
              loading={loading}
              onClick={singleStepForm.submit}
              size="middle"
              type="primary"
            >
              {t('common.button.save')}
            </Button>
          </Flex>
        }
        onClose={onCancel}
        open={openDrawerProgress}
        title="Drawer progress form"
        width={WIDTH.form}
      >
        <SingleStepForm
          form={singleStepForm}
          onFinish={onFinishSingleStep}
          showButton={false}
        />
      </DrawerFormWrapper>
    </>
  );
}

export default FormSpecialPage;
