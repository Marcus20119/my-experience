import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export const useGetCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return currentTime;
};
