import Image from "next/image";

export type BannerProps = {
  title: string;
  subTitle: string;
  imageUrl: string;
  alt: string;
};

export const Banner = ({ title, subTitle, imageUrl, alt }: BannerProps) => {
  return (
    <div className="relative w-full h-[600px] md:h-[650px] ">
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className="absolute inset-0 z-0 object-cover object-center"
        priority
      />
      <div className="absolute"></div>
      <div className="relative z-1 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-3xl">{subTitle}</p>
      </div>
    </div>
  );
};

export default Banner;
