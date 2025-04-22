import NewsListPage from '@/components/news'
import { ArticleTypeReverse } from '@/utils/constant'
import fetchAPI from '@/utils/fetchApi'

const News = async () => {
  const news = await fetchAPI({
    path: '/news-page',
  })

  const newsList = await fetchAPI({
    path: '/newspapers',
    urlParamsObject: {
      filters: {
        type: {
          $eq: ArticleTypeReverse.news,
        },
      },
    },
  })

  return (
    <NewsListPage
      news={{
        ...news.data,
        newsList: newsList.data,
      }}
    />
  )
}

export default News
