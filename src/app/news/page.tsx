import fetchAPI from '@/utils/fetchApi'

const Home = async () => {
  const news = await fetchAPI({
    path: '/news-page',
  })

  return <></>
}

export default Home
