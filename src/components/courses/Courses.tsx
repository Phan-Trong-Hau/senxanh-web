'use client';

import { Asset } from '@/utils/type'

import Article from '../common/Article'
import CustomCarousel from '../common/CustomCarousel'

type Course = {
  title: string;
  description: string;
  thumbnail: Asset;
  slug: string;
};

type Props = {
  title: string;
  courses: Course[];
};

const Courses = ({ title, courses }: Props) => {
  const settings = {
    slidesToShow: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container">
      <section className="section">
        <h2 className="text-2xl md:text-4xl text-primary !font-bold text-center">
          {title}
        </h2>
        <div className="mt-4 md:mt-8">
          <CustomCarousel {...settings}>
            {courses.map((course) => (
              <Article
                key={course.slug}
                {...course}
                link={`/courses/${course.slug}`}
                className="px-2"
              />
            ))}
          </CustomCarousel>
        </div>
      </section>
    </div>
  );
};

export default Courses;
