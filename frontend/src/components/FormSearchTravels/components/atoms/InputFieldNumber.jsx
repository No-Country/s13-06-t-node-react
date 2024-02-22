import PropTypes from 'prop-types';

function InputFieldNumber({ id, value }) {
  return (
    <input
      id={id}
      type='text'
      value={value}
      className='bg-gray-50 border h-11 text-center text-gray-700 text-sm block w-full py-2 focus:outline-none'
      placeholder='1'
      required
      readOnly
    />
  );
}
InputFieldNumber.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default InputFieldNumber;
