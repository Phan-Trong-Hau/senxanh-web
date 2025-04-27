'use client'

import { App, Image, Tooltip } from 'antd'
import classNames from 'classnames'
import { get } from 'http'
import { useRouter } from 'next/navigation'

import { getURLPageSlugWithType } from '@/utils/handle'
import { Asset } from '@/utils/type'

import Border from '../Custom/Border'

type Article = {
  title: string
  description: string
  thumbnail: Asset
  link: string
  className?: string
  url?: string
  slug?: string
  type?: string
}

const Article = ({
  title,
  description,
  thumbnail,
  link,
  className,
  url,
  slug,
  type,
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
    <div className={classNames('h-[400px]', className)}>
      <Border
        className='flex h-full flex-col gap-4'
        classNameChildren='h-full flex flex-col'
        radius={18}>
        <div className='p-2 pb-0'>
          <Border radius={12}>
            <Image
              src={thumbnail.url}
              alt={title}
              width='100%'
              height='180px'
              className='h-48 w-full rounded-xl object-cover'
              preview={{
                maskClassName: 'rounded-xl',
              }}
            />
          </Border>
        </div>
        <div className='flex flex-1 flex-col gap-2 p-4 pb-6'>
          <Tooltip title={title}>
            <div
              onClick={handleClick}
              className='text-primary line-clamp-2 cursor-pointer text-lg font-bold'>
              {title}
            </div>
          </Tooltip>
          <Tooltip title={description}>
            <p className='line-clamp-3 text-base text-gray-900'>{description}</p>
          </Tooltip>
          <div
            className='text-secondary mt-auto cursor-pointer text-center font-bold'
            onClick={handleClick}>
            Tìm hiểu thêm
          </div>
        </div>
      </Border>
    </div>
  )
}

export default Article
