import IntroducePage from '@/components/introduce'
import fetchAPI from '@/utils/fetchApi'

const Introduce = async () => {
  const introduce = await fetchAPI({
    path: '/introduce',
  })

  return <IntroducePage introduce={introduce} />
}

export default Introduce
