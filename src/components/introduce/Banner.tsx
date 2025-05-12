import { Image } from 'antd'

import { Asset } from '@/utils/type'

import Border from '../common/Custom/Border'

type Props = {
  title: string
  highlightTitle: string
  image: Asset
  imageInMobile: Asset
}

const Banner: React.FC<Props> = ({ title, highlightTitle, image, imageInMobile }) => {
  return (
    <div className='container'>
      <section className='section'>
        <h2 className='text-center text-2xl !font-bold md:text-4xl'>
          <span className='text-primary'>{title}</span>
          <br />
          <span className='text-secondary mt-1 inline-block'>{highlightTitle}</span>
        </h2>
        <div className='mx-auto mt-3 text-center md:mt-10'>
          <Border>
            <Image
              src={image?.url}
              alt='banner'
              className='w-full rounded-lg max-[768px]:hidden'
              preview={{
                maskClassName: 'rounded-lg',
              }}
            />
            <Image
              src={imageInMobile?.url}
              alt='banner'
              className='w-full rounded-lg md:hidden'
              preview={{
                maskClassName: 'rounded-lg',
              }}
            />
          </Border>
        </div>
      </section>
    </div>
  )
}

export default Banner
