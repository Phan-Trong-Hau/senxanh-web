'use client'

import { Empty, Pagination } from 'antd'
import { useEffect, useState } from 'react'

import Article from '../common/Article'
import Search from '../common/Custom/Search'

type Props = {
  title: string
  newsList: any[]
}

const ListNews = ({ title, newsList }: Props) => {
  const list = newsList || []

  const pageSize = 6
  const [articles, setArticles] = useState<any[]>(list.slice(0, pageSize))
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredList, setFilteredList] = useState<any[]>(list)

  const handleSearch = (filteredNews: any[]) => {
    setFilteredList(filteredNews)
    setCurrentPage(1)
  }

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize
    const newArticles = filteredList.slice(startIndex, endIndex)
    setArticles(newArticles)
  }, [filteredList, currentPage, pageSize])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handlePageSizeChange = (page: number, pageSize: number) => {
    setCurrentPage(page)
  }

  return (
    <div className='container'>
      <div className='section'>
        <div className='text-primary mb-6 flex items-center justify-between text-center text-3xl font-bold'>
          <span className='w-full text-left'>{title}</span>
          <Search newsList={list} onSearch={handleSearch} />
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {articles?.map((news, index) => <Article key={index} {...news} />)}
        </div>

        {filteredList.length > 0 ? (
          <div className='mt-10 flex justify-end'>
            <Pagination
              current={currentPage}
              total={filteredList.length}
              pageSize={pageSize}
              onShowSizeChange={handlePageSizeChange}
              onChange={handlePageChange}
              showSizeChanger={false}
              showTotal={total => `Tổng ${total} tin tức`}
            />
          </div>
        ) : (
          <Empty description='Không tìm thấy kết quả phù hợp.' />
        )}
      </div>
    </div>
  )
}

export default ListNews
