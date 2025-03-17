'use client';

import Layout from '../common/Layout';
import AboutUs from './AboutUs';
import FAQs from './FAQ';
import FavoriteCourses from './FavoriteCourses';
import HeroBanner from './HeroBanner';
import SectionCTA from './SectionCTA';

type Props = {
  homepage: any;
  footer: any;
};

const Homepage: React.FC<Props> = ({ homepage, footer }) => {
  const { heroBanner, aboutUs, favoriteCourses, FAQsSection, CTASection } =
    homepage?.data || {};

  return (
    <Layout footer={footer}>
      <HeroBanner {...heroBanner} />

      <AboutUs {...aboutUs} />

      <FavoriteCourses {...favoriteCourses} />

      <FAQs {...FAQsSection} />

      <SectionCTA {...CTASection} />
    </Layout>
  );
};

export default Homepage;
