'use client'

import { Button } from 'antd'
import classNames from 'classnames'
import { useState } from 'react'

import { CTA } from '@/utils/type'

import ContactModal from './ContactForm/Modal'

type Props = {
  title: string
  cta?: CTA
}

const SectionCTA = ({ title, cta }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    if (cta?.href) {
      window.open(cta.href, '_blank')
      return
    }
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className='container'>
        <section className='section'>
          <div className='mx-auto max-w-[800px] rounded-xl bg-[linear-gradient(90deg,#00a651,#8dc63f)] px-3 py-5 text-center md:rounded-full md:py-10'>
            <div className='mx-auto max-w-[420px] text-lg font-bold text-white'>
              {title ??
                'Cùng con rèn luyện kỹ năng sống ngay hôm nay Khai phá và chinh phục các giới hạn bản thân'}
            </div>
            <Button
              className={classNames(
                'text-secondary !mt-3 bg-white md:!mt-4 [&_span]:font-bold',
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
