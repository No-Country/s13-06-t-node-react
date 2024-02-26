import PropTypes from 'prop-types';

function RightButton({ onClick }) {
  return (
    <button type='button' onClick={onClick}>
      {/* SVG for right button */}
      <svg
        className='w-6 h-6'
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
  );
}

RightButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default RightButton;
