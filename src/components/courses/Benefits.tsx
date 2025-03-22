'use client';

import classNames from 'classnames'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Asset } from '@/utils/type'

import Border from '../common/Border'

type Bubble = {
  caption: string;
  image: Asset;
};

type Props = {
  title: string;
  highlightTitle: string;
  bubbles: Bubble[];
};

const Benefits: React.FC<Props> = ({ title, highlightTitle, bubbles }) => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkLargeScreen = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    checkLargeScreen();
    window.addEventListener('resize', checkLargeScreen);

    return () => {
      window.removeEventListener('resize', checkLargeScreen);
    };
  }, []);

  return (
    <div className="container overflow-hidden">
      <section className="section !mt-0">
        <h2 className="text-2xl md:text-4xl !font-bold text-center">
          <span className="text-primary">{title}</span>
          <br />
          <span className="uppercase inline-block md:mt-1 lg:mt-2 text-secondary">
            {highlightTitle}
          </span>
        </h2>
        <div className={classNames('flex mt-10 flex-col gap-4')}>
          {bubbles.map((bubble, index) => (
            <div
              key={bubble.caption}
              className="flex gap-4 items-center"
              style={{
                transform: isLargeScreen
                  ? `translateX(calc(50% +  ${index * 70}px - 350px))`
                  : 'translateX(0)',
              }}
            >
              <Border className="h-fit w-fit shrink-0" radius={999}>
                <Image
                  src={bubble.image.url}
                  alt={bubble.caption}
                  width={64}
                  height={64}
                  className="rounded-full w-12 h-12 md:w-16 md:h-16"
                />
              </Border>
              <p className="font-semibold text-base md:text-lg text-secondary !mb-0">
                {bubble.caption}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Benefits;
