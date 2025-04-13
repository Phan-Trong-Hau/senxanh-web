import { redirect } from 'next/navigation'

import Newspaper from '@/components/newspaper'
import fetchAPI from '@/utils/fetchApi'

const Home = async ({ params }: { params: { slug: string } }) => {
  const news = await fetchAPI({
    path: '/newspapers',
    urlParamsObject: {
      filters: {
        slug: {
          $eq: params.slug,
        },
      },
    },
  })

  if (!news.data?.length) {
    redirect('/404')
  }

  return <Newspaper news={news.data?.[0]} />
}

export default Home
