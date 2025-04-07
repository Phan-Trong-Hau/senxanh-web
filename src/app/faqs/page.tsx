import FAQs from "@/components/faqs";
import fetchAPI from "@/utils/fetchApi";

const Faqs = async () => {
  const faqPage = await fetchAPI({
    path: '/fa-qs-page',
  })

  const faqs = await fetchAPI({
    path: '/faqs',
  })

  return <FAQs faqPage={faqPage} faqs={faqs} />
}

export default Faqs
