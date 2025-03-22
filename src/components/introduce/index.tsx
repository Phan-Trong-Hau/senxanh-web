"use client";

import Banner from "./Banner";
import HeroBanner from "./HeroBanner";
import Overview from "./Overview";
import Partner from "./Partner";

type Props = {
  introduce: any;
};

const IntroducePage: React.FC<Props> = ({ introduce }) => {
  const { heroBanner, overview, banner, partnerSection } = introduce?.data || {};
  return (
    <>
      <HeroBanner {...heroBanner} />
      <Overview {...overview} />
      <Banner {...banner} />
      <Partner {...partnerSection} />
    </>
  );
};

export default IntroducePage;
