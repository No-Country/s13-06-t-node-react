export default function PassengersClub() {
  return (
    <div className='bg-[#DEE5ED] md:mt-16 m-0 p-3 rounded-lg flex flex-col justify-center items-center'>
      <div className='bg-[#A3DEC2] mt-3 w-24 h-24 rounded-full flex items-center justify-center overflow-hidden'>
        <img
          className='object-cover p-2 w-full h-full rounded-full'
          src='https://s3-alpha-sig.figma.com/img/d755/f100/7f9a4b47bcf29ae30f655d1b142debc4?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M3Yx99LJvR9aWhoymNaLGeL83aNTrYqWJhsWZoe6Ee4o3q9d-~D8RllgDSOklcFoCT3X-YxEuodRHv3oQUmiEAPqD19QN2yzHm1-7Z2td2AL3KF5jdjrLDu99z0HEvWjXlbFbdXwNFMZSSiNa0yDw6wtdMio3iG3wNjdgGfkTWaprCMigk0fEmhlZmRjVQ3~1ylQNxLEo4slWs-b7wHUbIzviBsQbSTx7~tD5DA15HpB~SfZil~SnagFlcIkRyBDidkZxjHelgQyfSep1-qGwpxledrIzVHym6XLJWjjr44DEb32k-Ky4JC-0uUDWyg1XSXOvtvfOWhI~10~e0UPHQ__'
          alt=''
        />
      </div>
      <div className='text-center mt-2 text-xl font-bold text-[#1A202C] pt-5'>
        Club de pasajeros
      </div>
      <p className='text-center mt-2 text-base font-medium text-[#3A556A]'>
        Suma no solo kilómetros sino también historias que contar
      </p>
      <div className='flex justify-between items-center w-full px-2 pt-12 border-b-[1px] pb-2 border-[#576F8E]'>
        <p className='text-base font-bold text-[#1A202C]'>KM acomulados</p>
        <p className='text-lg font-bold text-[#1A202C]'>2800</p>
      </div>
      <div className='flex justify-between items-center w-full px-2 pt-2 border-b-[1px] pb-2 border-[#576F8E]'>
        <p className='text-base font-bold text-[#1A202C]'>KM acomulados</p>
        <p className='text-lg font-bold text-[#1A202C]'>+1600</p>
      </div>
      <div className='flex justify-end w-full pt-2 px-2 gap-5 items-center'>
        <p className='text-base font-bold text-[#1A202C]'>Total: </p>
        <p className='text-lg font-bold text-[#1A202C]'>2800</p>
      </div>
      <button
        className={`bg-[#27C277] hover:bg-[#70e7ad] px-5 rounded-[40px] py-2 flex items-center w-40 justify-center font-semibold text-white tracking-tight mb-12 mt-8`}
      >
        Ver detalle
      </button>
    </div>
  );
}
