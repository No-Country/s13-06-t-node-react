import PropTypes from 'prop-types';

function TravelStepsHeader(props) {
  TravelStepsHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };

  return (
    <div className='text-center mb-14'>
      <h1 className='text-5xl text-midnight-slate mb-8 font-medium tracking-tight'>
        {props.title}
      </h1>
      <p className='text-lg max-w-lg mx-auto'>{props.description}</p>
    </div>
  );
}

export default TravelStepsHeader;
