import PropTypes from 'prop-types';
import checkCircle from '../../assets/CreditCardForm/check-circle.svg';

function MailInput({ id, placeholder, value, onChange, isValid }) {
  return (
    <div className='relative'>
      <input
        className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-12'
        id={id}
        type='email'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {isValid && (
        <img
          src={checkCircle}
          className='absolute top-1/2 right-3 transform -translate-y-1/2 h-5 w-5'
        />
      )}
    </div>
  );
}

MailInput.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isValid: PropTypes.bool.isRequired
};

export default MailInput;
