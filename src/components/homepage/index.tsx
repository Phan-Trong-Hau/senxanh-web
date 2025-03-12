'use client';

import HeroBanner from './HeroBanner';

type Props = {
  homepage: any;
};

const Homepage: React.FC<Props> = ({ homepage }) => {
  const { heroBanner } = homepage?.data || {};

  return (
    <>
      <HeroBanner {...heroBanner} />
    </>
  );
};

export default Homepage;
