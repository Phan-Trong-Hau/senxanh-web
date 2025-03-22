"use client";

import Banner from "./Banner";
import HeroBanner from "./HeroBanner";
import Overview from "./Overview";
import Partner from "./Partner";
import Testimonial from "./Testimonial";

type Props = {
  introduce: any;
};

const IntroducePage: React.FC<Props> = ({ introduce }) => {
  const { heroBanner, overview, banner, partnerSection, testimonials } = introduce?.data || {};
  console.log(introduce);
  return (
    <>
      <HeroBanner {...heroBanner} />
      <Overview {...overview} />
      <Banner {...banner} />
      <Partner {...partnerSection} />
      <Testimonial testimonials={testimonials} />
    </>
  );
};

export default IntroducePage;
