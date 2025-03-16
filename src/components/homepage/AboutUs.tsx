'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Asset } from '@/utils/type';

import Border from '../common/Border';
import Markdown from '../common/Markdown';

type Props = {
  title: string;
  widgets: {
    label: string;
    thumbnail: Asset;
    title: string;
    description: string;
  }[];
};

const AboutUs = ({ title, widgets }: Props) => {
  const [widgetActive, setWidgetActive] = useState(widgets[3]);

  return (
    <div className="container">
      <div className="section">
        <h2 className="btn-primary mx-auto !cursor-default text-lg md:text-2xl !font-semibold md:!px-6 md:!py-2 ">
          {title || 'Về chúng tôi'}
        </h2>

        <div className="flex mt-8 lg:mt-14 gap-5 md:gap-10 flex-col lg:flex-row">
          <div className="basis-1/2 grid-cols-2 md:grid-cols-4 lg:grid-cols-2 grid gap-4">
            {widgets.map((widget, index) => (
              <Border
                key={index}
                className="cursor-pointer h-fit"
                onClick={() => setWidgetActive(widget)}
              >
                <Image
                  loader={({ src }) => src}
                  src={widget.thumbnail.url}
                  alt="image"
                  layout="fixed"
                  objectFit="contain"
                  width={widget.thumbnail.width}
                  height={widget.thumbnail.height}
                  className="w-full rounded-lg"
                />
                <div className="absolute bottom-2 text-center lg:px-6 w-full text-primary font-bold text-base !leading-tight">
                  {widget.label}
                </div>
              </Border>
            ))}
          </div>
          <div className="relative lg:basis-1/2 text-center flex justify-center items-center text-white">
            <img
              src="https://senxanh-prod-media.s3.ap-southeast-1.amazonaws.com/background_widget_9a0433c462.png"
              alt={widgetActive.title}
              className="absolute top-0 right-0 w-full h-full"
            />
            <div className="relative z-10 px-12 md:px-20 lg:px-12 mt-4 translate-x-4 md:translate-x-7 pt-16 pb-10 lg:py-0">
              <h3 className="font-bold text-base leading-tight md:text-xl uppercase">
                {widgetActive.title}
              </h3>
              <Markdown
                content={widgetActive.description}
                className="[&_p]:md:mt-3 [&_p]:mt-2 md:text-base leading-tight text-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
