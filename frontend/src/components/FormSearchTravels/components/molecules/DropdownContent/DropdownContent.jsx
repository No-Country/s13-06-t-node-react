import PropTypes from 'prop-types';
import DropdownItem from '../../atoms/DropdownItem';

const DropdownContent = ({ filteredOptions, onItemClick }) => {
  return (
    <ul className='bg-base-200 top-11 max-h-96 overflow-auto flex-col absolute z-30 w-full'>
      {filteredOptions.map((city, index) => (
        <DropdownItem key={index} city={city} onItemClick={onItemClick} />
      ))}
    </ul>
  );
};

DropdownContent.propTypes = {
  filteredOptions: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default DropdownContent;
