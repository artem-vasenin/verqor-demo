import { Button, Form, Input } from 'antd';
import { FC, useState } from 'react';

import { IComment } from '../../../types/interfaces';

interface IProps {
  onSubmit: (comment: IComment) => void;
  postId: number;
  loading: boolean;
}

const AddComment: FC<IProps> = ({onSubmit, postId, loading }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<IComment | null>(null);
  const validateMessages = { required: '${label} is required!' };

  /**
   * Save form values
   * @param _ - field value
   * @param values - fields` values
   */
  const onValuesChange = (_: any, values: IComment) => {
    setFormValues(values);
  }

  /** Submit */
  const handleSubmit = () => {
    if (formValues) {
      formValues && onSubmit({ ...formValues, postId });
      onClose();
    }
  }

  /** Close modal and clear form */
  const onClose = () => {
    form.resetFields();
  }

  return (
    <Form
      form={ form }
      layout="vertical"
      name="nest-messages"
      onValuesChange={onValuesChange}
      validateMessages={validateMessages}
      onFinish={handleSubmit}
    >
      <Form.Item
        name={['name']}
        label="Name"
        rules={[{ required: true, message: 'Please input title!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['body']}
        label="Comment"
        rules={[{ required: true, message: 'Please input your comment!' }]}
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
  );
};

export default AddComment;