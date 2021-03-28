import { useState, useEffect } from 'react';

interface ISize {
  screenWidth?: number;
  screenHeight?: number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<ISize>({
    screenWidth: undefined,
    screenHeight: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
