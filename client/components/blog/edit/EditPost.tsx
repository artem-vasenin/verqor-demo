import { useState } from 'react';
import { Modal } from 'antd';

const EditPost = () => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handlePostEdit = () => {

  }

  const hideEditModal = () => {

  }

  return (
    <div>
      <Modal
        title="Edit Modal"
        visible={showEditModal}
        onOk={handlePostEdit}
        onCancel={hideEditModal}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default EditPost;