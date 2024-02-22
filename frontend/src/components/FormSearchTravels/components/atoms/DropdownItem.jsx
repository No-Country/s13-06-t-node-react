import PropTypes from 'prop-types';

const DropdownItem = ({ item, onClick }) => {
  return (
    <li
      className='border-b border-b-base-content/10 w-full p-1 text-sm'
      onClick={onClick}
    >
      <button type='button'>{item}</button>
    </li>
  );
};

DropdownItem.propTypes = {
  item: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default DropdownItem;
