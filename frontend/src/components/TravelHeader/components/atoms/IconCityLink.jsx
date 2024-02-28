import PropTypes from 'prop-types';

function IconCityLink({ iconSrc, iconAlt, href, text }) {
  return (
    <div className='flex items-center justify-between text-midnight-slate'>
      <img src={iconSrc} alt={iconAlt} className='w-4 h-4' />
      <a
        href={href}
        className='ml-2 text-balance whitespace-nowrap sm:col-span-1 truncate'
      >
        {text}
      </a>
    </div>
  );
}

IconCityLink.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default IconCityLink;
