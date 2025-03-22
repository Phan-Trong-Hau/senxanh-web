"use client";

import { Asset } from "@/utils/type";
import Image from "next/image";

type Props = {
  background: Asset;
  backgroundInMobile: Asset;
  logo: Asset;
  description: string;
};

const HeroBanner: React.FC<Props> = ({ background, backgroundInMobile, logo, description }) => {
  return (
    <div className="relative">
      <Image
        loader={({ src }) => src}
        src={background.url}
        alt="hero banner"
        layout="fixed"
        width={background.width}
        height={background.height}
        objectFit="contain"
        objectPosition="top"
        className="w-screen max-[768px]:hidden"
      />
      <Image
        loader={({ src }) => src}
        src={backgroundInMobile.url}
        alt="hero banner"
        layout="fixed"
        width={backgroundInMobile.width}
        height={backgroundInMobile.height}
        objectFit="contain"
        objectPosition="top"
        className="w-screen md:hidden"
      />
      <div className="text-center absolute top-1/2 -translate-y-1/2 left-10">
        <section className="section justify-end">
          {/* <Image
            loader={({ src }) => src}
            src={logo.url}
            width={logo.width}
            height={logo.height}
            alt="logo sen xanh"
            layout="fixed"
            objectFit="contain"
            className="lg:w-[400px] md:w-[320px] w-[240px]"
          /> */}

          <p className="text-xl md:text-2xl lg:text-3xl whitespace-pre-line text-white text-left leading-relaxed">
            {description}
          </p>
        </section>
      </div>
    </div>
  );
};

export default HeroBanner;
