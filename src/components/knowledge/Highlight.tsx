'use client'

import { Image, Tooltip } from 'antd'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'

import Border from '../common/Custom/Border'

type Props = {
  articles: any[]
}

const Highlight = ({ articles }: Props) => {
  const router = useRouter()
  const firstNews = articles?.[0]
  const restNews = articles?.slice(1, 4)

  const renderNews = ({ thumbnail, title, description, slug }: any, isFirst: boolean) => {
    const handleClick = () => {
      router.push(`/knowledge/${slug}`)
    }
    return (
      <>
        <div className='p-2 pb-0'>
          <Border radius={12}>
            <Image
              src={thumbnail.url}
              alt={title}
              width='100%'
              height={isFirst ? '480px' : '180px'}
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
        </div>
      </>
    )
  }

  return (
    <div className='my-10 flex gap-10'>
      <div className='flex-1 basis-2/3'>{firstNews && renderNews(firstNews, true)}</div>
      {restNews.length > 0 && (
        <div className='flex basis-1/3 flex-col'>
          {restNews?.map(news => renderNews(news, false))}
        </div>
      )}
    </div>
  )
}
export default Highlight
