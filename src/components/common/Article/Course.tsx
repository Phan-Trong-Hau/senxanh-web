'use client'

import { Image, Tooltip } from 'antd'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'

import { Asset } from '@/utils/type'

import Border from '../Custom/Border'

type Article = {
  id: number
  title: string
  description: string
  slug: string
  thumbnail: Asset
  className?: string
}

const CourseArticle = ({ title, thumbnail, className }: Article) => {
  const router = useRouter()

  const handleClick = () => {
    // router.push(link)
  }

  return (
    <div className={classNames('w-full', className)}>
      <div className='flex h-full max-h-50 flex-col items-start gap-4 px-2'>
        <Border radius={12} className='shrink-0'>
          <Image
            src={thumbnail.url}
            alt={title}
            width={240}
            height={120}
            className='rounded-xl object-cover'
            preview={{ maskClassName: 'rounded-xl' }}
          />
        </Border>

        <div className='flex h-full flex-1 flex-col items-center justify-between gap-3'>
          <Tooltip title={title}>
            <div
              onClick={handleClick}
              className='text-primary line-clamp-2 cursor-pointer text-xl font-bold'>
              {title}
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default CourseArticle
