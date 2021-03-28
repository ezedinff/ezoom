import { useEffect, useState } from 'react';

const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOfline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOfline);
    };
  }, []);

  const goOnline = () => setIsOnline(true);
  const goOfline = () => setIsOnline(false);

  return isOnline;
};

export default useIsOnline;
