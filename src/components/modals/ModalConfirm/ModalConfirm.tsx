import React from 'react';
import { Modal } from 'antd';

interface Props {
  text: string;
  isModalVisible: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

function ModalConfirm({text, isModalVisible, onConfirm, onClose}: Props) {
  return (
    <Modal
      visible={isModalVisible}
      onOk={onConfirm}
      onCancel={onClose}
    >
      <p>{text}</p>
    </Modal>
  )
}

export default ModalConfirm;