'use client'

import { Form, Modal } from 'antd'

import ContactForm from './'

type ContactModalProps = {
  isOpen: boolean
  onClose: () => void
  title?: string
}

const ContactModal = ({
  isOpen,
  onClose,
  title = 'LIÊN HỆ TƯ VẤN',
}: ContactModalProps) => {
  const [form] = Form.useForm()

  const handleSubmit = (values: any) => {
    onClose()
  }

  const handleCancel = () => {
    form.resetFields()
    onClose()
  }

  return (
    <Modal
      title={title}
      open={isOpen}
      onCancel={handleCancel}
      footer={null}
      width={500}
      centered
      maskClosable={true}>
      <ContactForm form={form} onFinish={handleSubmit} fullWidthSubmit={true} />
    </Modal>
  )
}

export default ContactModal
