import { useState, useEffect } from 'react';
import timerIcon from '../../assets/BusTripDetails/Timer.svg';

export default function Timer() {
  const [time, setTime] = useState(300);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          // Puedes agregar lógica aquí para manejar el final del temporizador
        }
        return prevTime > 0 ? prevTime - 1 : prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const timerClass = () => {
    if (time <= 30) {
      return 'text-4xl text-red-500';
    } else if (time <= 150) {
      return 'text-4xl text-yellow-500';
    } else {
      return 'text-4xl text-[#576F8E]';
    }
  };

  return (
    <div className='bg-[#DEE5ED] p-3 rounded-lg'>
      <div
        className={`bg-[#F1F1F1] rounded-lg p-4 flex items-center justify-evenly `}
      >
        <img
          src={timerIcon}
          alt='timer'
          className='animate-pulse transform  transition-transform duration-100 '
        />
        <p className={timerClass()}>{formatTime(time)}</p>
      </div>
    </div>
  );
}
