'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { Asset } from '@/utils/type'

type Props = {
  background: Asset
  logo: Asset
  title: string
  highlightTitle: string
  description: string
  clouds: Asset[]
  icons: Asset[]
  heroShot: Asset
}

const positionIcons = [
  {
    initial: { x: '200px', y: '-100px', opacity: 0 },
    className: 'w-[30px] md:w-[90px] top-1/2 right-6/25 transform -translate-y-1/2',
  },
  {
    initial: { x: '-200px', y: '-200px', opacity: 0 },
    className: 'w-[28px] md:w-[80px] top-1/3 left-1/3 transform -translate-y-1/2',
  },
  {
    initial: { x: '200px', y: '400px', opacity: 0 },
    className: 'w-[32px] md:w-[120px] bottom-1/3 right-1/12 transform translate-y-1/2',
  },
  {
    initial: { x: '-200px', y: '200px', opacity: 0 },
    className:
      'w-[42px] md:w-[100px] bottom-1/3 left-1/7 md:left-1/5 transform translate-y-1/3',
  },
]

export default function HeroBanner({
  background,
  logo,
  title,
  highlightTitle,
  description,
  clouds,
  icons,
  heroShot,
}: Props) {
  return (
    <>
      <div className='relative overflow-hidden h-[180px] md:h-screen md:-top-16 box-border'>
        <Image
          src={background.url}
          alt='background'
          layout='fill'
          objectFit='cover'
          objectPosition='top'
          className='h-auto'
        />

        <motion.img
          initial={{ x: '-30vw', y: '50vh', opacity: 0 }}
          animate={{ x: '0', y: '0', opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src={heroShot.url}
          alt='hero shot'
          className='absolute w-[40%] top-3/5 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-9'
        />

        <motion.img
          initial={{ y: '20vh', opacity: 0 }}
          animate={{ y: '0', opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src={clouds[0].url}
          alt='clouds'
          className='absolute -bottom-1/6 scale-[1.1] w-screen'
        />

        {icons.map((icon, index) => (
          <motion.img
            key={index}
            initial={positionIcons[index].initial}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            src={icon.url}
            alt='icon'
            className={classNames('absolute z-9', positionIcons[index].className)}
          />
        ))}
      </div>
      <div className='container text-center'>
        <section className='section flex flex-col items-center justify-center text-primary'>
          <Image
            loader={({ src }) => src}
            src={logo.url}
            width={logo.width}
            height={logo.height}
            alt='logo sen xanh'
            layout='fixed'
            objectFit='contain'
            className='lg:w-[400px] md:w-[320px] w-[240px]'
          />

          <h1 className='text-xl md:text-2xl lg:text-4xl !font-bold !mt-6 md:!mt-10 !mb-4 md:!mb-8'>
            <span>{title}</span>
            <br />
            <span className='uppercase inline-block md:!mt-1 lg:!mt-2'>
              {highlightTitle}
            </span>
          </h1>

          <p className='max-w-[980px] text-sm md:text-base'>{description}</p>
        </section>
      </div>
    </>
  )
}
