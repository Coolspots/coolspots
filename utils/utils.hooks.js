import { useEffect, useState } from 'react';

export const useDeviceDetect = () => {
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    const isMobileScreen = window.screen.width <= 425;
    setMobile(isMobileScreen);
  }, []);

  return { isMobile };
};

export const useInput = ({ type }) => {
  const [value, setValue] = useState('');
  const input = <input value={value} onChange={(e) => setValue(e.target.value)} type={type} />;
  return [value, input];
};
