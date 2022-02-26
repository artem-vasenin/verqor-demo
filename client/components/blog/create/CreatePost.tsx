import { Modal } from 'antd';
import { FC } from 'react';
import { IPostCreate } from '../../../types/interfaces';

interface IProps {
  show: boolean;
  onCreate: (post: IPostCreate) => void;
  onChancel: () => void;
}

const CreatePost: FC<IProps> = ({ show, onCreate, onChancel }) => {
  const handlePostCreate = () => {
    console.log('create modal - handlePostCreate');
  }

  return (
    <div>
      <Modal
        title="Create new post"
        visible={show}
        onOk={handlePostCreate}
        onCancel={onChancel}
      >
        <p>...</p>
        <p>...</p>
        <p>...</p>
      </Modal>
    </div>
  );
};

export default CreatePost;