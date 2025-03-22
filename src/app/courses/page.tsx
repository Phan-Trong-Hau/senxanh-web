import CoursesPage from '@/components/courses'
import fetchAPI from '@/utils/fetchApi'

const Courses = async () => {
  const coursesPage = await fetchAPI({
    path: '/courses-page',
  });
  return <CoursesPage coursesPage={coursesPage} />;
};

export default Courses;
