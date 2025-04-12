'use client'

import HeroBanner from "../common/Layout/HeroBanner";
import Testimonial from "../common/Layout/Testimonial";
import Banner from "./Banner";
import Overview from "./Overview";
import Partner from "./Partner";

type Props = {
  introduce: any
}

const IntroducePage: React.FC<Props> = ({ introduce }) => {
  const { heroBanner, overview, banner, partnerSection, titleTestimonial, testimonials } =
    introduce?.data || {}
  return (
    <>
      <HeroBanner {...heroBanner} />

      <Overview {...overview} />

      <Banner {...banner} />

      <Partner {...partnerSection} />

      <Testimonial testimonials={testimonials} title={titleTestimonial} />
    </>
  )
}

export default IntroducePage
