export const Hero = () => {
  return (
    <div className='flex items-center m-8 mr-0'>
      <div className=' mt-10 text-left p-20 '>
        <p className='font-semibold my-7'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.{' '}
        </p>
        <h1 className='font-semibold  text-5xl my-5'>
          {' '}
          LOREM IPSUM DOLOR SIT AMET CONSECTUR{' '}
        </h1>
        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, vel
          aliquid dolorem veniam consequatur minus voluptate fugit esse
          voluptatibus, reiciendis asperiores autem iste perspiciatis. Provident
          voluptates tempore vitae quae rem.
        </p>
      </div>
      <div>
        <img
          className=' rounded-tl-[100px] '
          src='https://www.voyenbus.com/assets/img/veb/veb_empresas_header_02.webp'
          alt=''
        />
      </div>
    </div>
  );
};
export default Hero;
