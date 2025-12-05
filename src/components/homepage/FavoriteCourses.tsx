'use client'

import { Image as Img, Tooltip } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

import { Asset } from '@/utils/type'

import Border from '../common/Custom/Border'
import Carousel from '../common/Custom/Carousel'
import Markdown from '../common/Custom/Markdown'

type Props = {
  title: string
  highlightTitle: string
  courses: {
    title: string
    description: string
    thumbnail: Asset
    slug: string
  }[]
}

const FavoriteCourses = ({ title, highlightTitle, courses }: Props) => {
  return (
    <div className='container'>
      <section className='section'>
        <h2 className='text-center text-2xl !font-bold md:text-4xl'>
          <span className='text-secondary'>{title}</span>
          <br />
          <span className='text-primary mt-1 inline-block'>{highlightTitle}</span>
        </h2>
        <div className='mt-3 md:mt-10'>
          <Carousel>
            {courses.map((course, index) => (
              <div
                className='!flex flex-col-reverse gap-2 !px-5 md:grid-cols-12 md:gap-5 lg:!grid'
                key={index}>
                <div className='col-span-7 flex flex-col gap-2 md:gap-6'>
                  <div className='flex justify-center gap-2'>
                    <Image
                      layout='fixed'
                      width={30}
                      height={35}
                      objectFit='contain'
                      src='https://senxanh-prod-media.s3.ap-southeast-1.amazonaws.com/icon_0142af1f48.png'
                      alt={course.title}
                      className='!hidden h-[35px] object-cover md:!block'
                    />
                    <Tooltip title={course.title}>
                      <h3 className='text-primary mt-4 line-clamp-2 text-center text-lg !font-bold md:text-3xl'>
                        {course.title}
                      </h3>
                    </Tooltip>
                  </div>
                  <div className='relative flex h-full items-center justify-center overflow-hidden p-4 text-center text-[15px] text-white'>
                    <img
                      src='https://senxanh-prod-media.s3.ap-southeast-1.amazonaws.com/bg_favorite_courses_61ee86341a.png'
                      alt={course.title}
                      className='absolute top-0 right-0 h-full w-full'
                    />
                    <Markdown
                      content={course.description}
                      className='relative z-10 max-h-[90px] overflow-y-auto p-2 text-xs md:max-h-[190px] md:px-8 md:py-4 md:text-base'
                    />
                  </div>
                  <Link href={`/courses/${course.slug}`} className='btn-primary mx-auto'>
                    Xem chi tiết
                  </Link>
                </div>
                <div className='col-span-5 flex justify-center lg:justify-center'>
                  <Border className='h-fit'>
                    <Img
                      src={course.thumbnail?.url}
                      alt={course.title}
                      className='!h-[150px] w-full rounded-lg object-cover leading-0 md:!h-[300px]'
                      preview={{
                        maskClassName: 'rounded-lg',
                      }}
                    />
                  </Border>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  )
}

export default FavoriteCourses
