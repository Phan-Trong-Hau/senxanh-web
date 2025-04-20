'use client'

import { Button, Input } from 'antd'
import { useEffect, useState } from 'react'

import Border from './Border'

type Props = {
  newsList: any[]
  onSearch: (filteredNews: any[]) => void
}

const Search = ({ newsList, onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    const filtered = newsList.filter(news => {
      const title = news.title?.toLowerCase() || ''
      const description = news.description?.toLowerCase() || ''
      return (
        title.includes(searchTerm.toLowerCase()) ||
        description.includes(searchTerm.toLowerCase())
      )
    })
    onSearch(filtered)
  }

  useEffect(() => {
    if (!searchTerm) {
      onSearch(newsList)
    }
  }, [searchTerm, newsList, onSearch])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className='mx-auto w-full max-w-lg'>
      <div className='relative flex justify-end'>
        <div className='relative w-full max-w-lg'>
          <Border className='relative inset-0 rounded-full bg-gray-50'>
            <div className='flex h-full w-full items-center justify-between'>
              <Input
                placeholder='Nhập từ khóa'
                className='box-shadow focus:ring-primary text-primary placeholder-primary w-full rounded-full border-none bg-gray-50 px-4 shadow-md transition-all focus:ring-0 focus:outline-none'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                variant='borderless'
                allowClear
                size='large'
                onKeyDown={handleKeyPress}
              />
              <Button
                className='btn-primary rounded-full text-white'
                size='large'
                onClick={handleSearch}>
                Tìm kiếm
              </Button>
            </div>
          </Border>
        </div>
      </div>
    </div>
  )
}

export default Search
