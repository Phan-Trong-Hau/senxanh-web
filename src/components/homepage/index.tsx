'use client';

import Layout from '../common/Layout';
import HeroBanner from './HeroBanner';

type Props = {
  homepage: any;
};

const Homepage: React.FC<Props> = ({ homepage }) => {
  const { heroBanner } = homepage?.data || {};

  return (
    <Layout>
      <HeroBanner {...heroBanner} />
    </Layout>
  );
};

export default Homepage;
