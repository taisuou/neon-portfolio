import { useCallback, useEffect, useState } from "react";

const MAX_MOBILE_WIDTH_PX = 479;
const MAX_TABLET_WIDTH_PX = 1039;

export const useMedia = () => {
  const [isMobile, setIsMobile] = useState(isMobileWindowSize());
  const [isTablet, setIsTablet] = useState(isTabletWindowSize());

  const resizeEvent = useCallback(() => {
    setIsMobile(isMobileWindowSize());
    setIsTablet(isTabletWindowSize());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeEvent);
    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);

  return { isMobile, isTablet };
};

function isMobileWindowSize() {
  if (typeof window !== "undefined") {
    if (window.matchMedia(`(max-width: ${MAX_MOBILE_WIDTH_PX}px)`).matches) {
      return true;
    }
  }

  return false;
}

function isTabletWindowSize() {
  if (typeof window !== "undefined") {
    if (window.matchMedia(`(max-width: ${MAX_TABLET_WIDTH_PX}px)`).matches) {
      return true;
    }
  }

  return false;
}
