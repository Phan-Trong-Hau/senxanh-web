'use client'

import HeroBanner from '../common/Layout/HeroBanner'
import SectionCTA from '../common/Layout/SectionCTA'
import Testimonial from '../common/Layout/Testimonial'
import FAQs from './FAQ'

type Props = {
  faqs: any
  faqPage: any
}

const Homepage: React.FC<Props> = ({ faqs, faqPage }) => {
  const { heroBanner, FAQsSection, CTASection, testimonials, titleTestimonial } =
    faqPage?.data || {}

  return (
    <>
      {!!heroBanner && <HeroBanner {...heroBanner} />}

      <FAQs {...FAQsSection} allFaqs={faqs?.data} />

      <SectionCTA {...CTASection} />

      <Testimonial testimonials={testimonials} title={titleTestimonial} />
    </>
  )
}

export default Homepage
