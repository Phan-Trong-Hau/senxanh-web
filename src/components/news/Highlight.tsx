'use client'

import { App, Image, Tooltip } from 'antd'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'

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
      <>
        <div className='p-2 pb-0'>
          <Border radius={12}>
            <Image
              src={thumbnail?.url}
              alt={title}
              width='100%'
              height={isFirst ? '380px' : '180px'}
              className='h-48 w-full rounded-xl object-cover'
              preview={{
                maskClassName: 'rounded-xl',
              }}
            />
          </Border>
        </div>
        <div className='flex flex-1 flex-col gap-2 p-4 pb-6'>
          <div
            onClick={handleClick}
            className={classNames(
              'text-primary cursor-pointer font-bold',
              isFirst ? 'my-4 text-4xl' : 'text-lg',
            )}>
            {title}
          </div>
          {isFirst && (
            <Tooltip title={description} placement='top'>
              <p className='line-clamp-3 text-base text-gray-900'>{description}</p>
            </Tooltip>
          )}
          <div className='text-secondary cursor-pointer font-bold' onClick={handleClick}>
            Xem thêm
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='container'>
      <div className='section'>
        <div className='flex gap-10'>
          <div className='flex-1 basis-2/3'>
            {firstNews && renderNews(firstNews, true)}
          </div>
          <div className='flex basis-1/3 flex-col'>
            {restNews?.map(news => renderNews(news, false))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Highlight
