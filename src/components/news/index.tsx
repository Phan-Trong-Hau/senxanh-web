'use client'

import ListArticle from '../common/Article/List'
import Highlight from './Highlight'
import ListNews from './ListNews'
import Search from './Search'

type Props = {
  news: any
}

const NewsListPage: React.FC<Props> = ({ news }) => {
  const { highlightNewspapers, newsList } = news

  return (
    <div className='pt-10'>
      <Search newsList={newsList} />

      <Highlight newsList={highlightNewspapers} />

      <ListNews newsList={newsList} />

      <ListArticle
        title='Các khóa học dành cho bạn'
        articles={[...newsList, ...newsList, ...newsList]}
        path='/courses'
      />
    </div>
  )
}

export default NewsListPage
