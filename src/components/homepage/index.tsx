'use client'

import AboutUs from './AboutUs'
import FAQs from './FAQ'
import FavoriteCourses from './FavoriteCourses'
import HeroBanner from './HeroBanner'
import SectionCTA from './SectionCTA'

type Props = {
  homepage: any
}

const Homepage: React.FC<Props> = ({ homepage }) => {
  const { heroBanner, aboutUs, favoriteCourses, FAQsSection, CTASection } =
    homepage?.data || {}

  return (
    <>
      <HeroBanner {...heroBanner} />

      <AboutUs {...aboutUs} />

      <FavoriteCourses {...favoriteCourses} />

      <FAQs {...FAQsSection} />

      <SectionCTA {...CTASection} />
    </>
  )
}

export default Homepage
