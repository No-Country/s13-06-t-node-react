import PropTypes from 'prop-types';

const AutocompleteIcon = ({ isOpen }) => {
  return (
    <svg
      className={`h-6 w-6 absolute right-2 top-2/4 transform -translate-y-2/4 pointer-events-none text-gray-400 ${
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
  );
};

AutocompleteIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default AutocompleteIcon;
