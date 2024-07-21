import type { ModalProps } from 'antd/lib';
import { COLOR } from '@/shared/assets/styles/constants';
import { Button, Flex, Modal, Typography } from 'antd';
import { CloseCircle, TickCircle } from 'iconsax-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

interface Props
  extends Pick<ModalProps, 'cancelText' | 'okText' | 'open' | 'width'> {
  description: string;
  mode: 'error' | 'success';
  onCancel: () => void;
  onOk: () => void;
  title: string;
}

function ConfirmModal({
  description,
  mode,
  onCancel,
  onOk,
  title,
  open,
  cancelText,
  okText,
  width,
}: Props) {
  const { t } = useTranslation();

  const icon = useMemo(() => {
    if (mode === 'error') {
      return (
        <Flex
          align="center"
          className="h-12 w-12 rounded-xl bg-system-errorSoft"
          justify="center"
        >
          <CloseCircle color={COLOR.system.error} size="24" variant="Bold" />
        </Flex>
      );
    }

    return (
      <Flex
        align="center"
        className="h-12 w-12 rounded-xl bg-system-successSoft"
        justify="center"
      >
        <TickCircle color={COLOR.system.success} size="24" variant="Bold" />
      </Flex>
    );
  }, [mode]);

  return (
    <Modal
      styles={{
        content: {
          padding: 0,
        },
      }}
      closable={false}
      footer={null}
      maskClosable={false}
      open={open}
      width={width}
      centered
    >
      <Flex align="center" className="p-4" gap="0.5rem" vertical>
        {icon}

        <Flex align="center" vertical>
          <Text className="text-lg font-semibold">{title}</Text>
          <Text className="text-sm text-neutral-600">{description}</Text>
        </Flex>
      </Flex>

      <Flex className="px-5 py-3.5" gap="0.75rem" justify="space-between">
        <Button className="flex-grow" onClick={onCancel}>
          {cancelText ?? t('common.button.cancel')}
        </Button>
        <Button className="flex-grow" onClick={onOk} type="primary">
          {okText ?? t('common.button.confirm')}
        </Button>
      </Flex>
    </Modal>
  );
}

export default ConfirmModal;
