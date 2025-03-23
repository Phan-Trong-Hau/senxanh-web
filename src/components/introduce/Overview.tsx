import { Image } from 'antd';

import { Asset } from '@/utils/type';

import Border from '../common/Border';

type Props = {
  title: string;
  highlightTitle: string;
  figures: Figure[];
};

type Figure = {
  caption: string;
  image: Asset;
};

const Overview: React.FC<Props> = ({ title, highlightTitle, figures }) => {
  return (
    <div className="container">
      <section className="section">
        <h2 className="!font-bold text-2xl md:text-4xl text-center">
          <span className="text-primary">{title}</span>
          <br />
          <span className="text-secondary inline-block mt-1">
            {highlightTitle}
          </span>
        </h2>
        <div className="mt-3 md:mt-10 w-2/3 lg:w-1/2 text-center mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {figures.map((figure, index) => (
              <Border key={index} className="cursor-pointer h-fit">
                <Image
                  src={figure.image.url}
                  alt="image"
                  className="w-full rounded-lg object-contain"
                  preview={{
                    maskClassName: 'rounded-lg',
                  }}
                />
                <div className="absolute bottom-2 text-center lg:px-6 w-full text-primary font-bold text-base !leading-tight uppercase">
                  {figure.caption}
                </div>
              </Border>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
