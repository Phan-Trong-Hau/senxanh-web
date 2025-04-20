'use client'

import ListArticle from '../common/Article/List'
import Search from '../common/Custom/Search'
import Highlight from './Highlight'
import ListNews from './ListNews'

type Props = {
  news: any
}

const NewsListPage: React.FC<Props> = ({ news }) => {
  const { highlightNewspapers, newsList } = news

  return (
    <div className='pt-10'>
      <Highlight newsList={highlightNewspapers} />

      <ListNews newsList={newsList} title='Tất cả bài viết' />

      <ListArticle
        title='Các khóa học dành cho bạn'
        articles={[...newsList, ...newsList, ...newsList]}
        path='/courses'
      />
    </div>
  )
}

export default NewsListPage
