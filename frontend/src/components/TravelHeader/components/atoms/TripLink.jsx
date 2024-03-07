import PropTypes from 'prop-types';

function TripLink({ link, text }) {
  return (
    <div className='lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-1 flex items-center lg:justify-center md:justify-start justify-center'>
      <a
        href={link}
        className='text-midnight-slate sm:text-[#1A202C] font-semibold pr-2 uppercase whitespace-nowrap md:text-base text-xs'
      >
        {text}
      </a>
    </div>
  );
}

TripLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default TripLink;
