'use client'

import { App, Image, Tooltip } from 'antd'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'

import { Asset } from '@/utils/type'

import Border from '../Custom/Border'

type Article = {
  title: string
  description: string
  thumbnail: Asset
  link: string
  className?: string
}

const Article = ({ title, description, thumbnail, link, className }: Article) => {
  const router = useRouter()
  const { message } = App.useApp()

  const handleClick = () => {
    // router.push(link);
    message.info('Khóa học sẽ sớm ra mắt, vui lòng đợi trong thời gian sắp tới.')
  }

  return (
    <div className={classNames('h-[400px]', className)}>
      <Border
        className='flex flex-col gap-4 h-full'
        classNameChildren='h-full flex flex-col'
        radius={18}>
        <div className='p-2 pb-0'>
          <Border radius={12}>
            <Image
              src={thumbnail.url}
              alt={title}
              width='100%'
              height='180px'
              className='w-full object-cover h-48 rounded-xl'
              preview={{
                maskClassName: 'rounded-xl',
              }}
            />
          </Border>
        </div>
        <div className='flex flex-col gap-2 p-4 pb-6 flex-1'>
          <Tooltip title={title}>
            <div
              onClick={handleClick}
              className='font-bold text-lg text-primary cursor-pointer line-clamp-2'>
              {title}
            </div>
          </Tooltip>
          <Tooltip title={description}>
            <p className='text-base text-gray-900 line-clamp-3'>{description}</p>
          </Tooltip>
          <div
            className='text-center text-secondary cursor-pointer font-bold mt-auto'
            onClick={handleClick}>
            Tìm hiểu thêm
          </div>
        </div>
      </Border>
    </div>
  )
}

export default Article
