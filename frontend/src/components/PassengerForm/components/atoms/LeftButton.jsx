import PropTypes from 'prop-types';

function LeftButton({ onClick }) {
  return (
    <button type='button' onClick={onClick}>
      {/* SVG for left button */}
      <svg
        className='w-6 h-6'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M6.707 10l5.147-5.146a.5.5 0 01.708.708l-4.792 4.793 4.792 4.792a.5.5 0 01-.708.708l-5.147-5.147a.5.5 0 010-.708z'
          clipRule='evenodd'
        />
      </svg>
    </button>
  );
}

LeftButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default LeftButton;
