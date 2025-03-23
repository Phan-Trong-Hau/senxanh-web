'use client'

import Image from 'next/image'

import { Asset } from '@/utils/type'

import Border from '../common/Custom/Border'

type Bubble = {
  caption: string
  image: Asset
}

type Props = {
  title: string
  highlightTitle: string
  bubbles: Bubble[]
}

const Benefits: React.FC<Props> = ({ title, highlightTitle, bubbles }) => {
  return (
    <div className='container overflow-hidden'>
      <section className='section !mt-0'>
        <h2 className='text-4xl !font-bold text-center'>
          <span className='text-primary'>{title}</span>
          <br />
          <span className='uppercase inline-block md:mt-1 lg:mt-2 text-secondary'>
            {highlightTitle}
          </span>
        </h2>
        <div className='flex mt-10 flex-col gap-4'>
          {bubbles.map((bubble, index) => (
            <div
              key={bubble.caption}
              className='flex gap-4 items-center'
              style={{
                transform: `translateX(calc(50% +  ${index * 80}px - 350px))`,
              }}>
              <Border className='h-fit w-fit shrink-0' radius={999}>
                <Image
                  loader={({ src }) => src}
                  src={bubble.image.url}
                  alt={bubble.caption}
                  width={64}
                  height={64}
                  className='rounded-full w-16 h-16'
                />
              </Border>
              <p className='text-center font-semibold text-lg text-secondary !mb-0'>
                {bubble.caption}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Benefits
