import { Asset } from "@/utils/type";

import SingleArticle from "../Article/Single";
import CustomCarousel from "../Custom/Carousel";

type Props = {
  title: string
  testimonials: Testimonial[]
}

type Testimonial = {
  thumbnail: Asset
  testifier: string
  content: string
}

const Testimonial: React.FC<Props> = ({ title, testimonials }) => {
  const settings = {
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className='container text-primary'>
      <section className='section'>
        <h2 className='!font-bold text-2xl md:text-4xl text-center'>{title}</h2>
        <div className='mt-8'>
          <CustomCarousel {...settings}>
            {testimonials.map((testimonial, index) => (
              <SingleArticle
                key={index}
                testifier={testimonial.testifier}
                content={testimonial.content}
                thumbnail={testimonial.thumbnail}
                className='px-2'
              />
            ))}
          </CustomCarousel>
        </div>
      </section>
    </div>
  )
}

export default Testimonial
