'use client';

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
  content: string;
  className?: string;
  [key: string]: any;
};

const Markdown = ({ content, className, ...props }: Props) => {
  return (
    <div className={className}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} {...props}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
