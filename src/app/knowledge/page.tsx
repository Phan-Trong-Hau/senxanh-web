import KnowledgePage from '@/components/knowledge'
import { ArticleTypeReverse } from '@/utils/constant'
import fetchAPI from '@/utils/fetchApi'

export interface KnowledgePageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

const Knowledge = async ({ searchParams }: KnowledgePageProps) => {
  const tabParam = searchParams.tab as string | undefined
  const knowledge = await fetchAPI({
    path: '/knowledge-page',
  })

  const newspaper = await fetchAPI({
    path: '/newspapers',
    urlParamsObject: {
      filters: {
        type: {
          $eq: ArticleTypeReverse[tabParam as keyof typeof ArticleTypeReverse],
        },
      },
    },
  })

  return <KnowledgePage knowledge={knowledge} newspaper={newspaper.data} />
}

export default Knowledge
