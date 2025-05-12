'use client'

import Image from 'next/image'

import { Asset } from '@/utils/type'

type Props = {
  background: Asset
  backgroundInMobile: Asset
  logo: Asset
  description: string
}

const HeroBanner: React.FC<Props> = ({
  background,
  backgroundInMobile,
  logo,
  description,
}) => {
  return (
    <>
      {background && (
        <Image
          loader={({ src }) => src}
          src={background?.url}
          alt='hero banner'
          layout='fixed'
          width={background.width}
          height={background.height}
          objectFit='contain'
          objectPosition='top'
          className='hidden w-screen md:block'
        />
      )}
      {backgroundInMobile && (
        <Image
          loader={({ src }) => src}
          src={backgroundInMobile?.url}
          alt='hero banner'
          layout='fixed'
          width={backgroundInMobile?.width}
          height={backgroundInMobile?.height}
          objectFit='contain'
          objectPosition='top'
          className='w-screen md:hidden'
        />
      )}
      {logo && description && (
        <div className='container text-center'>
          <section className='section text-primary flex flex-col items-center justify-center gap-7.5'>
            <Image
              loader={({ src }) => src}
              src={logo?.url}
              width={logo.width}
              height={logo.height}
              alt='logo sen xanh'
              layout='fixed'
              objectFit='contain'
              className='w-[240px] md:w-[320px] lg:w-[400px]'
            />
            <p className='max-w-[980px] text-sm md:text-base'>{description}</p>
          </section>
        </div>
      )}
    </>
  )
}

export default HeroBanner
