import PropTypes from 'prop-types';
import { useState } from 'react';

function PassengerDropdownButton({ onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    onChange(!isOpen);
  };

  return (
    <div className='relative'>
      <button
        type='button'
        className='text-white flex items-center justify-center'
        onClick={toggleDropdown}
      >
        <svg
          className={`w-6 h-6 ${isOpen ? 'rotate-90' : ''}`}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M13.293 10l-5.147-5.146a.5.5 0 00-.708.708l4.792 4.793-4.792 4.792a.5.5 0 00.708.708l5.147-5.147a.5.5 0 000-.708z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </div>
  );
}

PassengerDropdownButton.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default PassengerDropdownButton;
