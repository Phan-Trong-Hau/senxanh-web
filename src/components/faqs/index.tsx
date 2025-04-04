'use client'

import FAQs from './FAQ'
import HeroBanner from './HeroBanner'
import SectionCTA from './SectionCTA'
import Testimonial from './Testimonial'

type Props = {
  faqs: any
}

const Homepage: React.FC<Props> = ({ faqs }) => {
  const { heroBanner, FAQsSection, sectionCTA, testimonials, titleTestimonial } =
    faqs?.data || {}

  return (
    <>
      <HeroBanner {...heroBanner} />

      <FAQs {...FAQsSection} />

      <Testimonial testimonials={testimonials} title={titleTestimonial} />

      <SectionCTA {...sectionCTA} />
    </>
  )
}

export default Homepage
