'use client'

import { Input } from 'antd'
import { useState } from 'react'

import Article from '@/components/common/Article/News'

type Props = {
  newsList: any[]
}

const Search = ({ newsList }: Props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredNews, setFilteredNews] = useState<any[]>([])

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    const filtered = newsList.filter(news => {
      const title = news.title?.toLowerCase() || ''
      const description = news.description?.toLowerCase() || ''
      return (
        title.includes(value.toLowerCase()) || description.includes(value.toLowerCase())
      )
    })
    setFilteredNews(filtered)
  }

  return (
    <div className='container py-4'>
      <div className='relative flex justify-end'>
        <div className='w-full max-w-lg relative'>
          <Input
            placeholder='Tìm kiếm...'
            className='w-full bg-gray-50 shadow-md border border-gray-200 rounded-full px-4 focus:ring-2 focus:ring-primary focus:outline-none transition-all'
            value={searchTerm}
            onChange={e => handleSearch(e.target.value)}
            allowClear
            size='large'
          />

          {searchTerm && (
            <div className='absolute top-full mt-2 w-full bg-white shadow-lg rounded-xl z-50 max-h-[400px] overflow-y-auto p-4 space-y-4'>
              {filteredNews.length > 0 ? (
                filteredNews.map((news, index) => (
                  <Article
                    key={index}
                    title={news.title}
                    description={news.description}
                    thumbnail={news.thumbnail}
                    link={`/news/${news.slug}`}
                  />
                ))
              ) : (
                <div className='text-gray-500 italic text-center'>
                  Không tìm thấy kết quả phù hợp.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Search
