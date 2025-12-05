'use client'

import { App, Image, Tooltip } from 'antd'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import React from 'react'

import { getURLPageSlugWithType } from '@/utils/handle'

import Border from '../common/Custom/Border'

type Props = {
  newsList: any[]
}

const Highlight = ({ newsList }: Props) => {
  const { message } = App.useApp()
  const router = useRouter()
  const firstNews = newsList?.[0]
  const restNews = newsList?.slice(1)

  const renderNews = (
    { thumbnail, title, description, slug, url, type }: any,
    isFirst: boolean,
  ) => {
    const handleClick = () => {
      if (url) {
        window.open(url, '_blank')
        return
      }

      if (slug) {
        router.push(getURLPageSlugWithType({ type, slug }))
        return
      }

      message.info('Bài viết đang cập nhật.')
    }
    return (
      <React.Fragment key={slug}>
        <div>
          <Border radius={12}>
            <Image
              src={thumbnail?.url}
              alt={title}
              className='h-48 w-full rounded-xl object-cover'
              preview={{
                maskClassName: 'rounded-xl',
              }}
            />
          </Border>
        </div>
        <div className='mt-4 flex flex-1 flex-col gap-2 px-2'>
          <div
            onClick={handleClick}
            className={classNames(
              'text-primary cursor-pointer font-bold',
              isFirst ? 'text-xl md:my-1 md:text-3xl' : 'text-lg',
            )}>
            {title}
          </div>
          {isFirst && (
            <Tooltip title={description} placement='top'>
              <p className='!mb-1 line-clamp-3 text-base text-gray-900'>{description}</p>
            </Tooltip>
          )}
          <div className='text-secondary cursor-pointer font-bold' onClick={handleClick}>
            Xem thêm
          </div>
        </div>
      </React.Fragment>
    )
  }

  return (
    <div className='container'>
      <div className='section'>
        <div className='flex flex-col gap-10 md:flex-row'>
          <div className='flex-1 md:basis-2/3'>
            {firstNews && renderNews(firstNews, true)}
          </div>

          <div className='flex flex-col md:basis-1/3'>
            {restNews?.map(news => renderNews(news, false))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Highlight
