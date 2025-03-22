'use client';

import HeroBanner from './HeroBanner'

const Courses = ({ coursesPage }: { coursesPage: any }) => {
  const { heroBanner } = coursesPage.data || {};

  return (
    <>
      <HeroBanner {...heroBanner} />
    </>
  );
};

export default Courses;
