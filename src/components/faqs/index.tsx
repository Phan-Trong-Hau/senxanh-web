'use client'

import HeroBanner from "../common/Layout/HeroBanner";
import SectionCTA from "../common/Layout/SectionCTA";
import Testimonial from "../common/Layout/Testimonial";
import FAQs from "./FAQ";

type Props = {
  faqs: any
  faqPage: any
}

const Homepage: React.FC<Props> = ({ faqs, faqPage }) => {
  const { heroBanner, FAQsSection, CTASection, testimonials, titleTestimonial } =
    faqPage?.data || {}

  return (
    <>
      <HeroBanner {...heroBanner} />

      <FAQs {...FAQsSection} allFaqs={faqs?.data} />

      <Testimonial testimonials={testimonials} title={titleTestimonial} />

      <SectionCTA {...CTASection} />
    </>
  )
}

export default Homepage
