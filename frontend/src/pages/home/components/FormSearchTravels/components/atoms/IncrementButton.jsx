import PropTypes from 'prop-types';
function IncrementButton({ onClick }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100 text-gray-700 focus:outline-none'
    >
      <svg
        className='w-3 h-3 text-gray-700'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 18 18'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M9 1v16M1 9h16'
        />
      </svg>
    </button>
  );
}

IncrementButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default IncrementButton;
