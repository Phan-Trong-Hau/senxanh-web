'use client';

import { Image, Tooltip } from 'antd';
import classNames from 'classnames';

import { Asset } from '@/utils/type';

import Border from './Border';

type SingleArticle = {
  thumbnail: Asset;
  testifier: string;
  content: string;
  className?: string;
};

const SingleArticle: React.FC<SingleArticle> = ({
  thumbnail,
  testifier,
  content,
  className,
}) => {
  return (
    <div className={classNames('h-[400px]', className)}>
      <div className="flex flex-col gap-4 h-full">
        <div className="p-2 pb-0">
          <Border radius={12}>
            <Image
              src={thumbnail.url}
              alt="SingleArticle"
              width="100%"
              height="180px"
              className="w-full object-cover h-48 rounded-xl"
              preview={{
                maskClassName: 'rounded-xl',
              }}
            />
          </Border>
        </div>
        <div className="flex flex-col gap-2 p-2 pb-6 flex-1">
          <div className="font-bold text-lg text-primary line-clamp-2">
            {testifier}
          </div>
          <Tooltip title={content}>
            <p className="text-base text-gray-900 line-clamp-5 text-primary">
              {content}
            </p>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
