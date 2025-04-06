'use client'

import ListArticle from '../common/Article/List'
import Benefits from './Benefits'
import HeroBanner from './HeroBanner'

const Courses = ({ coursesPage }: { coursesPage: any }) => {
  const { heroBanner, benefits, groupedCourses } = coursesPage.data || {}

  return (
    <>
      <HeroBanner {...heroBanner} />

      {groupedCourses.map((course: any) => (
        <ListArticle
          key={course.title}
          title={course.title}
          articles={course.courses}
          path={'/courses'}
        />
      ))}

      <Benefits {...benefits} />
    </>
  )
}

export default Courses
