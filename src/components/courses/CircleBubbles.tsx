'use client';

import classNames from 'classnames'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Asset } from '@/utils/type'

import Border from '../common/Border'

type BubbleItem = {
  name: string;
  description: string;
  image: Asset;
};

type Props = {
  items: BubbleItem[];
};

export default function CircleBubbles({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const calculatePosition = (index: number, total: number) => {
    if (isMobile) {
      return {};
    }

    const radiusX = 300;
    const radiusY = 180;
    const angleStep = (2 * Math.PI) / total;
    const angle = -Math.PI / 2 + index * angleStep;

    const left = `calc(50% + ${Math.cos(angle) * radiusX - 60}px)`;
    const top = `calc(50% + ${Math.sin(angle) * radiusY - 60}px)`;

    return { position: 'absolute', left, top };
  };

  return (
    <div
      className={classNames(
        'relative w-full mx-auto max-w-4xl mt-12',
        isMobile ? 'h-auto' : 'h-[330px]'
      )}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center p-6 pt-0 text-center max-w-[370px]">
        <p className="text-sm md:text-base text-primary">
          {items[activeIndex].description}
        </p>
      </div>

      <div
        className={classNames(
          isMobile
            ? 'flex flex-wrap justify-center gap-4 mt-[250px]'
            : 'w-full h-full relative'
        )}
      >
        {items.map((item, index) => {
          const positionStyles = !isMobile
            ? calculatePosition(index, items.length)
            : {};

          return (
            <div
              key={item.name}
              className={classNames(
                'transition-all duration-300 cursor-pointer',
                activeIndex === index
                  ? 'scale-110 z-20'
                  : 'scale-100 hover:scale-105',
                !isMobile && 'absolute'
              )}
              style={positionStyles as any}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="flex flex-col gap-1 items-center">
                <Border
                  className="h-fit rounded-full"
                  classNameChildren="leading-0"
                  radius={999}
                >
                  <Image
                    loader={({ src }) => src}
                    src={item.image.url}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-full w-16 h-16"
                  />
                </Border>
                <p className="text-center font-bold text-sm text-secondary !mb-0">
                  {item.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
