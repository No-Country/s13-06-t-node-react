import PropTypes from 'prop-types';
import DropdownItem from '../../atoms/DropdownItem';

const DropdownContent = ({ filteredItems, handleItemClick }) => {
  return (
    <div className='dropdown-content bg-base-200 top-11 max-h-96 overflow-auto flex-col absolute z-30 w-full'>
      <ul className='menu menu-compact' style={{ width: '100%' }}>
        {filteredItems.map((item, index) => (
          <DropdownItem
            key={index}
            item={item}
            onClick={() => handleItemClick(item)}
          />
        ))}
      </ul>
    </div>
  );
};

DropdownContent.propTypes = {
  filteredItems: PropTypes.array.isRequired,
  handleItemClick: PropTypes.func.isRequired
};

export default DropdownContent;
