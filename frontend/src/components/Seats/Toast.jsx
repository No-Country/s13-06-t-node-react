import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Toast = ({ showToast, setShowToast, children, type = undefined }) => {
  let lowerCaseType;
  const [progressWidth, setProgressWidth] = useState('100%');
  const [toastTimerId, setToastTimerId] = useState(null);

  if (type !== undefined) {
    lowerCaseType = type.toLowerCase();
  }

  const handleToastClose = () => {
    if (toastTimerId) {
      clearTimeout(toastTimerId);
    }
    setShowToast(false);
  };

  useEffect(() => {
    if (showToast) {
      const newToastTimerId = setTimeout(() => {
        setShowToast(false);
      }, 2000);
      setToastTimerId(newToastTimerId);

      const intervalId = setInterval(() => {
        setProgressWidth((prevWidth) => {
          const newWidth = parseFloat(prevWidth) - (20 / 2000) * 100 + '%';
          return newWidth;
        });
      }, 20);

      return () => {
        clearInterval(intervalId);
        clearTimeout(newToastTimerId);
      };
    } else {
      clearTimeout(toastTimerId);
      setProgressWidth('100%');
    }
  }, [showToast, setShowToast]);

  return (
    <>
      {showToast && (
        <div
          className={`fixed bottom-2 mr-4 md:mr-0 right-2 flex flex-col items-center justify-center px-0 pt-4 pb-0 rounded-lg overflow-hidden cursor-pointer ${lowerCaseType === 'success' ? 'bg-green-400 text-green-800' : lowerCaseType === 'warning' ? 'bg-yellow-400 text-yellow-700' : lowerCaseType === 'error' ? 'bg-red-400 text-red-800' : 'bg-gray-400 text-gray-700'}`}
          onClick={handleToastClose}
        >
          <div className='flex flex-col gap-2'>
            <div className='transition flex gap-4 items-center pl-8 pr-2 text-lg font-semibold '>
              {children}
              <div className='bg-black/30 hover:bg-black/40 text-white rounded-full h-8 w-8 flex justify-center items-center'>
                X
              </div>
            </div>
            <div
              className={`h-2 ${lowerCaseType === 'success' ? 'bg-green-700' : lowerCaseType === 'warning' ? 'bg-yellow-600' : lowerCaseType === 'error' ? 'bg-red-700' : 'bg-gray-700'} `}
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
  children: PropTypes.node.isRequired,
  type: PropTypes.string
};

export default Toast;
