import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ContinueButton({ to, label, disabled }) {
  const backgroundClass = disabled
    ? 'bg-[#A0A0A0] border border-[#A0A0A0] text-base cursor-not-allowed'
    : 'bg-[#D97706]';
  const href = disabled ? '/ticket/passengers' : to;

  return (
    <Link
      to={href}
      className={`block text-center text-white ${backgroundClass} rounded-full w-40  font-semibold hover:text-white py-2 px-6 text-base`}
      disabled={disabled}
    >
      {label}
    </Link>
  );
}

ContinueButton.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default ContinueButton;
