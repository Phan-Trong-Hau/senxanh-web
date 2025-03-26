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
        <h2 className='!font-bold text-2xl md:text-4xl text-center'>
          <span className='text-primary'>{title}</span>
          <br />
          <span className='text-secondary inline-block mt-1'>{highlightTitle}</span>
        </h2>
        <div className='mt-3 md:mt-10 text-center mx-auto'>
          <Border>
            <Image
              src={image.url}
              alt='banner'
              className='w-full max-[768px]:hidden rounded-lg'
              preview={{
                maskClassName: 'rounded-lg',
              }}
            />
            <Image
              src={imageInMobile.url}
              alt='banner'
              className='w-full md:hidden rounded-lg'
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
