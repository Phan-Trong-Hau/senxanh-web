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
        <div className='flex gap-6 items-center px-2'>
          <Border radius={12} className='shrink-0'>
            <Image
              src={thumbnail.url}
              alt={title}
              width={140}
              height={100}
              className='object-cover rounded-xl'
              preview={{ maskClassName: 'rounded-xl' }}
            />
          </Border>

          <div className='flex flex-col justify-between flex-1 h-full gap-3'>
            <Tooltip title={title}>
              <div
                onClick={handleClick}
                className='font-bold text-xl text-primary cursor-pointer line-clamp-2'>
                {title}
              </div>
            </Tooltip>
            <Tooltip title={description}>
              <p className='text-base text-gray-800 line-clamp-2'>{description}</p>
            </Tooltip>
          </div>
        </div>
      </Border>
    </div>
  )
}

export default NewsArticle
