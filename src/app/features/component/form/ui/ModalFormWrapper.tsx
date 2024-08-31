import type { ModalProps } from 'antd/lib';
import { COLOR } from '@/shared/assets/styles/constants';
import { Flex, Modal, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const { Text, Title } = Typography;

interface Props extends ModalProps {
  subTitle?: string;
}

function ModalFormWrapper({
  cancelButtonProps,
  children,
  okButtonProps,
  styles,
  subTitle,
  title,
  ...props
}: Props) {
  const { t } = useTranslation();

  return (
    <Modal
      cancelText={t('common.button.cancel')}
      centered
      destroyOnClose
      maskClosable={false}
      okText={t('common.button.save')}
      {...props}
      cancelButtonProps={{
        size: 'middle',
        ...cancelButtonProps,
      }}
      okButtonProps={{
        size: 'middle',
        ...okButtonProps,
      }}
      styles={{
        ...styles,
        body: {
          maxHeight: 'calc(100vh - 200px)',
          overflowY: 'auto',
          padding: '1rem 0.75rem',
          scrollbarGutter: 'stable both-edges',
          ...styles?.body,
        },
        content: {
          padding: 0,
          ...styles?.content,
        },
        footer: {
          borderTopColor: COLOR.neutral['300'],
          borderTopStyle: 'solid',
          borderTopWidth: 1,
          marginTop: 0,
          padding: '1rem 1.25rem',
          ...styles?.footer,
        },
        header: {
          borderBottomColor: COLOR.neutral['300'],
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
          marginBottom: 0,
          padding: subTitle ? '0.75rem 1.25rem' : '1rem 1.25rem',
          ...styles?.header,
        },
      }}
      title={
        <Flex gap="0.25rem" vertical>
          <Title className="" level={2}>
            {title}
          </Title>
          {subTitle ? (
            <Text className="text-sm text-gray-500">{subTitle}</Text>
          ) : null}
        </Flex>
      }
    >
      {children}
    </Modal>
  );
}

export default ModalFormWrapper;
