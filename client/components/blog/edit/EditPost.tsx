import { FC, useEffect, useRef, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';

import { IFormField, IPost, IPostEdit } from '../../../types/interfaces';

interface IProps {
  show: boolean;
  post: IPost | null;
  onEdit: (post: IPostEdit) => void;
  onChancel: () => void;
}

const EditPost: FC<IProps> = ({ show, post, onEdit, onChancel }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<IPostEdit | null>(null);
  const validateMessages = {
    required: '${label} is required!',
  };

  /** Selected post values */
  const setInitialValues = (): IFormField[] => {
    return post ? [
      { name: 'title', value: post.title },
      { name: 'description', value: post.description },
      { name: 'body', value: post.body }
    ] : [];
  };

  /** Save initial values into ref (not needed re rendering) */
  const initialFieldsValues = useRef(setInitialValues());

  /** Submit */
  const handlePostEdit = () => {
    if (formValues) {
      formValues && post && onEdit({ ...formValues, id: post.id });
      onClose();
    }
  }

  /**
   * Save form values
   * @param _ - field value
   * @param values - fields` values
   */
  const onValuesChange = (_: any, values: IPostEdit) => {
    setFormValues(values);
  }

  /** Close modal and clear form */
  const onClose = () => {
    form.resetFields();
    onChancel();
  }

  // useEffect(() => {
  //   if (post) {
  //     initialFieldsValues.current = setInitialValues();
  //   }
  // }, [post]);

  return post ? (
    <div>
      <Modal
        title="Edit post"
        visible={show}
        footer={null}
        onCancel={onClose}
      >
        <Form
          form={ form }
          layout="vertical"
          name="nest-messages"
          onValuesChange={onValuesChange}
          fields={initialFieldsValues.current}
          validateMessages={validateMessages}
          onFinish={handlePostEdit}
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
  ) : null;
};

export default EditPost;