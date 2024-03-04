import logoText from '../../assets/Logo/logo-text.svg';
import logoIcon from '../../assets/Logo/logo-icon.svg';

function Logo() {
  return (
    <div className='flex gap-2'>
      <img src={logoIcon} />
      <img src={logoText} />
    </div>
  );
}

export default Logo;
