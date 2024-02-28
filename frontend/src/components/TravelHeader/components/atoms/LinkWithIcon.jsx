import PropTypes from 'prop-types';

function LinkWithIcon({ link, iconSrc, altText, text, position }) {
  return (
    <div className='sm:mx-2 sm:col-span-1 text-midnight-slate'>
      <a
        href={link}
        className={`flex items-center md:justify-center justify-${position} whitespace-nowrap`}
      >
        <img src={iconSrc} alt={altText} className='mr-2' />
        <span>{text}</span>
      </a>
    </div>
  );
}

LinkWithIcon.propTypes = {
  link: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};

export default LinkWithIcon;
