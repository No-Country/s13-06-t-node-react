import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// De esta manera pasan los valores del select
// const options = [{ value: 'Bariloche', option: 'Bariloche' }, { value: 'Mar de Plata', option: 'Mar de plata' }];
// <InputSelectAdmin options={options} text={"Ruta"} />

function InputSelectAdmin({ options, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className='relative'>
      <span className='absolute -top-3 left-3 bg-white px-1 font-bold text-sm'>
        {text}
      </span>
      <button
        type='button'
        className='flex justify-between items-center md:w-96 w-48 h-[56px]  rounded-md py-2 px-4 text-sm font-normal text-black bg-[#FFF] border-2 border-[#0000003B]  focus:border-[#212F5C]'
        onClick={handleToggleDropdown}
      >
        <span className='text-sm leading-none uppercase text-black whitespace-nowrap'>
          {selectedOption}
        </span>
        <svg
          className={`w-4 h-4 mt-px ml-2 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      {isOpen && (
        <div className='absolute flex flex-col md:w-96 w-48 mt-1 border border-[#E2E8F0] shadow-lg bg-white'>
          {options.map((option, index) => (
            <button
              type='button'
              key={index}
              className='flex items-center h-8 px-3 text-sm hover:bg-gray-200'
              onClick={() => handleOptionSelect(option.option)}
            >
              {option.option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

InputSelectAdmin.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      option: PropTypes.string.isRequired
    })
  ).isRequired,
  text: PropTypes.string.isRequired
};

export default InputSelectAdmin;
