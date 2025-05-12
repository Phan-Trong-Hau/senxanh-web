'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { useEffect, useState } from 'react'

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
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false)

  useEffect(() => {
    const checkLargeScreen = () => {
      setIsLargeScreen(window.innerWidth > 1024)
    }

    checkLargeScreen()
    window.addEventListener('resize', checkLargeScreen)

    return () => {
      window.removeEventListener('resize', checkLargeScreen)
    }
  }, [])

  return (
    <div className='container overflow-hidden'>
      <section className='section !mt-0'>
        <h2 className='text-center text-2xl !font-bold md:text-4xl'>
          <span className='text-primary'>{title}</span>
          <br />
          <span className='text-secondary inline-block uppercase md:mt-1 lg:mt-2'>
            {highlightTitle}
          </span>
        </h2>
        <div className={classNames('mt-10 flex flex-col gap-4')}>
          {bubbles.map((bubble, index) => (
            <div
              key={bubble.caption}
              className='flex items-center gap-4'
              style={{
                transform: isLargeScreen
                  ? `translateX(calc(50% +  ${index * 70}px - 350px))`
                  : 'translateX(0)',
              }}>
              <Border className='h-fit w-fit shrink-0' radius={999}>
                <Image
                  loader={({ src }) => src}
                  src={bubble.image?.url}
                  alt={bubble.caption}
                  width={64}
                  height={64}
                  className='h-12 w-12 rounded-full md:h-16 md:w-16'
                />
              </Border>
              <p className='text-secondary !mb-0 text-base font-semibold md:text-lg'>
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
