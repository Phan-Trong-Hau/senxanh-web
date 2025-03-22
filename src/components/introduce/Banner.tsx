import { Asset } from "@/utils/type";
import Image from "next/image";

type Props = {
  title: string;
  highlightTitle: string;
  image: Asset;
  imageInMobile: Asset;
};

const Banner: React.FC<Props> = ({ title, highlightTitle, image, imageInMobile }) => {
  return (
    <>	
      <section className="section">
        <h2 className="font-bold text-xl md:text-3xl text-center">
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
        </div>
      </section>
    </>
  );
};

export default Banner;
