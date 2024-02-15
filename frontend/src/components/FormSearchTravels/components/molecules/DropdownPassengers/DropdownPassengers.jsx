import { useEffect, useRef, useState } from 'react';

function DropdownPassengers() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([
    { id: 1, label: 'Adultos', quantity: 0 },
    { id: 2, label: 'Niños', quantity: 0 },
    { id: 3, label: 'Lorem1', quantity: 0 }
  ]);

  const dropdownRef = useRef(null);

  const handleOptionChange = (optionId, increment) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.map((option) => {
        if (option.id === optionId) {
          const newQuantity = option.quantity + (increment ? 1 : -1);
          return {
            ...option,
            quantity: Math.max(0, newQuantity)
          };
        }
        return option;
      })
    );
  };

  const getTotalQuantity = () => {
    return selectedOptions.reduce(
      (total, option) => total + option.quantity,
      0
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative w-full' ref={dropdownRef}>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='inline-flex items-center justify-between w-full px-4 py-2 bg-white border border-white text-gray-700 rounded-md focus:outline-none focus:border-blue-500'
      >
        <span className='inline-flex items-center justify-start px-3 text-base text-gray-900'>
          <svg
            className='-ml-3 w-4 h-5 text-gray-500 dark:text-gray-400'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
          </svg>
          <span className='ml-3'>{getTotalQuantity()}</span>
        </span>
        <div className='inline-flex items-center justify-end'>
          <svg
            className='-mr-1 ml-2 h-5 w-5 text-gray-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className='absolute right-0 mt-2 md:w-48 w-full bg-white border border-gray-300 rounded-md shadow-lg'>
          {selectedOptions.map((option) => (
            <div
              key={option.id}
              className='flex items-center justify-between px-4 py-2'
            >
              <span className='text-sm text-gray-700'>{option.label}</span>
              <div className='flex items-center space-x-2'>
                <button
                  type='button'
                  onClick={() => handleOptionChange(option.id, false)} // Decrementar
                  className='px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100'
                >
                  -
                </button>
                <span className='text-sm text-gray-700'>{option.quantity}</span>
                <button
                  type='button'
                  onClick={() => handleOptionChange(option.id, true)} // Incrementar
                  className='px-[0.65rem] py-1 text-sm text-gray-700 border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100'
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownPassengers;
