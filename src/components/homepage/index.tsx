'use client';

type Props = {
  homepage: any;
};

const Homepage: React.FC<Props> = ({ homepage }) => {
  const { heroBanner } = homepage?.data || {};

  return (
    <div>
      <h1>{heroBanner?.title}</h1>
    </div>
  );
};

export default Homepage;
