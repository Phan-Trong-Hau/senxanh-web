'use client'

import { Button } from "antd";
import classNames from "classnames";
import { useState } from "react";

import { CTA } from "@/utils/type";

<<<<<<<< HEAD:src/components/common/SectionCTA.tsx
import ContactModal from './ContactForm/Modal'
========
import ContactModal from "../ContactForm/Modal";
>>>>>>>> 20d7998bfd6a9d56162c92994e3979151b00c62c:src/components/common/Layout/SectionCTA.tsx

type Props = {
  title: string
  cta?: CTA
}

const SectionCTA = ({ title, cta }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className='container'>
        <section className='section'>
          <div className='max-w-[800px] mx-auto rounded-xl md:rounded-full bg-[linear-gradient(90deg,#00a651,#8dc63f)] text-center px-3 py-5 md:py-10'>
            <div className='text-white font-bold text-lg max-w-[420px] mx-auto'>
              {title}
            </div>
            <Button
              className={classNames(
                'text-secondary [&_span]:font-bold !mt-3 md:!mt-4 bg-white',
              )}
              onClick={handleOpenModal}>
              {cta?.text || 'Liên hệ ngay'}
            </Button>
          </div>
        </section>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}

export default SectionCTA
