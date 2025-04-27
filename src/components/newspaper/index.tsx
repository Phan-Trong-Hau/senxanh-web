'use client'

import { Breadcrumb } from 'antd'

import { getURLPageWithType } from '@/utils/handle'

import ListArticle from '../common/Article/List'
import SectionCTA from '../common/SectionCTA'
import Content from './Content'

type Props = {
  news: any
}

const items = [
  {
    title: 'Trang chủ',
    href: '/',
  },
]

const Newspaper: React.FC<Props> = ({ news }) => {
  const { relatedArticles, titleCourses, courses, ...article } = news

  return (
    <>
      <div className='container'>
        <Breadcrumb
          className='!mt-6 md:!mt-12'
          items={[
            ...items,
            {
              title: news?.type,
              href: getURLPageWithType(news?.type),
            },
            {
              title: news?.title,
            },
          ]}
        />
      </div>

      <Content {...article} />

      <SectionCTA title='Cùng con rèn luyện kỹ năng sống ngay hôm nay Khai phá và chinh phục các giới hạn bản thân' />

      {relatedArticles?.newspapers?.length > 0 && (
        <ListArticle
          title={relatedArticles.title}
          articles={relatedArticles.newspapers}
          path='/news'
        />
      )}

      {courses?.length > 0 && (
        <ListArticle title={titleCourses} articles={courses} path='/courses' />
      )}
    </>
  )
}

export default Newspaper
