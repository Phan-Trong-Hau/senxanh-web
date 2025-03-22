import { Image } from 'antd'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'

import { Asset } from '@/utils/type'

import Border from './Border'

type Article = {
  title: string;
  description: string;
  thumbnail: Asset;
  link: string;
  className?: string;
};

const Article = ({
  title,
  description,
  thumbnail,
  link,
  className,
}: Article) => {
  const router = useRouter();

  return (
    <div className={classNames('h-[400px]', className)}>
      <Border
        className="flex flex-col gap-4 h-full"
        classNameChildren="h-full flex flex-col"
        radius={13}
      >
        <div className="p-2 pb-0">
          <Border radius={12}>
            <Image
              src={thumbnail.url}
              alt={title}
              width="100%"
              height="180px"
              className="w-full object-cover h-48 rounded-xl"
              preview={{
                maskClassName: 'rounded-xl',
              }}
            />
          </Border>
        </div>
        <div className="flex flex-col gap-2 p-4 pb-6 flex-1">
          <div
            onClick={() => router.push(link)}
            className="font-bold text-lg text-primary cursor-pointer line-clamp-2"
          >
            {title}
          </div>
          <p className="text-base text-gray-900 line-clamp-3">{description}</p>
          <div
            className="text-center text-secondary cursor-pointer font-bold mt-auto"
            onClick={() => router.push(link)}
          >
            Tìm hiểu thêm
          </div>
        </div>
      </Border>
    </div>
  );
};

export default Article;
