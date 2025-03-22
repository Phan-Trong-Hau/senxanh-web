'use client';

import Benefits from './Benefits'
import HeroBanner from './HeroBanner'

const Courses = ({ coursesPage }: { coursesPage: any }) => {
  const { heroBanner, benefits } = coursesPage.data || {};

  return (
    <>
      <HeroBanner {...heroBanner} />

      <Benefits {...benefits} />
    </>
  );
};

export default Courses;
