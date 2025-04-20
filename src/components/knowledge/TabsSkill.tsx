'use client'

import { Button } from 'antd'
import classNames from 'classnames'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

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

const TabsSkill = ({ tabs, newspaper }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeTabKey = searchParams.get('tab') || tabs[0]?.key
  const currentTab = tabs.find(tab => tab.key === activeTabKey)

  const [filteredArticles, setFilteredArticles] = useState<Article[]>(
    currentTab?.articles || [],
  )

  useEffect(() => {
    setFilteredArticles(currentTab?.articles || [])
  }, [currentTab])

  const handleSearch = (filtered: Article[]) => {
    setFilteredArticles(filtered)
  }

  const handleTabClick = (key: string) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    params.set('tab', key)
    router.replace(`?${params.toString()}`)
  }

  return (
    <>
      <div className='my-6 flex justify-center gap-4'>
        {tabs.map(tab => (
          <Button
            key={tab.key}
            className={classNames(
              'rounded-full border px-4 py-2 font-semibold',
              activeTabKey === tab.key ? 'btn-primary' : 'btn-border',
            )}
            onClick={() => handleTabClick(tab.key)}>
            {tab.label}
          </Button>
        ))}
      </div>

      <div className='container !mb-4'>
        <Search newsList={currentTab?.articles || []} onSearch={handleSearch} />
      </div>

      <Highlight articles={currentTab?.highlightArticles || []} />

      <div className='container !mb-10 grid grid-cols-1 gap-4 md:grid-cols-5'>
        <div className='md:col-span-3'>
          <ArticleList articles={filteredArticles} />
        </div>
        <div className='w-full md:col-span-2'>
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
    </>
  )
}

export default TabsSkill
