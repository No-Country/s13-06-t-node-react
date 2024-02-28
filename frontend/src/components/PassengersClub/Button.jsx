import PropTypes from 'prop-types';
export default function Button({ name }) {
  return (
    <button
      className={`bg-[#27C277] hover:bg-[#70e7ad] px-5 rounded-[40px] py-2 flex items-center w-40 justify-center font-semibold text-white tracking-tight mb-12 mt-8`}
    >
      {name}
    </button>
  );
}
Button.propTypes = {
  name: PropTypes.string.isRequired
};
