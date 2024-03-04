import PropTypes from 'prop-types';

function InputTextAdmin({ text, placeholder, disabled }) {
  const backgroundClass = disabled
    ? 'bg-[#F1F1F1] border border-[#0000003B] border-2 text-base cursor-not-allowed'
    : `bg-'#FFF' border border-[#0000003B] border-2 ] `;

  return (
    <div className='relative m-5'>
      <label
        className={
          disabled
            ? 'absolute -top-3 left-3 bg-[#F1F1F1] rounded full px-1 font-bold text-sm'
            : 'absolute -top-3 left-3 bg-white px-1 font-bold text-sm'
        }
      >
        {text}
      </label>
      <input
        placeholder={placeholder}
        type='text'
        className={`md:w-96 w-48 h-[56px]  rounded-md py-2 px-4 text-sm font-normal ${backgroundClass}`}
        disabled={disabled}
      />
    </div>
  );
}

InputTextAdmin.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

export default InputTextAdmin;
