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

const NewsArticle = ({ title, description, thumbnail, link, className }: Article) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(link)
  }

  return (
    <div className={classNames('w-full', className)}>
      <Border radius={18}>
        <div className='flex items-center gap-6 px-2'>
          <Border radius={12} className='shrink-0'>
            <Image
              src={thumbnail?.url}
              alt={title}
              width={140}
              height={100}
              className='rounded-xl object-cover'
              preview={{ maskClassName: 'rounded-xl' }}
            />
          </Border>

          <div className='flex h-full flex-1 flex-col justify-between gap-3'>
            <Tooltip title={title}>
              <div
                onClick={handleClick}
                className='text-primary line-clamp-2 cursor-pointer text-xl font-bold'>
                {title}
              </div>
            </Tooltip>
            <Tooltip title={description}>
              <p className='line-clamp-2 text-base text-gray-800'>{description}</p>
            </Tooltip>
          </div>
        </div>
      </Border>
    </div>
  )
}

export default NewsArticle
