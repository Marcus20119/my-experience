import type { ModalProps } from 'antd/lib';
import { Modal as AntModal } from 'antd';
import ConfirmModal from './ConfirmModal';
import FormWrapperModal from './FormWrapperModal';

function Modal({ children, ...props }: ModalProps) {
  return <AntModal {...props}>{children}</AntModal>;
}

Modal.FormWrapper = FormWrapperModal;
Modal.Confirm = ConfirmModal;

export { Modal };
