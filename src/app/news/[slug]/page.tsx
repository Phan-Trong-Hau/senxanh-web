import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import Newspaper from '@/components/newspaper'
import { ArticleTypeReverse } from '@/utils/constant'
import fetchAPI from '@/utils/fetchApi'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Sen xanh - Tin tức`,
  }
}

const NewsDetail = async ({ params }: PageProps) => {
  const { slug } = await params
  const news = await fetchAPI({
    path: '/newspapers',
    urlParamsObject: {
      filters: {
        slug: {
          $eq: slug,
        },
        type: {
          $eq: ArticleTypeReverse.news,
        },
      },
    },
  })

  if (!news.data?.length) {
    redirect('/404')
  }

  return <Newspaper news={news.data?.[0]} />
}

export default NewsDetail
