'use client'

import { Breadcrumb } from 'antd'

import ListArticle from '../common/Article/List'
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

      <ListArticle
        title='Các bài viết liên quan'
        courses={[news, news, news, news, news]}
        path='/news'
      />

      <ListArticle
        title='Các khóa học dành cho bạn'
        courses={[news, news, news, news, news]}
        path='/courses'
      />
    </>
  )
}

export default Newspaper
