'use client'

import { Pagination } from 'antd'
import { useState } from 'react'

import { Asset } from '@/utils/type'

import KnowledgeArticle from '../common/Article/Knowledge'

type Article = {
  id: number
  documentId: string
  title: string
  description: string
  url: string | null
  slug: string
  content: string
  type: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  thumbnail: Asset
  logo?: Asset | null
}

type Props = {
  articles: Article[]
}

const ArticleList = ({ articles }: Props) => {
  articles = articles
    .concat(articles)
    .concat(articles)
    .concat(articles)
    .concat(articles)
    .concat(articles)
    .concat(articles)
    .concat(articles)
    .concat(articles)
    .concat(articles)
    .concat(articles)
    .concat(articles)
    .concat(articles)
    .concat(articles)
    .concat(articles)
    .concat(articles)
    .concat(articles)

  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * pageSize
  const currentArticles = articles.slice(startIndex, startIndex + pageSize)

  return (
    <div className='flex w-full flex-col gap-4'>
      {currentArticles.map((article, idx) => (
        <KnowledgeArticle key={idx} {...article} />
      ))}
      <div className='mt-4 flex justify-center'>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={articles.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  )
}

export default ArticleList
