'use client'

import { Breadcrumb } from 'antd'

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
  {
    title: 'Tin tức',
    href: '/news',
  },
]

const Newspaper: React.FC<Props> = ({ news }) => {
  return (
    <>
      <div className='container'>
        <Breadcrumb
          className='!mt-6 md:!mt-12'
          items={[
            ...items,
            {
              title: news?.title,
            },
          ]}
        />
      </div>

      <Content {...news} />

      <SectionCTA title='Cùng con rèn luyện kỹ năng sống ngay hôm nay Khai phá và chinh phục các giới hạn bản thân' />

      <ListArticle
        title='Các bài viết liên quan'
        articles={[news, news, news, news, news]}
        path='/news'
      />

      <ListArticle
        title='Các khóa học dành cho bạn'
        articles={[news, news, news, news, news]}
        path='/courses'
      />
    </>
  )
}

export default Newspaper
