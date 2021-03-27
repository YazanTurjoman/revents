import React from 'react';
import { useSelector } from 'react-redux';
import TestModal from '../../../features/sandbox/TestModal';
import LoginForm from '../../../features/auth/LoginForm';

export default function ModalManager() {
  const modalLookup = {
    TestModal,
    LoginForm,
  };
  const currenModal = useSelector((state) => state.modals);
  let renderedModal;
  if (currenModal) {
    const { modalType, modalProps } = currenModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
}
