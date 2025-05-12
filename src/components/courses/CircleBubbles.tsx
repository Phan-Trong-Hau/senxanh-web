'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Asset } from '@/utils/type'

import Border from '../common/Custom/Border'

type BubbleItem = {
  name: string
  description: string
  image: Asset
}

type Props = {
  items: BubbleItem[]
}

export default function CircleBubbles({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const calculatePosition = (index: number, total: number) => {
    if (isMobile) {
      return {}
    }

    const radiusX = 300
    const radiusY = 180
    const angleStep = (2 * Math.PI) / total
    const angle = -Math.PI / 2 + index * angleStep

    const left = `calc(50% + ${Math.cos(angle) * radiusX - 60}px)`
    const top = `calc(50% + ${Math.sin(angle) * radiusY - 60}px)`

    return { position: 'absolute', left, top }
  }

  return (
    <div
      className={classNames(
        'relative mx-auto mt-12 w-full max-w-4xl',
        isMobile ? 'flex flex-col-reverse gap-6' : 'h-[330px]',
      )}>
      <div
        className={classNames(
          'flex items-center justify-center px-4 text-center',
          !isMobile &&
            'absolute top-1/2 left-1/2 z-10 max-w-[370px] -translate-x-1/2 -translate-y-1/2 p-6 pt-0',
        )}>
        <p className='text-primary !mb-0 text-sm md:text-base'>
          {items[activeIndex].description}
        </p>
      </div>

      <div
        className={classNames(
          isMobile
            ? 'flex flex-wrap justify-center gap-6'
            : 'relative mt-[100px] h-full w-full',
        )}>
        {items.map((item, index) => {
          const positionStyles = !isMobile ? calculatePosition(index, items.length) : {}

          return (
            <div
              key={item.name}
              className={classNames(
                'cursor-pointer transition-all duration-300',
                activeIndex === index ? 'z-20 scale-110' : 'scale-100 hover:scale-105',
                !isMobile && 'absolute',
              )}
              style={positionStyles as any}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}>
              <div className='flex flex-col items-center gap-1'>
                <Border className='h-fit' radius={999}>
                  <Image
                    loader={({ src }) => src}
                    src={item.image?.url}
                    alt={item.name}
                    width={64}
                    height={64}
                    className='h-16 w-16 rounded-full'
                  />
                </Border>
                <p className='text-secondary !mb-0 text-center text-sm font-bold'>
                  {item.name}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
