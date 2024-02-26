import PropTypes from 'prop-types';

function TextInput({ id, placeholder }) {
  return (
    <div className='mb-4'>
      <input
        className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id={id}
        type='text'
        placeholder={placeholder}
      />
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default TextInput;
