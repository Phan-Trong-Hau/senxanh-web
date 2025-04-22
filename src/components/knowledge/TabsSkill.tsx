'use client'

import { Empty, Spin } from 'antd'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'

import { Asset } from '@/utils/type'

import Search from '../common/Custom/Search'
import ArticleList from './ArticleList'
import CourseList from './CourseList'
import Highlight from './Highlight'

type Course = {
  id: number
  documentId: string
  title: string
  description: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  thumbnail: Asset
}

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

type Tab = {
  id: number
  label: string
  key: string
  titleCourses: string
  titleArticles: string
  courses: Course[]
  articles: Article[]
  highlightArticles: Article[]
}

type Props = {
  tabs: Tab[]
  newspaper: any
}

const TabsSkillContent = ({ tabs, newspaper }: Props) => {
  const searchParams = useSearchParams()
  const activeTabKey = searchParams.get('tab') || tabs[0]?.key
  const currentTab = tabs.find(tab => tab.key === activeTabKey) ?? tabs[0]

  const [filteredArticles, setFilteredArticles] = useState<Article[]>(newspaper || [])

  const handleSearch = (filtered: Article[]) => {
    setFilteredArticles(filtered)
  }

  return (
    <div className='section'>
      <Highlight articles={currentTab?.highlightArticles || []} />
      <Search newsList={newspaper} onSearch={handleSearch} />

      <div className='mt-16 !mb-10 flex flex-col gap-12 md:flex-row'>
        {filteredArticles.length === 0 ? (
          <Empty className='w-full' description='Không tìm thấy kết quả nào' />
        ) : (
          <ArticleList articles={filteredArticles} />
        )}

        <div className='flex flex-col gap-6'>
          <CourseList
            courses={currentTab?.articles || []}
            titleCourses={currentTab?.titleArticles}
          />
          <CourseList
            courses={currentTab?.courses || []}
            titleCourses={currentTab?.titleCourses}
          />
        </div>
      </div>
    </div>
  )
}

const TabsSkill = (props: Props) => {
  return (
    <div className='container !mb-4'>
      <Suspense fallback={<Spin size='large' />}>
        <TabsSkillContent {...props} />
      </Suspense>
    </div>
  )
}

export default TabsSkill
