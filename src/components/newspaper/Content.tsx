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
  p: ({ node, ...props }: any) => {
    return <p className='text-lg font-normal' {...props} />
  },
  ul: ({ node, ...props }: any) => {
    return <ul className='list-disc pl-5 text-lg font-normal' {...props} />
  },
  ol: ({ node, ...props }: any) => {
    return <ol className='list-decimal pl-5 text-lg font-normal' {...props} />
  },
  li: ({ node, ...props }: any) => {
    return <li className='text-lg font-normal' {...props} />
  },
  blockquote: ({ node, ...props }: any) => {
    return (
      <blockquote
        className='border-l-4 border-gray-300 pl-4 text-lg font-normal italic'
        {...props}
      />
    )
  },
  strong: ({ node, ...props }: any) => {
    return <strong className='font-bold' {...props} />
  },
  em: ({ node, ...props }: any) => {
    return <em className='italic' {...props} />
  },
  a: ({ node, ...props }: any) => {
    return (
      <a
        className='text-blue-600 hover:underline'
        target='_blank'
        rel='noopener noreferrer'
        {...props}
      />
    )
  },
  code: ({ node, ...props }: any) => {
    return (
      <code
        className='bg-gray-100 px-1 py-0.5 font-mono text-sm text-gray-800'
        {...props}
      />
    )
  },
  pre: ({ node, ...props }: any) => {
    return (
      <pre className='overflow-x-auto rounded-md bg-gray-100 p-4' {...props}>
        {node.children}
      </pre>
    )
  },
  table: ({ node, ...props }: any) => {
    return <table className='my-4 w-full border border-solid' {...props}></table>
  },
  tr: ({ node, ...props }: any) => {
    return <tr className='border border-solid' {...props}></tr>
  },
  td: ({ node, ...props }: any) => {
    return (
      <td
        className='border border-solid p-4'
        style={{ verticalAlign: 'top' }}
        {...props}></td>
    )
  },
  hr: ({ node, ...props }: any) => {
    return <hr className='my-4 border-t border-gray-300' {...props} />
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
