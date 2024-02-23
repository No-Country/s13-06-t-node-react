function TripReservation() {
  return (
    <div className='bg-[#CED7E4] flex-grow w-full p-4'>
      <div className='h-full'>
        <div className='grid md:grid-cols-4 grid-cols-1 h-full md:gap-4 gap-2 mx-auto'>
          {/* Columna 1 */}
          <div className='bg-blue-200 p-4 col-span-1'>
            Contenido de la Columna 1
          </div>

          {/* Columna 2 */}
          <div className='bg-green-200 p-4 md:col-span-2 col-span-1'>
            Contenido de la Columna 2
          </div>

          {/* Columna 3 */}
          <div className='bg-yellow-200 p-4 col-span-1'>
            Contenido de la Columna 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripReservation;
