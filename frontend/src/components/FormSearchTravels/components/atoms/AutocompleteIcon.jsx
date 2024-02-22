const AutocompleteIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6 absolute right-2 top-2/4 transform -translate-y-2/4 pointer-events-none text-gray-400'
      viewBox='0 0 20 20'
      fill='currentColor'
    >
      <path
        fillRule='evenodd'
        d='M7.293 8.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414zM10 4a1 1 0 100 2 1 1 0 000-2z'
        clipRule='evenodd'
      />
    </svg>
  );
};

export default AutocompleteIcon;
