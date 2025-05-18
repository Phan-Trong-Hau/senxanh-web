'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Asset } from '@/utils/type'

import Border from '../common/Custom/Border'
import Markdown from '../common/Custom/Markdown'

type Widget = {
  label: string
  thumbnail: Asset
  title: string
  description: string
  key: string
}

type Props = {
  title: string
  widgets: Widget[]
}

const AboutUs = ({ title, widgets }: Props) => {
  const [widgetActive, setWidgetActive] = useState(widgets[3])

  return (
    <div className='container'>
      <div className='section'>
        <h2 className='btn-primary mx-auto !cursor-default text-lg !font-semibold md:!px-6 md:!py-2 md:text-2xl'>
          {title || 'Về chúng tôi'}
        </h2>

        <div className='mt-8 flex flex-col gap-5 md:gap-10 lg:mt-14 lg:flex-row'>
          <div className='grid basis-1/2 grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-2'>
            {widgets.map((widget, index) => (
              <Link href={`/courses#${widget.key}`} key={index}>
                <Border
                  key={index}
                  className='h-[172px] cursor-pointer'
                  classNameChildren='overflow-hidden relative'
                  onMouseEnter={() => setWidgetActive(widget)}
                  onMouseLeave={() => setWidgetActive(widgets[3])}>
                  <Image
                    loader={({ src }) => src}
                    src={widget.thumbnail?.url}
                    alt='image'
                    layout='fixed'
                    objectFit='contain'
                    width={widget.thumbnail.width}
                    height={widget.thumbnail.height}
                    className='h-[168px] w-full rounded-lg'
                  />
                  <div className='text-primary absolute bottom-0 w-full bg-gradient-to-b from-transparent to-white pt-5 pb-1 text-center text-base !leading-tight font-bold lg:px-6'>
                    {widget.label}
                  </div>
                </Border>
              </Link>
            ))}
          </div>
          <div className='relative flex items-center justify-center text-center text-white lg:basis-1/2'>
            <img
              src='https://senxanh-prod-media.s3.ap-southeast-1.amazonaws.com/background_widget_9a0433c462.png'
              alt={widgetActive.title}
              className='absolute top-0 right-0 h-full w-full'
            />
            <div className='relative z-10 mt-4 translate-x-4 px-12 pt-16 pb-10 md:translate-x-7 md:px-20 lg:px-12 lg:py-0'>
              <h3 className='text-base leading-tight font-bold uppercase md:text-xl'>
                {widgetActive.title}
              </h3>
              <Markdown
                content={widgetActive.description}
                className='text-xs leading-tight md:text-base [&_p]:mt-2 [&_p]:md:mt-3'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
