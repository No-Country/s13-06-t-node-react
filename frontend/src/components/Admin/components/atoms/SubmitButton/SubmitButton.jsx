import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SubmitButton({
  to,
  text,
  textColor,
  bgColor,
  disabled,
  onClick,
  hvColor
}) {
  const backgroundClass = disabled
    ? 'bg-[#A0A0A0] border border-[#A0A0A0] text-base cursor-not-allowed'
    : `bg-[${
        bgColor || '#FF5F00'
      }] cursor-pointer transition duration-300 ease-in-out hover:bg-[${
        hvColor || '#FF8C00'
      }]`;
  const href = disabled ? '/#' : to;

  return (
    <Link to={href}>
      <button
        type='button'
        className={`md:w-96 w-48 h-[56px]  rounded-md py-2 px-10 text-base text-${
          textColor || 'white'
        } font-semibold ${backgroundClass}`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </Link>
  );
}

SubmitButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  hvColor: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired
};

export default SubmitButton;
