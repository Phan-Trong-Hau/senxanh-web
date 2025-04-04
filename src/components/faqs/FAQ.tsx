'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import Border from '../common/Custom/Border'

type Props = {
  title: string
  faqs: {
    title: string
    description: string
  }[]
}

const FAQs = ({ title, faqs }: Props) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const faqPerPage = 10

  const indexOfLastFaq = currentPage * faqPerPage
  const indexOfFirstFaq = indexOfLastFaq - faqPerPage
  const currentFaqs = faqs.slice(indexOfFirstFaq, indexOfLastFaq)

  const handleToggleDescription = (index: number) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index))
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className='container text-primary'>
      <section className='section'>
        <h2 className='text-center !font-bold text-2xl md:text-4xl mb-8'>{title}</h2>
        {currentFaqs.map((faq, index) => (
          <Border
            key={index}
            className='mt-4 max-w-[1024px] mx-auto'
            classNameChildren='px-10 py-4'>
            <div
              className='flex items-center cursor-pointer relative'
              onClick={() => handleToggleDescription(index)}>
              <div className='font-semibold text-lg cursor-pointer mr-4'>{faq.title}</div>

              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className='absolute right-0 text-primary cursor-pointer font-bold text-2xl'>
                <Image
                  loader={({ src }) => src}
                  src='https://senxanh-prod-media.s3.ap-southeast-1.amazonaws.com/plus_icon_2ff4c8cafc.svg'
                  alt='icon'
                  width={20}
                  height={20}
                  className='w-5 h-5 fill-[#1c74bc]'
                  objectFit='contain'
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: expandedIndex === index ? 'auto' : 0,
                opacity: expandedIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className={`overflow-hidden ${expandedIndex === index ? 'mt-2' : ''}`}>
              {expandedIndex === index && (
                <p className='text-sm mt-2'>{faq.description}</p>
              )}
            </motion.div>
          </Border>
        ))}

        <div className='mt-6 text-center'>
          {Array.from({ length: Math.ceil(faqs.length / faqPerPage) }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 mx-2 rounded-lg ${currentPage === i + 1 ? 'bg-primary !text-white' : 'bg-gray-200'}`}
              onClick={() => paginate(i + 1)}>
              {i + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}

export default FAQs
