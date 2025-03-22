'use client';

import Benefits from './Benefits'
import CoursesSection from './Courses'
import HeroBanner from './HeroBanner'

const Courses = ({ coursesPage }: { coursesPage: any }) => {
  const { heroBanner, benefits, groupedCourses } = coursesPage.data || {};

  return (
    <>
      <HeroBanner {...heroBanner} />

      {groupedCourses.map((course: any) => (
        <CoursesSection
          key={course.title}
          title={course.title}
          courses={course.courses}
        />
      ))}

      <Benefits {...benefits} />
    </>
  );
};

export default Courses;
