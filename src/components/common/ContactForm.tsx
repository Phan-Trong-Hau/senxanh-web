'use client';

import { Form, FormInstance, Input, message } from 'antd'
import classNames from 'classnames'
import { useState } from 'react'

import useHandleError from '@/hooks/useHandleError'
import fetchAPI from '@/utils/fetchApi'

type ContactFormProps = {
  form?: FormInstance;
  onFinish?: (values: any) => void;
  submitButtonText?: string;
  submitButtonClass?: string;
  fullWidthSubmit?: boolean;
};

const ContactForm = ({
  form,
  onFinish,
  submitButtonText = 'Gửi yêu cầu',
  submitButtonClass = '',
  fullWidthSubmit = false,
}: ContactFormProps) => {
  const [loading, setLoading] = useState(false);
  const handleError = useHandleError();

  const handleSubmit = async (values: any) => {
    setLoading(true);

    try {
      const response = await fetchAPI({
        path: '/datasets',
        options: {
          method: 'POST',
          body: JSON.stringify({ data: values }),
        },
      });

      message.success(
        'Gửi thông tin thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.'
      );

      if (form) {
        form.resetFields();
      }

      if (onFinish) {
        onFinish(values);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form form={form} className="w-full" onFinish={handleSubmit}>
      <Form.Item
        name="name"
        className="!mb-3"
        rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
      >
        <Input type="text" placeholder="Họ và tên" />
      </Form.Item>
      <Form.Item
        name="email"
        className="!mb-3"
        rules={[
          { required: true, message: 'Vui lòng nhập email' },
          { type: 'email', message: 'Email không hợp lệ' },
        ]}
      >
        <Input type="email" placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="phone"
        className="!mb-3"
        rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
      >
        <Input type="phone" placeholder="Số điện thoại" />
      </Form.Item>
      <Form.Item
        name="content"
        className="!mb-3"
        rules={[
          { required: true, message: 'Vui lòng nhập nội dung cần tư vấn' },
        ]}
      >
        <Input.TextArea placeholder="Nội dung cần tư vấn" rows={4} />
      </Form.Item>
      <Form.Item className="mb-0">
        <button
          type="submit"
          className={classNames(
            'btn btn-primary',
            fullWidthSubmit && 'w-full',
            submitButtonClass
          )}
          disabled={loading}
        >
          {loading ? 'Đang gửi...' : submitButtonText}
        </button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
