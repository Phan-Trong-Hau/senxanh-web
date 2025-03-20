'use client';

import { Button } from 'antd'
import { useState } from 'react'

import ContactModal from './ContactModal'

type ContactButtonProps = {
  className?: string;
  text?: string;
};

const ContactButton = ({
  className = '',
  text = 'Liên hệ ngay',
}: ContactButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpenModal} className={className}>
        {text}
      </Button>
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default ContactButton;
