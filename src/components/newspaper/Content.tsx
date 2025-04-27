import { Image } from 'antd'

import Markdown from '../common/Custom/Markdown'

type Props = {
  title: string
  content: any
}

export const OPTIONS_RICK_TEXT = {
  h1: ({ node, ...props }: any) => {
    return (
      <h1
        className='text-main text-4xl leading-tight !font-bold md:text-5xl'
        {...props}
      />
    )
  },
  h2: ({ node, ...props }: any) => {
    return (
      <h2
        className='text-main text-[32px] leading-tight !font-bold md:text-4xl'
        {...props}
      />
    )
  },
  h3: ({ node, ...props }: any) => {
    return (
      <h3
        className='text-main text-[28px] leading-tight !font-bold md:text-3xl'
        {...props}
      />
    )
  },
  h4: ({ node, ...props }: any) => {
    return <h4 className='text-main text-2xl leading-tight !font-semibold' {...props} />
  },
  h5: ({ node, ...props }: any) => {
    return <h5 className='text-main text-xl leading-tight !font-semibold' {...props} />
  },
  h6: ({ node, ...props }: any) => {
    return <h6 className='text-main text-lg leading-tight !font-semibold' {...props} />
  },
  img: ({ node, ...props }: any) => {
    return (
      <Image className='mx-auto object-contain' {...props} style={{ maxWidth: '100%' }} />
    )
  },
}

const Content = ({ content }: Props) => {
  return (
    <div className='container'>
      <div className='section !mt-10'>
        <Markdown
          components={OPTIONS_RICK_TEXT}
          className='mx-auto max-w-[950px] text-lg font-normal'
          content={content}
        />
      </div>
    </div>
  )
}
export default Content
