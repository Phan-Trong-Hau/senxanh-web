'use client';

import Layout from '../common/Layout';
import FAQs from './FAQ';
import HeroBanner from './HeroBanner';
import SectionCTA from './SectionCTA';

type Props = {
  homepage: any;
};

const Homepage: React.FC<Props> = ({ homepage }) => {
  const { heroBanner, FAQsSection, CTASection } = homepage?.data || {};

  return (
    <Layout>
      <HeroBanner {...heroBanner} />

      <FAQs {...FAQsSection} />
      <SectionCTA {...CTASection} />
    </Layout>
  );
};

export default Homepage;
