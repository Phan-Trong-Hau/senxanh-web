import Image from "next/image";

import { Asset } from "@/utils/type";

type Props = {
  title: string;
  highlightTitle: string;
  image: Asset;
  imageInMobile: Asset;
};

const Banner: React.FC<Props> = ({ title, highlightTitle, image, imageInMobile }) => {
  return (
    <div className="container">
      <section className="section">
        <h2 className="!font-bold text-xl md:text-3xl text-center">
          <span className="text-primary">{title}</span>
          <br />
          <span className="text-secondary inline-block mt-1">{highlightTitle}</span>
        </h2>
        <div className="mt-3 md:mt-10 text-center mx-auto">
          <Image
            loader={({ src }) => src}
            src={image.url}
            alt="banner"
            layout="fixed"
            objectFit="contain"
            width={image.width}
            height={image.height}
            className="w-full max-[768px]:hidden"
          />
          <Image
            loader={({ src }) => src}
            src={imageInMobile.url}
            alt="banner"
            layout="fixed"
            objectFit="contain"
            width={imageInMobile.width}
            height={imageInMobile.height}
            className="w-full md:hidden"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
