import bus from '../../assets/bus-icon.svg';
import arrow from '../../assets/arrow.svg';
import Schedule from './Schedule';
import arrowBack from '../../assets/arrow-back.svg';
import BackButton from '../BackButton';
import ContinueButton from '../ContinueButton';

export default function ChooseTravel() {
  return (
    <div className='flex items-center justify-evenly lg:flex-row flex-col md:mx-0 mx-2 mt-6'>
      <div className='lg:w-2/5 w-full'>
        <div className='flex my-7'>
          <img src={bus} alt='' />
          <div>
            <p>Elige tu viaje de ida</p>

            <p className='flex gap-4 justify-center'>
              Buenos Aires <img src={arrow} alt='' /> Mar del Plata
            </p>
          </div>
        </div>

        <div>
          <p className='font-semibold text-xl mb-4'>Jueves 14 de Marzo 2024 </p>
          <Schedule
            departure={'8:00PM'}
            arrival={'12:45PM'}
            origin={'Buenos Aires'}
            destination={'Mar del Plata'}
          />
          <Schedule
            departure={'12:00PM'}
            arrival={'4:45AM'}
            origin={'Mar del Plata'}
            destination={'Buenos Aires'}
          />
        </div>
        <div className='flex justify-between mt-5'>
          <div className='md:hidden flex bg-[#D97706] rounded-full items-center pl-3 relative w-11 h-11 '>
            <img src={arrowBack} alt='' />
          </div>
          <BackButton />
          <ContinueButton />
        </div>
      </div>
      <div className='lg:w-2/5 w-full'>
        <img
          className='lg:block hidden w-[497px] h-96'
          src='https://s3-alpha-sig.figma.com/img/6d53/1eb5/fa7d270debbd2fcce88a2c006bcb78b2?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lLft49JTHBw3aiCBlNZ8obZBtDJ694GkU56xxQ5zqdTDGkID0q8ImY8C5HyfXWxnGFOtCrWbW8iCVchyYTtN8akI4QbwKwoU1yUAKpNzXfboHRVOhD2JJFyfmzEhoU3mOT0f20o-Iq8QDX-4eFexFYL1Shmkv6sNM03Codv1PN4AkpT-IOg9gAB7P55KQ~tw5jS7PzIHdfpLOacitdhkPKAku60jMQuVZ1rJLmRzMeHOh~KnG2aWt~J6vwSB1GIUf-JfgIaWnXUi9P4Dnh7JC8HYpLYvA9Snk4wVZZDGlUcH1UNWkdyF7o1X3ixmrqpI8WlcGug8IZfq6IZtvA6GSA__'
          alt=''
        />
      </div>
    </div>
  );
}
