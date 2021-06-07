import { useEffect, useState } from "react";

export const useDeviceDetect = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    // const userAgent =
    //   typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    // console.log(`window.screen.width`, window.screen.width);
    // const mobile = Boolean(
    //   userAgent.match(
    //     /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    //   )
    // );
    const isMobileScreen = window.screen.width <= 425;
    setMobile(isMobileScreen);
  }, []);

  return { isMobile };
};
