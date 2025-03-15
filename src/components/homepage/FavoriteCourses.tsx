import { Image as Img } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

import { Asset, CTA } from '@/utils/type'

import Border from '../common/Border'
import CustomCarousel from '../common/CustomCarousel'
import Markdown from '../common/Markdown'

type Props = {
  title: string;
  highlightTitle: string;
  courses: {
    title: string;
    description: string;
    heroShot: Asset;
    heroShotInMobile: Asset;
    cta: CTA;
  }[];
};

const FavoriteCourses = ({ title, highlightTitle, courses }: Props) => {
  return (
    <div className="container">
      <section className="section">
        <h2 className="font-bold text-3xl text-center">
          <span className="text-secondary">{title}</span>
          <br />
          <span className="text-primary inline-block mt-1">
            {highlightTitle}
          </span>
        </h2>
        <div className="mt-10">
          <CustomCarousel>
            {courses.map((course, index) => (
              <div className="!grid grid-cols-2" key={index}>
                <div className="flex flex-col gap-6">
                  <div className="flex justify-center">
                    <Image
                      layout="fixed"
                      width={30}
                      height={35}
                      objectFit="contain"
                      src="https://senxanh-prod-media.s3.ap-southeast-1.amazonaws.com/icon_0142af1f48.png"
                      alt={course.title}
                      className="object-cover h-[35px]"
                    />
                    <h3 className="font-bold mt-4 text-3xl text-primary text-center">
                      {course.title}
                    </h3>
                  </div>
                  <div className="text-[15px] text-center bg-favorite-course">
                    <Markdown content={course.description} className="p-5" />
                  </div>
                  {course.cta?.href && (
                    <Link
                      href={course.cta.href}
                      className="btn-primary mx-auto"
                    >
                      {course.cta.text}
                    </Link>
                  )}
                </div>
                <div className="flex justify-center">
                  <Border className="h-fit" classNameChildren="leading-0">
                    <Img
                      src={course.heroShot.url}
                      alt={course.title}
                      className="object-cover max-h-[400px] rounded-lg leading-0"
                      preview={{
                        maskClassName: 'rounded-lg',
                      }}
                    />
                  </Border>
                </div>
              </div>
            ))}
          </CustomCarousel>
        </div>
      </section>
    </div>
  );
};

export default FavoriteCourses;
