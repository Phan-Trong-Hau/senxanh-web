'use client'

import { Asset } from '@/utils/type'

import Article from '../common/Article'
import Carousel from '../common/Custom/Carousel'

type Course = {
  title: string
  description: string
  thumbnail: Asset
  slug: string
}

type Props = {
  title: string
  courses: Course[]
}

const Courses = ({ title, courses }: Props) => {
  return (
    <div className='container'>
      <section className='section'>
        <h2 className='text-4xl text-primary !font-bold text-center'>{title}</h2>
        <div className='mt-8'>
          <Carousel slidesToShow={3}>
            {courses.map(course => (
              <Article
                key={course.slug}
                {...course}
                link={`/courses/${course.slug}`}
                className='px-2'
              />
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  )
}

export default Courses
