'use client'

import { Image as Img } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

import { Asset, CTA } from '@/utils/type'

import Border from '../common/Custom/Border'
import Carousel from '../common/Custom/Carousel'
import Markdown from '../common/Custom/Markdown'

type Props = {
  title: string
  highlightTitle: string
  courses: {
    title: string
    description: string
    heroShot: Asset
    heroShotInMobile: Asset
    cta: CTA
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
                className='!flex flex-col-reverse gap-5 !px-5 md:grid-cols-12 lg:!grid'
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
                      className='h-[35px] object-cover'
                    />
                    <h3 className='text-primary mt-4 text-center text-lg font-bold md:text-3xl'>
                      {course.title}
                    </h3>
                  </div>
                  <div className='relative flex h-full items-center justify-center overflow-hidden p-4 text-center text-[15px] text-white'>
                    <img
                      src='https://senxanh-prod-media.s3.ap-southeast-1.amazonaws.com/bg_favorite_courses_61ee86341a.png'
                      alt={course.title}
                      className='absolute top-0 right-0 h-full w-full'
                    />
                    <Markdown
                      content={course.description}
                      className='relative z-10 p-3 pb-6 text-xs md:p-5 md:pb-10 md:text-base'
                    />
                  </div>
                  {course.cta?.href && (
                    <Link href={course.cta.href} className='btn-primary mx-auto'>
                      {course.cta.text}
                    </Link>
                  )}
                </div>
                <div className='col-span-5 flex justify-center lg:justify-center'>
                  <Border className='h-fit'>
                    <Img
                      src={course.heroShot.url}
                      alt={course.title}
                      className='max-h-[400px] rounded-lg object-cover leading-0'
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
