import { FC, useState } from 'react';
import { Modal } from 'antd';

import { IPost, IPostEdit } from '../../../types/interfaces';

interface IProps {
  show: boolean;
  post: IPost | null;
  onEdit: (post: IPostEdit) => void;
  onChancel: () => void;
}

const EditPost: FC<IProps> = ({ show, post, onEdit, onChancel }) => {
  const handlePostEdit = () => {
    console.log('modal edit - handlePostEdit');
  }

  return post ? (
    <div>
      <Modal
        title="Edit Modal"
        visible={show}
        onOk={handlePostEdit}
        onCancel={onChancel}
      >
        <p>{post.title}</p>
        <p>{post.description}</p>
        <p>{post.body}</p>
      </Modal>
    </div>
  ) : null;
};

export default EditPost;