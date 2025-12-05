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

const KnowledgeArticle = ({
  title,
  description,
  thumbnail,
  className,
  slug,
  url,
}: Article) => {
  const { message } = App.useApp()
  const router = useRouter()

  const handleClick = () => {
    if (url) {
      window.open(url, '_blank')
      return
    }

    if (slug) {
      router.push(`/knowledge/${slug}`)
      return
    }

    message.info('Bài viết đang cập nhật.')
  }

  return (
    <div className={classNames('w-full', className)}>
      <div className='flex h-full items-start gap-3 md:gap-4'>
        <Border radius={12} className='shrink-0'>
          <Image
            src={thumbnail?.url}
            alt={title}
            className='!h-[90px] !w-[140px] rounded-xl object-cover md:!h-[160px] md:!w-[240px]'
            preview={{ maskClassName: 'rounded-xl' }}
          />
        </Border>

        <div className='flex h-full flex-1 flex-col items-start gap-1 md:gap-3'>
          <Tooltip title={title}>
            <div
              onClick={handleClick}
              className='text-primary line-clamp-2 cursor-pointer text-base !leading-tight font-semibold md:text-xl md:font-bold'>
              {title}
            </div>
          </Tooltip>
          <Tooltip title={description}>
            <p className='!mb-0 line-clamp-2 text-sm text-gray-800 md:line-clamp-3 md:text-lg'>
              {description}
            </p>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default KnowledgeArticle
