import { Image } from 'antd'

import { Asset } from '@/utils/type'

import Border from '../common/Custom/Border'

type Props = {
  title: string
  highlightTitle: string
  figures: Figure[]
}

type Figure = {
  caption: string
  image: Asset
}

const Overview: React.FC<Props> = ({ title, highlightTitle, figures }) => {
  return (
    <div className='container'>
      <section className='section'>
        <h2 className='text-center text-2xl !font-bold md:text-4xl'>
          <span className='text-primary'>{title}</span>
          <br />
          <span className='text-secondary mt-1 inline-block'>{highlightTitle}</span>
        </h2>
        <div className='mx-auto mt-3 w-2/3 text-center md:mt-10 lg:w-1/2'>
          <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
            {figures.map((figure, index) => (
              <Border key={index} className='h-fit cursor-pointer'>
                <Image
                  src={figure.image?.url}
                  alt='image'
                  className='w-full rounded-lg object-contain'
                  preview={{
                    maskClassName: 'rounded-lg',
                  }}
                />
                <div className='text-primary absolute bottom-0 w-full rounded-b-lg bg-gradient-to-b from-transparent to-white pt-6 pb-1 text-center text-base !leading-tight font-bold uppercase lg:px-6'>
                  {figure.caption}
                </div>
              </Border>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Overview
