import { Button, Form, Input, Modal } from 'antd';
import { FC, useState } from 'react';

import { IPostCreate } from '../../../types/interfaces';

interface IProps {
  show: boolean;
  onCreate: (post: IPostCreate) => void;
  onChancel: () => void;
}

const CreatePost: FC<IProps> = ({ show, onCreate, onChancel }) => {
  const [formValues, setFormValues] = useState<IPostCreate | null>(null);
  const [form] = Form.useForm();
  const validateMessages = {
    required: '${label} is required!',
  };

  const handlePostCreate = () => {
    if (formValues) {
      formValues && onCreate(formValues);
      form.resetFields();
      onChancel();
    }
  }

  const onValuesChange = (_: any, values: IPostCreate) => {
    setFormValues(values);
  }

  return (
    <div>
      <Modal
        title="Create new post"
        visible={show}
        footer={null}
        onCancel={onChancel}
      >
        <Form
          form={ form }
          layout="vertical"
          name="nest-messages"
          onValuesChange={onValuesChange}
          validateMessages={validateMessages}
          onFinish={handlePostCreate}
        >
          <Form.Item
            name={['title']}
            label="Title"
            rules={[{ required: true, message: 'Please input title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['description']}
            label="Description"
            rules={[{ required: true, message: 'Please input description!' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name={['body']}
            label="Content"
            rules={[{ required: true, message: 'Please input post`s content!' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CreatePost;