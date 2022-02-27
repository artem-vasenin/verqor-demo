import { Button, Form, Input, Modal } from 'antd';
import { FC, useState } from 'react';

import { IPostCreate } from '../../../types/interfaces';

interface IProps {
  show: boolean;
  onCreate: (post: IPostCreate) => void;
  onChancel: () => void;
  loading: boolean;
}

const CreatePost: FC<IProps> = ({ show, onCreate, onChancel, loading }) => {
  const [formValues, setFormValues] = useState<IPostCreate | null>(null);
  const [form] = Form.useForm();
  const validateMessages = { required: '${label} is required!' };

  /** Submit form */
  const handlePostCreate = () => {
    if (formValues) {
      formValues && onCreate(formValues);
      onClose();
    }
  }

  /**
   * Set form values
   * @param _ - field value
   * @param values - all fields` values
   */
  const onValuesChange = (_: any, values: IPostCreate) => {
    setFormValues(values);
  }

  /** Close modal and clear form */
  const onClose = () => {
    form.resetFields();
    onChancel();
  }

  return (
    <div>
      <Modal
        title="Create new post"
        visible={show}
        footer={null}
        onCancel={onClose}
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
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CreatePost;