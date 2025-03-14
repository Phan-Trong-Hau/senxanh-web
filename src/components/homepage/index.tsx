'use client';

import Layout from '../common/Layout';
import HeroBanner from './HeroBanner';
import SectionCTA from './SectionCTA';

type Props = {
  homepage: any;
};

const Homepage: React.FC<Props> = ({ homepage }) => {
  const { heroBanner, CTASection } = homepage?.data || {};

  return (
    <Layout>
      <HeroBanner {...heroBanner} />

      <SectionCTA {...CTASection} />
    </Layout>
  );
};

export default Homepage;
