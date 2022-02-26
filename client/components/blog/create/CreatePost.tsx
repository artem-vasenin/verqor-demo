import { Modal } from 'antd';
import { useState } from 'react';

const CreatePost = () => {
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

export default CreatePost;