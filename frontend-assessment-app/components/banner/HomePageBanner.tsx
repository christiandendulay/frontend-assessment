import { useEffect, useState } from "react";
import { Banner, BannerProps } from "./Banner";
import useScreenSize, { ScreenType } from "@/hooks/use-screen-size";

export type HomePageBannerType = {
  mobileSrc: string;
  desktopSrc: string;
} & Omit<BannerProps, "imageUrl">;

export const HomePageBanner = ({
  mobileSrc,
  desktopSrc,
  title,
  subTitle,
  alt,
}: HomePageBannerType) => {
  const screenSize = useScreenSize();
  const [src, setSrc] = useState("");

  useEffect(() => {
    setSrc(screenSize === ScreenType.MOBILE ? mobileSrc : desktopSrc);
  }, [desktopSrc, mobileSrc, screenSize]);

  if (!src) {
    return null;
  }

  return <Banner alt={alt} title={title} imageUrl={src} subTitle={subTitle} />;
};

export default HomePageBanner;
