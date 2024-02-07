import { Modal, ModalProps } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import "./DynamicModal.scss";

function DynamicModal({
  open,
  onCancel,
  title,
  children,
  footer,
  centered,
  closeIcon,
  className,
}: ModalProps) {
  return (
    <Modal
      title={title}
      open={open}
      onCancel={onCancel}
      closable={true}
      closeIcon={<CloseOutlined /> || closeIcon}
      centered={centered}
      destroyOnClose={true}
      className={`dynamic-modal ${className}`}
      footer={footer}
    >
      {children}
    </Modal>
  );
}

export default DynamicModal;
