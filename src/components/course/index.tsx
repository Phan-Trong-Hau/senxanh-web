import ListArticle from '../common/Article/List'
import SectionCTA from '../common/SectionCTA'
import Banner from './Banner'
import Content from './Content'

type Props = {
  course: any
}

const CourseDetail = ({ course }: Props) => {
  const { contents, CTASection, banner, titleRelatedCourses, relatedCourses, articles } =
    course

  return (
    <>
      <Content contents={contents} />
      {banner && <Banner image={banner} />}
      <SectionCTA {...CTASection} />
      {relatedCourses?.length > 0 && (
        <ListArticle
          title={titleRelatedCourses}
          articles={relatedCourses}
          path='/courses'
        />
      )}
      {articles && articles.newspapers?.length > 0 && (
        <ListArticle title={articles.title} articles={articles.newspapers} path='/news' />
      )}
    </>
  )
}

export default CourseDetail
