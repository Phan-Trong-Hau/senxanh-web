import FAQs from '@/components/faqs'
import fetchAPI from '@/utils/fetchApi'

const Faqs = async () => {
  const faqs = await fetchAPI({
    path: '/fa-qs-page',
  })

  return <FAQs faqs={faqs} />
}

export default Faqs
