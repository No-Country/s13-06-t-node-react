import PropTypes from 'prop-types';

function SingleCityLink({ href, text }) {
  return (
    <a
      href={href}
      className='mr-2 text-balance whitespace-nowrap sm:col-span-1 text-midnight-slate'
    >
      {text}
    </a>
  );
}

SingleCityLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default SingleCityLink;
