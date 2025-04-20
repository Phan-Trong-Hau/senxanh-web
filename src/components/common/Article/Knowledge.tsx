'use client'

import { App, Image, Tooltip } from 'antd'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'

import { Asset } from '@/utils/type'

import Border from '../Custom/Border'

type Article = {
  id: number
  documentId: string
  title: string
  description: string
  url: string | null
  slug: string
  content: string
  type: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  thumbnail: Asset
  logo?: Asset | null
  className?: string
}

const KnowledgeArticle = ({ title, description, thumbnail, className }: Article) => {
  const router = useRouter()

  const handleClick = () => {
    // router.push(link)
  }

  return (
    <div className={classNames('w-full', className)}>
      <div className='flex h-full max-h-[120px] items-center gap-4 px-2'>
        <Border radius={12} className='shrink-0'>
          <Image
            src={thumbnail.url}
            alt={title}
            width={140}
            height={100}
            className='rounded-xl object-cover'
            preview={{ maskClassName: 'rounded-xl' }}
          />
        </Border>

        <div className='flex h-full flex-1 flex-col items-start justify-between gap-3'>
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
    </div>
  )
}

export default KnowledgeArticle
