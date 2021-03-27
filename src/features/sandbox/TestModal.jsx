import React from 'react';
import ModalWrapper from '../../app/common/modals/ModalWrapper';

const TestModal = ({ data }) => {
  return (
    <ModalWrapper>
      <div>The data is:{data}</div>
    </ModalWrapper>
  );
};

export default TestModal;
