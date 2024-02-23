import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Toast = ({ showToast, setShowToast, tickets, handleToastClose }) => {
  const [progressWidth, setProgressWidth] = useState('100%');

  useEffect(() => {
    let timeoutId;
    let intervalId;

    if (showToast) {
      timeoutId = setTimeout(() => {
        setShowToast(false);
      }, 2000);

      intervalId = setInterval(() => {
        setProgressWidth((prevWidth) => {
          const newWidth = parseFloat(prevWidth) - (20 / 2000) * 100 + '%';
          return newWidth;
        });
      }, 20);
    } else {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
      setProgressWidth('100%');
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [showToast, setShowToast]);

  return (
    <>
      {showToast && (
        <div
          className='fixed bottom-2 mr-4 md:mr-0 right-2 flex flex-col items-center justify-center bg-red-500 px-0 pt-4 pb-0 rounded-lg overflow-hidden cursor-pointer'
          onClick={handleToastClose}
        >
          <div className='flex flex-col gap-2'>
            <div className='transition flex gap-4 items-center pl-8 pr-2'>
              <span className='text-lg font-medium text-gray-100'>
                {tickets === 1
                  ? 'Ya seleccionaste tu asiento'
                  : `Ya seleccionaste tus ${tickets} asientos`}
              </span>
              <div className='bg-black/30 hover:bg-black/40 text-white rounded-full font-bold h-8 w-8 flex justify-center items-center'>
                X
              </div>
            </div>
            <div
              className={'h-2 bg-red-700 '}
              style={{ width: progressWidth }}
            />
          </div>
        </div>
      )}
    </>
  );
};

Toast.propTypes = {
  showToast: PropTypes.bool.isRequired,
  setShowToast: PropTypes.func.isRequired,
  tickets: PropTypes.number.isRequired,
  handleToastClose: PropTypes.func.isRequired
};

export default Toast;
