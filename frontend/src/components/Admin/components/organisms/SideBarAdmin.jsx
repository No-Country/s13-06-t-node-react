import randomUserAvatar from '../../../../assets/UserNavbar/random-user-avatar.webp';
import rutas from '../../../../assets/AdminUsuario/rutas.svg';
import terminales from '../../../../assets/AdminUsuario/terminal.svg';
import ajuste from '../../../../assets/AdminUsuario/ajuste.svg';
import bus from '../../../../assets/AdminUsuario/bus.svg';
import pasajeros from '../../../../assets/AdminUsuario/pasajeros.svg';
import pagos from '../../../../assets/AdminUsuario/pagos.svg';
import arrow from '../../../../assets/AdminUsuario/arrow-down.svg';
import { Link } from 'react-router-dom';

export default function SideBarAdmin() {
  const name = 'Ariel Mendez';
  const misterminales = '16';
  const misrutas = '8';
  return (
    <div className='w-full h-screen pl-6 pt-16 border-r-2 border-blue-gray-50  mr-[52px]'>
      <div className='my-[30px]'></div>

      <div className='flex my-[30px] ml-6 items-center mb-16'>
        <span className='relative inline-block mr-4 '>
          <img
            className='h-[60px] w-[60px] rounded-full'
            src={randomUserAvatar}
            alt='Avatar'
          />
        </span>
        <div>
          <p className='font-bold text-lg'> {name}</p>
          <p> Administrador</p>
        </div>
      </div>

      <hr className='mx-auto my-2  w-[70%] border-blue-gray-50' />

      <div className='ml-4'>
        <details className='daisy-collapse w-full  '>
          <summary className='daisy-collapse-title text-xl font-medium '>
            <div className='flex items-center justify-between'>
              <div className='flex gap-2'>
                <img className='w-[27px]' src={terminales} />
                <Link to='/admin'>
                  <p className='font-semibold text-lg'>Terminales</p>
                </Link>
              </div>
              <div>
                <img className='w-4' src={arrow} />
              </div>
            </div>
          </summary>
          <div className='daisy-collapse-content w-[250px] '>
            <div className='flex items-center justify-between mb-5'>
              <div className='flex gap-2'>
                <img className='w-[27px]' src={''} />
                <Link to='/admin/createTerminal'>
                  <p className='font-semibold text-lg'>Crear</p>
                </Link>
              </div>
              <div>
                <img className='w-4' src={''} />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex gap-2'>
                <img className='w-[27px]' src={''} />
                <Link to='/admin/myTerminals'>
                  <p className='font-semibold text-lg'>Mis terminales</p>
                </Link>
              </div>
              <div className='bg-[#007AFF1A] rounded-full w-7 h-6 text-center'>
                <p>{misterminales}</p>
              </div>
            </div>
          </div>
        </details>

        <details className='daisy-collapse w-full '>
          <summary className='daisy-collapse-title text-xl font-medium '>
            <div className='flex items-center justify-between'>
              <div className='flex gap-2'>
                <img className='w-[27px]' src={rutas} />
                <p className='font-semibold text-lg'>Rutas</p>
              </div>
              <div>
                <img className='w-4' src={arrow} />
              </div>
            </div>
          </summary>
          <div className='daisy-collapse-content w-[250px] '>
            <div className='flex items-center justify-between mb-5'>
              <div className='flex gap-2'>
                <img className='w-[27px]' src={''} />
                <Link to='/admin/CreateRoute'>
                  <p className='font-semibold text-lg'>Crear</p>
                </Link>
              </div>
              <div>
                <img className='w-4' src={''} />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex gap-2'>
                <img className='w-[27px]' src={''} />
                <Link to='/admin/myRoutes'>
                  <p className='font-semibold text-lg'>Mis rutas</p>
                </Link>
              </div>
              <div className='bg-[#007AFF1A] rounded-full w-7 h-6 text-center'>
                <p>{misrutas}</p>
              </div>
            </div>
          </div>
        </details>

        <details className='daisy-collapse  '>
          <summary className='daisy-collapse-title text-xl font-medium '>
            <div className='flex items-center justify-between'>
              <div className='flex gap-2'>
                <img className='w-[27px]' src={bus} />
                <p className='font-semibold text-lg'>Servicios</p>
              </div>
              <div>
                <img className='w-4' src={arrow} />
              </div>
            </div>
          </summary>
          <div className='daisy-collapse-content w-[250px] '>
            <div className='flex items-center justify-between mb-5'>
              <div className='flex gap-2'>
                <img className='w-[27px]' src={''} />

                <Link to='/admin/myServices'>
                  <p className='font-semibold text-lg'>Crear</p>
                </Link>
              </div>

              <div>
                <img className='w-4' src={''} />
              </div>
            </div>
          </div>
        </details>

        <div className='flex items-center justify-between w-full p-[16px] pr-12'>
          <div className='flex gap-2'>
            <img className='w-[27px]' src={pagos} />
            <p className='font-semibold text-lg'>Pagos</p>
          </div>
        </div>

        <div className='flex items-center justify-between w-full p-[16px] pr-12'>
          <div className='flex gap-2'>
            <img className='w-[27px]' src={pasajeros} />
            <p className='font-semibold text-lg'>Pasajeros</p>
          </div>
        </div>

        <div className='flex items-center justify-between w-full p-[16px] pr-12'>
          <div className='flex gap-2'>
            <img className='w-[27px]' src={ajuste} />
            <p className='font-semibold text-lg'>Ajustes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
