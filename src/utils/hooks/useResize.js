import { useState, useEffect } from "react";
import { MOBILE, TABLET, DESKTOP, DESKTOP_HD } from "./hookConsts/breakPoints";

const checkResolution = (newWidth) => {
  switch (true) {
    case newWidth <= MOBILE:
      return "mobile";
    case MOBILE < newWidth && newWidth <= TABLET:
      return "tablet";
    case TABLET < newWidth && newWidth <= DESKTOP:
      return "desktop";
    case DESKTOP < newWidth && newWidth <= DESKTOP_HD:
      return "desktopHD";
    default:
      return "desktopUHD";
  }
};
export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [trakResolutionValue, setTrakResolutionValue] = useState(
    checkResolution(width)
  );

  useEffect(() => {
    const handleResize = (event) => {
      const newWidth = event.target.innerWidth;
      setWidth(newWidth);
      setTrakResolutionValue(checkResolution(newWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    trakResolutionValue,
  };
};
