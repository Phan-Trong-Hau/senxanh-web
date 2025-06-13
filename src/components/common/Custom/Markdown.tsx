'use client'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

type Props = {
  content: string
  className?: string
  [key: string]: any
}

const Markdown = ({ content, className, ...props }: Props) => {
  return (
    <div className={className}>
      <ReactMarkdown {...props} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default Markdown
