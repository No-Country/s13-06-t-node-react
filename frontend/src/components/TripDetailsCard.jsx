import PropTypes from 'prop-types';
import HorizontalLabelPair from './BusTripDetails/components/atoms/HorizontalLabelPair';
import TimeRange from './BusTripDetails/components/atoms/TimeRange';
import TripDetailsHeader from './BusTripDetails/components/atoms/TripDetailsHeader';
import LocationArrowRow from './BusTripDetails/components/molecules/LocationArrowRow';
import BusIcon from '../assets/bus-icon.svg';

function TripDetailsCard({
  title,
  startLocation,
  endLocation,
  arrowImage,
  departureDate,
  arrivalDate,
  startTime,
  endTime
}) {
  return (
    <div className='bg-[#DEE5ED] rounded-md p-3 flex flex-col mb-8'>
      <TripDetailsHeader title={title} />

      <HorizontalLabelPair leftLabel='Salida' rightLabel='Llegada' />
      <div className='grid grid-cols-3'>
        <div className='col-span-3'>
          <LocationArrowRow
            startLocation={startLocation}
            endLocation={endLocation}
            arrowImage={arrowImage}
          />
        </div>
      </div>

      <HorizontalLabelPair leftLabel={departureDate} rightLabel={arrivalDate} />

      <TimeRange startTime={startTime} endTime={endTime} />

      <img src={BusIcon} className='w-6 h-7 mx-auto' />
    </div>
  );
}

TripDetailsCard.propTypes = {
  title: PropTypes.string.isRequired,
  startLocation: PropTypes.string.isRequired,
  endLocation: PropTypes.string.isRequired,
  arrowImage: PropTypes.string.isRequired,
  departureDate: PropTypes.string.isRequired,
  arrivalDate: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired
};

export default TripDetailsCard;
