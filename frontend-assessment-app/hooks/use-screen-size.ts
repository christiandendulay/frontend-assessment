import { useState, useEffect } from "react";

export enum ScreenType {
  MOBILE = "mobile",
  DESKTOP = "desktop",
}

const useScreenSize = (): ScreenType => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);

    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return isMobile ? ScreenType.MOBILE : ScreenType.DESKTOP;
};

export default useScreenSize;
