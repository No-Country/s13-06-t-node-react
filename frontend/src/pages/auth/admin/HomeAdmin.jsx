import DataTable from '../../../components/Admin/components/organisms/DataTable';
import CitySelectionContainer from '../../../components/Admin/components/organisms/CitySelectionContainer';

export default function HomeAdmin() {
  const nSeats = 60; // Obtener el número de Asientos 60 - 40

  // Data de Prueba
  const data = [
    {
      id: 1,
      origen: 'Mar del Plata',
      destino: 'Retiro',
      fecha: '22/02/2024',
      hora_salida: '08:00',
      hora_llegada: '14:00',
      asientos_libres: 6,
      id_vehiculo: 'AB545QA'
    },
    {
      id: 2,
      origen: 'Necochea',
      destino: 'Mar del Plata',
      fecha: '16/02/2024',
      hora_salida: '08:00',
      hora_llegada: '14:00',
      asientos_libres: 2,
      id_vehiculo: 'AB680QA'
    },
    {
      id: 3,
      origen: 'Córdoba',
      destino: 'Retiro',
      fecha: '05/02/2024',
      hora_salida: '08:00',
      hora_llegada: '14:00',
      asientos_libres: 15,
      id_vehiculo: 'AB545QA'
    },
    {
      id: 4,
      origen: 'Merlo',
      destino: 'Retiro',
      fecha: '02/02/2024',
      hora_salida: '08:00',
      hora_llegada: '14:00',
      asientos_libres: 20,
      id_vehiculo: 'AB529QA'
    },
    {
      id: 5,
      origen: 'Retiro',
      destino: 'Miramar',
      fecha: '08/01/2024',
      hora_salida: '08:00',
      hora_llegada: '14:00',
      asientos_libres: 0,
      id_vehiculo: 'AB235QA'
    },
    {
      id: 6,
      origen: 'Bariloche',
      destino: 'Retiro',
      fecha: '27/12/2023',
      hora_salida: '08:00',
      hora_llegada: '14:00',
      asientos_libres: 5,
      id_vehiculo: 'AB235QA'
    }
  ];

  const cityStates = {
    'Mar del Plata': false,
    Necochea: false,
    Miramar: false,
    Córdoba: false,
    Merlo: false,
    Retiro: false
  };

  return (
    <div className='bg-white w-full h-full p-6'>
      <CitySelectionContainer label='Origen' citiesObject={cityStates} />

      <CitySelectionContainer label='Destino' citiesObject={cityStates} />

      <DataTable data={data} nSeats={nSeats} />
    </div>
  );
}
