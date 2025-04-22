import NewsListPage from '@/components/news'
import { ArticleTypeReverse } from '@/utils/constant'
import fetchAPI from '@/utils/fetchApi'

const Customer = async () => {
  const news = await fetchAPI({
    path: '/customer-page',
  })

  const newsList = await fetchAPI({
    path: '/newspapers',
    urlParamsObject: {
      filters: {
        type: {
          $eq: ArticleTypeReverse.customer,
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

export default Customer
