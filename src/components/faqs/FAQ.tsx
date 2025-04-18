'use client'

import { Collapse, Pagination } from "antd";
import Image from "next/image";
import { useState } from "react";

import Border from "../common/Custom/Border";

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
    <div className='container text-primary'>
      <section className='section'>
        <h2 className='text-center !font-bold text-2xl md:text-4xl mb-8'>{title}</h2>

        <div className='max-w-[1024px] mx-auto'>
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
                  className='!bg-transparent'>
                  <Collapse.Panel
                    key={key}
                    header={
                      <div className='font-semibold text-lg cursor-pointer relative'>
                        <div className='pr-10'>{faq.title}</div>
                        <Image
                          loader={({ src }) => src}
                          src='https://senxanh-prod-media.s3.ap-southeast-1.amazonaws.com/plus_icon_2ff4c8cafc.svg'
                          alt='icon'
                          width={20}
                          height={20}
                          className={`w-4 h-4 md:w-5 md:h-5 fill-[#1c74bc] absolute top-1/2 -translate-y-1/2 right-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                          objectFit='contain'
                        />
                      </div>
                    }
                    showArrow={false}>
                    <p className='text-base mt-2 pr-4 md:pr-10'>{faq.description}</p>
                  </Collapse.Panel>
                </Collapse>
              </Border>
            )
          })}
        </div>

        <div className='mt-6 text-center flex justify-center'>
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
