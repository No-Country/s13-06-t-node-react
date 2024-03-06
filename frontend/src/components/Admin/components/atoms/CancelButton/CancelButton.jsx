import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CancelButton({ to, text, textColor, onClick }) {
  return (
    <Link to={to}>
      <button
        className={`bg-white border-2 border-[#212F5C] cursor-pointer transition duration-300 ease-in-out text-${
          textColor || 'black'
        } font-semibold md:w-96 w-48 h-[56px] rounded-md py-2 px-10 text-base hover:bg-[#f0f0f0]`}
        onClick={onClick}
      >
        {text}
      </button>
    </Link>
  );
}

CancelButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  onClick: PropTypes.func
};

export default CancelButton;
