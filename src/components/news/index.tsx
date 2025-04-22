'use client'

import ListArticle from '../common/Article/List'
import Highlight from './Highlight'
import ListNews from './ListNews'

type Props = {
  news: any
}

const NewsListPage: React.FC<Props> = ({ news }) => {
  const { highlightNewspapers, highlightCustomers, newsList, title, groupedCourses } =
    news

  const highlightNews =
    highlightNewspapers?.length > 0 ? highlightNewspapers : highlightCustomers

  return (
    <>
      <Highlight newsList={highlightNews} />

      <ListNews newsList={newsList} title={title} />

      <ListArticle
        title={groupedCourses.title}
        articles={groupedCourses.courses}
        path='/courses'
      />
    </>
  )
}

export default NewsListPage
