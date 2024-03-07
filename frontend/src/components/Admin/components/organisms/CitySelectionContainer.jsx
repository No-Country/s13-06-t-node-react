import { useState } from 'react';
import SelectedCityBadge from '../molecules/SelectedCityBadge';
import CityDropdownFilter from './CityDropdownFilter';
import PropTypes from 'prop-types';

const CitySelectionContainer = ({ label, citiesObject }) => {
  const [selectedCities, setSelectedCities] = useState([]);

  const handleCitySelect = (city) => {
    setSelectedCities([...selectedCities, city]);
  };

  const handleRemoveCity = (city) => {
    setSelectedCities(selectedCities.filter((selected) => selected !== city));
  };

  return (
    <div className='w-full p-8 flex flex-wrap border-b-2 border-[#E9EBF0] mb-2'>
      <CityDropdownFilter
        onCitySelect={handleCitySelect}
        onRemoveCity={handleRemoveCity}
        selectedCities={selectedCities}
        label={label}
        cityStatesObj={citiesObject}
      />
      {selectedCities.map((city) => (
        <SelectedCityBadge
          key={city}
          cityName={city}
          onRemove={() => handleRemoveCity(city)}
        />
      ))}
    </div>
  );
};

CitySelectionContainer.propTypes = {
  label: PropTypes.string.isRequired,
  citiesObject: PropTypes.object.isRequired
};

export default CitySelectionContainer;
