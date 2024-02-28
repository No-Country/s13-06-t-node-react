import PropTypes from 'prop-types';

const DropdownItem = ({ city, onItemClick }) => {
  return (
    <li
      className='border-b border-b-base-content/10 w-full p-1 text-sm'
      onClick={() => onItemClick(city)}
    >
      <button type='button'>{city}</button>
    </li>
  );
};

DropdownItem.propTypes = {
  city: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default DropdownItem;
