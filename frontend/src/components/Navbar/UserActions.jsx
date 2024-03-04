import person from '../../assets/Navbar/person.svg';

export const UserActions = () => {
  return (
    <button className='flex justify-center items-center space-x-2 bg-[#2F89B9] text-white md:px-4 py-2 rounded-md'>
      <img src={person} className='size-5' />
      <span className='navbar-text'>MI CUENTA</span>
    </button>
  );
};
