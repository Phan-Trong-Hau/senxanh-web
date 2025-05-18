'use client'

import { Collapse, Pagination } from 'antd'
import Image from 'next/image'
import { useState } from 'react'

import Border from '../common/Custom/Border'
import Markdown from '../common/Custom/Markdown'

type Props = {
  title: string
  faqs: {
    id: string
    title: string
    description: string
  }[]
  allFaqs: {
    id: string
    title: string
    description: string
  }[]
}

const FAQs = ({ title, faqs, allFaqs }: Props) => {
  const [activeKey, setActiveKey] = useState<string | string[] | undefined>(undefined)
  const [currentPage, setCurrentPage] = useState(1)
  const faqPerPage = 5

  const updateFaqs = (
    faqs: { id: string; title: string; description: string }[],
    allFaqs: { id: string; title: string; description: string }[],
  ) => {
    const mergedArray = [...faqs]

    allFaqs.forEach(doc => {
      if (!mergedArray.some(existingDoc => existingDoc.id === doc.id)) {
        mergedArray.push(doc)
      }
    })

    return mergedArray
  }

  const indexOfLastFaq = currentPage * faqPerPage
  const indexOfFirstFaq = indexOfLastFaq - faqPerPage
  const currentFaqs = updateFaqs(faqs, allFaqs).slice(indexOfFirstFaq, indexOfLastFaq)

  const handleCollapseChange = (key: string | string[]) => {
    setActiveKey(key)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    setActiveKey(undefined)
  }

  return (
    <div className='text-primary container'>
      <section className='section'>
        <h2 className='mb-8 text-center text-2xl !font-bold md:text-4xl'>{title}</h2>

        <div className='mx-auto max-w-[1024px]'>
          {currentFaqs.map((faq, index) => {
            const key = `${index}`
            const isOpen = Array.isArray(activeKey)
              ? activeKey.includes(key)
              : activeKey === key

            return (
              <Border
                key={key}
                className='mt-4'
                classNameChildren='px-4 py-2 md:px-8 md:py-3'>
                <Collapse
                  activeKey={activeKey}
                  onChange={handleCollapseChange}
                  accordion
                  size='small'
                  expandIcon={() => null}
                  bordered={false}
                  items={[
                    {
                      key: key,
                      label: (
                        <div className='relative cursor-pointer text-lg font-semibold'>
                          <div className='pr-10'>{faq.title}</div>
                          <Image
                            loader={({ src }) => src}
                            src='https://senxanh-prod-media.s3.ap-southeast-1.amazonaws.com/plus_icon_2ff4c8cafc.svg'
                            alt='icon'
                            width={20}
                            height={20}
                            className={`absolute top-1/2 right-0 h-4 w-4 -translate-y-1/2 fill-[#1c74bc] transition-transform duration-300 md:h-5 md:w-5 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                            objectFit='contain'
                          />
                        </div>
                      ),
                      children: (
                        <Markdown
                          content={faq.description}
                          className='text-base [&_p]:mt-2 [&_p]:md:mt-3'
                        />
                      ),
                    },
                  ]}
                  className='!bg-transparent'
                />
              </Border>
            )
          })}
        </div>

        <div className='mt-6 flex justify-center text-center'>
          <Pagination
            current={currentPage}
            pageSize={faqPerPage}
            total={updateFaqs(faqs, allFaqs).length}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>
      </section>
    </div>
  )
}

export default FAQs
