import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateSpotForm from './LoginForm';

function CreateSpotFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>CREATE</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSpotForm />
        </Modal>
      )}
    </>
  );
}

export default CreateSpotFormModal;
