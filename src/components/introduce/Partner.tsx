import Image from 'next/image'

import { Asset } from '@/utils/type'

type Props = {
  title: string
  logo: Asset
  partners: Partner[]
}

type Partner = {
  icon: Asset
  href: string
}

const Partner: React.FC<Props> = ({ title, logo, partners }) => {
  if (!partners?.length) return null

  return (
    <div className='container'>
      <section className='section'>
        <h2 className='text-center text-2xl !font-bold md:text-4xl'>
          <span className='text-primary'>{title}</span>
          <br />
          <div className='mt-5 flex justify-center'>
            <Image
              loader={({ src }) => src}
              src={logo?.url}
              width={logo.width}
              height={logo.height}
              alt='logo sen xanh'
              layout='fixed'
              objectFit='contain'
              className='w-48 md:w-64'
            />
          </div>
        </h2>
        <div className='mx-auto mt-6 text-center md:mt-8'>
          <div className='flex flex-wrap items-center justify-center gap-4 md:gap-8'>
            {partners?.map((partner, index) => (
              <a
                href={partner.href}
                target='_blank'
                rel='noopener noreferrer'
                key={index}>
                <Image
                  src={partner.icon?.url}
                  alt='partner'
                  width={partner.icon?.width}
                  height={partner.icon?.height}
                  layout='fixed'
                  className='w-10 object-cover md:w-14'
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partner
