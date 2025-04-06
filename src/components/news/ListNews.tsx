'use client'

import { Pagination } from 'antd'
import { useState } from 'react'

import Article from '../common/Article'

type Props = {
  newsList: any[]
}

const ListNews = ({ newsList }: Props) => {
  const list = newsList
    ?.concat(newsList)
    .concat(newsList)
    .concat(newsList)
    .concat(newsList)
    .concat(newsList)
    .concat(newsList)
    .concat(newsList)
    .concat(newsList)
    .concat(newsList)
    .concat(newsList)
    .concat(newsList)
    .concat(newsList)
    .concat(newsList)
    .concat(newsList)

  const pageSize = 6
  const totalArticles = list.length
  const [articles, setArticles] = useState<any[]>(list.slice(0, pageSize))

  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    const newArticles = list.slice(startIndex, endIndex)
    setArticles(newArticles)
  }
  const handlePageSizeChange = (page: number, pageSize: number) => {
    setCurrentPage(page)
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    const newArticles = list.slice(startIndex, endIndex)
    setArticles(newArticles)
  }

  return (
    <div className='container'>
      <div className='section'>
        <div className='text-3xl text-center font-bold text-primary mb-6'>
          Tất cả tin tức
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {articles?.map((news, index) => <Article {...news} />)}
        </div>

        <div className='mt-10 flex justify-end'>
          <Pagination
            current={currentPage}
            total={totalArticles}
            pageSize={pageSize}
            onShowSizeChange={handlePageSizeChange}
            onChange={handlePageChange}
            showSizeChanger={false}
            showTotal={total => `Tổng ${total} tin tức`}
          />
        </div>
      </div>
    </div>
  )
}
export default ListNews
