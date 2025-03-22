import { Asset } from "@/utils/type";

import CustomCarousel from "../common/CustomCarousel";
import SingleArticle from "../common/SingleArticle";

type Props = {
  testimonials: Testimonial[];
};

type Testimonial = {
  thumbnail: Asset;
  testifier: string;
  content: string;
};

const Testimonial: React.FC<Props> = ({ testimonials }) => {
  return (
    <div className="container text-primary">
      <section className="section">
        <h2 className="!font-bold text-xl md:text-3xl text-center">CHIA SẺ CỦA PHỤ HUYNH</h2>
        <div className="mt-8">
          <CustomCarousel
            slidesToShow={4}
            responsive={[
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
            ]}
            dots={false}
            infinite={false}
          >
            {testimonials.map((testimonial, index) => (
              <SingleArticle
                key={index}
                testifier={testimonial.testifier}
                content={testimonial.content}
                thumbnail={testimonial.thumbnail}
                className="px-2"
              />
            ))}
          </CustomCarousel>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
