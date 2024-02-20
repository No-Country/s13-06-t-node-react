import PropTypes from 'prop-types';

ItinerarySchedule.propTypes = {
  departingDay: PropTypes.string.isRequired,
  departingHour: PropTypes.string.isRequired,
  arrivalDay: PropTypes.string.isRequired,
  arrivalHour: PropTypes.string.isRequired
};

function ItinerarySchedule(props) {
  return (
    <>
      <div className='flex justify-between font-medium text-[#486284] text-[15px] opacity-90 tracking-tight mb-1'>
        <h3>{props.departingDay}</h3> <h3>{props.arrivalDay}</h3>
      </div>
      <div className='flex justify-between font-medium text-xl tracking-tight items-center text-[#1A202C]'>
        <time dateTime={props.departingHour}>{props.departingHour}</time>
        <time dateTime={props.arrivalHour}>{props.arrivalHour}</time>
      </div>
    </>
  );
}

export default ItinerarySchedule;
