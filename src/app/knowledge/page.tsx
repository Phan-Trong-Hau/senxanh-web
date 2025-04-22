import KnowledgePage from '@/components/knowledge'
import { ArticleTypeReverse } from '@/utils/constant'
import fetchAPI from '@/utils/fetchApi'

interface PageProps {
  searchParams: Promise<{ tab: string }>
}

const Knowledge = async ({ searchParams }: PageProps) => {
  const { tab } = await searchParams
  const knowledge = await fetchAPI({
    path: '/knowledge-page',
  })

  const newspaper = await fetchAPI({
    path: '/newspapers',
    urlParamsObject: {
      filters: {
        type: {
          $eq: ArticleTypeReverse[tab as keyof typeof ArticleTypeReverse],
        },
      },
    },
  })

  return <KnowledgePage knowledge={knowledge} newspaper={newspaper.data} />
}

export default Knowledge
