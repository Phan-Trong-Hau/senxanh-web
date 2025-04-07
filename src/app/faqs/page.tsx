import FAQs from "@/components/faqs";
import fetchAPI from "@/utils/fetchApi";

const Faqs = async () => {
  const faqPage = await fetchAPI({
    path: '/fa-qs-page',
  })

  const faqs = await fetchAPI({
    path: '/faqs',
  })

  console.log(faqPage, 'faqPage')
  console.log(faqs, 'faqs')

  return <FAQs faqPage={faqPage} faqs={faqs} />
}

export default Faqs
