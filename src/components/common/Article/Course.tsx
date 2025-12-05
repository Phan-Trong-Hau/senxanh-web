'use client'

import { Image, Tooltip } from 'antd'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'

import { getURLPageSlugWithType } from '@/utils/handle'
import { Asset } from '@/utils/type'

import Border from '../Custom/Border'

type Article = {
  id: number
  title: string
  description: string
  slug?: string
  thumbnail: Asset
  className?: string
  url?: string
  type?: string
  link?: string
}

const CourseArticle = ({
  title,
  thumbnail,
  className,
  url,
  slug,
  type,
  link,
}: Article) => {
  const router = useRouter()

  const handleClick = () => {
    if (url) {
      window.open(url, '_blank')
      return
    }

    if (slug && type) {
      router.push(getURLPageSlugWithType({ type, slug }))
      return
    }

    if (link) {
      router.push(link)
    }
  }

  return (
    <div className={classNames('w-full', className)}>
      <div className='flex h-full flex-col items-start gap-2 md:gap-4'>
        <Border radius={12} className='shrink-0'>
          <Image
            src={thumbnail?.url}
            alt={title}
            className='rounded-xl object-cover md:!h-[140px] md:!w-[240px]'
            preview={{ maskClassName: 'rounded-xl' }}
          />
        </Border>

        <div className='flex h-full flex-1 flex-col items-center justify-between gap-3 md:max-w-[280px]'>
          <Tooltip title={title}>
            <div
              onClick={handleClick}
              className='text-primary cursor-pointer text-lg font-bold md:line-clamp-2 md:text-xl'>
              {title}
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default CourseArticle
