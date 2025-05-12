'use client'

import { Image, Tooltip } from 'antd'
import classNames from 'classnames'

import { Asset } from '@/utils/type'

import Border from '../Custom/Border'

type SingleArticle = {
  thumbnail: Asset
  testifier: string
  content: string
  className?: string
}

const SingleArticle: React.FC<SingleArticle> = ({
  thumbnail,
  testifier,
  content,
  className,
}) => {
  return (
    <div className={classNames('h-[400px]', className)}>
      <div className='flex h-full flex-col gap-4'>
        <div className='p-2 pb-0'>
          <Border radius={12}>
            <Image
              src={thumbnail?.url}
              alt='SingleArticle'
              width='100%'
              height='180px'
              className='h-48 w-full rounded-xl object-cover'
              preview={{
                maskClassName: 'rounded-xl',
              }}
            />
          </Border>
        </div>
        <div className='flex flex-1 flex-col gap-2 p-2 pb-6'>
          <div className='text-primary line-clamp-2 text-lg font-bold'>{testifier}</div>
          <Tooltip title={content}>
            <p className='text-primary line-clamp-5 text-base text-gray-900'>{content}</p>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default SingleArticle
