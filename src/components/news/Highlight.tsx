'use client'

import { Image, Tooltip } from 'antd'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'

import Border from '../common/Custom/Border'

type Props = {
  newsList: any[]
}

const Highlight = ({ newsList }: Props) => {
  const router = useRouter()
  const firstNews = newsList?.[0]
  const restNews = newsList?.concat(newsList)

  const renderNews = ({ thumbnail, title, description, slug }: any, isFirst: boolean) => {
    const handleClick = () => {
      router.push(`/news/${slug}`)
    }
    return (
      <>
        <div className='p-2 pb-0'>
          <Border radius={12}>
            <Image
              src={thumbnail.url}
              alt={title}
              width='100%'
              height={isFirst ? '380px' : '180px'}
              className='w-full object-cover h-48 rounded-xl'
              preview={{
                maskClassName: 'rounded-xl',
              }}
            />
          </Border>
        </div>
        <div className='flex flex-col gap-2 p-4 pb-6 flex-1'>
          <div
            onClick={handleClick}
            className={classNames(
              'font-bold text-primary cursor-pointer',
              isFirst ? 'text-4xl my-4' : 'text-lg',
            )}>
            {title}
          </div>
          {isFirst && (
            <Tooltip title={description} placement='top'>
              <p className='text-base text-gray-900 line-clamp-3'>{description}</p>
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
          <div className='basis-2/3 flex-1'>
            {firstNews && renderNews(firstNews, true)}
          </div>
          <div className='basis-1/3 flex flex-col'>
            {restNews?.map(news => renderNews(news, false))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Highlight
