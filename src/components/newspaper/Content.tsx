import { Image } from 'antd'

import Markdown from '../common/Custom/Markdown'

type Props = {
  title: string
  content: any
}

const options = {
  h1: ({ node, ...props }: any) => {
    return (
      <h1
        className='text-4xl md:text-5xl !font-bold leading-tight text-main'
        {...props}
      />
    )
  },
  h2: ({ node, ...props }: any) => {
    return (
      <h2
        className='text-[32px] md:text-4xl !font-bold leading-tight text-main'
        {...props}
      />
    )
  },
  h3: ({ node, ...props }: any) => {
    return (
      <h3
        className='text-[28px] md:text-3xl !font-bold leading-tight text-main'
        {...props}
      />
    )
  },
  h4: ({ node, ...props }: any) => {
    return <h4 className='text-2xl !font-semibold leading-tight text-main' {...props} />
  },
  h5: ({ node, ...props }: any) => {
    return <h5 className='text-xl !font-semibold leading-tight text-main' {...props} />
  },
  h6: ({ node, ...props }: any) => {
    return <h6 className='text-lg !font-semibold leading-tight text-main' {...props} />
  },
  img: ({ node, ...props }: any) => {
    return (
      <Image className='mx-auto object-contain' {...props} style={{ maxWidth: '100%' }} />
    )
  },
}

const Content = ({ title, content }: Props) => {
  return (
    <div className='container'>
      <div className='section !mt-10'>
        <Markdown
          components={options}
          className='text-lg max-w-[650px] mx-auto font-normal'
          content={content}
        />
      </div>
    </div>
  )
}
export default Content
