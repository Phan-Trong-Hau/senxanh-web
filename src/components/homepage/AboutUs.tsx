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
        <h2 className="btn-primary w-fit mx-auto !cursor-default text-2xl !font-semibold !px-6 !py-3">
          {title || 'Về chúng tôi'}
        </h2>

        <div className="flex mt-14">
          <div className="basis-1/2 grid-cols-2 grid gap-4">
            {widgets.map((widget, index) => (
              <Border
                key={index}
                className="cursor-pointer h-fit"
                onClick={() => setWidgetActive(widget)}
              >
                <Image
                  loader={({ src }) => src}
                  src={widget.thumbnail.url}
                  alt=""
                  layout="fixed"
                  width={widget.thumbnail.width}
                  height={widget.thumbnail.height}
                  className="w-full rounded-lg max-h-[180px]"
                />

                <div className="absolute bottom-2 text-center px-6 w-full text-primary font-bold text-base">
                  {widget.label}
                </div>
              </Border>
            ))}
          </div>
          <div className="bg-widget basis-1/2 pl-10 text-center">
            <div className="max-w-[400px] mx-auto mt-20 mr-16">
              <h3 className="font-bold text-xl">{widgetActive.title}</h3>
              <Markdown
                content={widgetActive.description}
                className="[&_p]:mt-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
