'use client'

import ListArticle from '../common/Article/List'
import SectionCTA from '../common/SectionCTA'
import AboutUs from './AboutUs'
import FAQs from './FAQ'
import FavoriteCourses from './FavoriteCourses'
import HeroBanner from './HeroBanner'

type Props = {
  homepage: any
}

const Homepage: React.FC<Props> = ({ homepage }) => {
  const { heroBanner, aboutUs, favoriteCourses, FAQsSection, CTASection, articles } =
    homepage?.data || {}

  return (
    <>
      <HeroBanner {...heroBanner} />

      <AboutUs {...aboutUs} />

      <FavoriteCourses {...favoriteCourses} />

      {articles &&
        articles?.map((article: any, index: number) => (
          <ListArticle
            key={index}
            title={article.title}
            highlightTitle={article.highlightTitle}
            articles={article.newspapers}
            path={'/news'}
            id={article.key}
          />
        ))}

      <FAQs {...FAQsSection} />

      <SectionCTA {...CTASection} />
    </>
  )
}

export default Homepage
