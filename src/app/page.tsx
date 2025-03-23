import Homepage from '@/components/homepage'
import fetchAPI from '@/utils/fetchApi'

const Home = async () => {
  const homepage = await fetchAPI({
    path: '/homepage',
  })

  return <Homepage homepage={homepage} />
}

export default Home
