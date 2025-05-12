'use client'

import { Image } from 'antd'
import classNames from 'classnames'

import Markdown from '../common/Custom/Markdown'
import { OPTIONS_RICK_TEXT } from '../newspaper/Content'

type Props = {
  contents: any
}

const Content = ({ contents }: Props) => {
  if (!contents) return null
  return (
    <div className='container'>
      <div className='section !mt-10'>
        {contents.map(({ content, image, isImageLeft }: any, index: number) => (
          <div
            key={index}
            className={classNames('grid gap-10', { 'md:grid-cols-2': image })}>
            {image && isImageLeft && (
              <div className='mb-[18px] flex items-center justify-center'>
                <Image className='object-contain' src={image?.url} alt={image.name} />
              </div>
            )}
            <Markdown
              components={OPTIONS_RICK_TEXT}
              className='text-lg font-normal'
              content={content}
            />
            {image && !isImageLeft && (
              <div className='mb-[18px] flex items-center justify-center'>
                <Image className='object-contain' src={image?.url} alt={image.name} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Content
