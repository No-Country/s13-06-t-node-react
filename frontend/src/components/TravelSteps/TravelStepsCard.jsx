import PropTypes from 'prop-types';

TravelStepsCard.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

function TravelStepsCard(props) {
  return (
    <div className='max-w-72 '>
      <div className='w-[106px] h-[106px] bg-gray-200 rounded-[30px] flex items-center justify-center mx-auto mb-[30px]'>
        <img
          src={props.logo}
          alt='Logo de un punto de partida y punto de llegada'
        />
      </div>
      <h3 className='font-semibold text-xl tracking-tight mb-4'>
        {props.title}
      </h3>
      <p className='text-sm tracking-tight'>{props.description}</p>
    </div>
  );
}

export default TravelStepsCard;
