import KnowledgePage from '@/components/knowledge'
import fetchAPI from '@/utils/fetchApi'

const Home = async () => {
  const knowledge = await fetchAPI({
    path: '/knowledge-page',
  })

  const newspaper = await fetchAPI({
    path: '/newspapers',
  })

  return <KnowledgePage knowledge={knowledge} newspaper={newspaper} />
}

export default Home
