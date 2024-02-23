import { useState } from 'react';

export default function Reviews() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(3);
  const [cards] = useState([
    {
      id: 1,
      name: 'Mario P',
      city: 'Cali, Colombia',
      description: 'Me gustó mucho viajar con xxx, la atención impecable!',
      photo:
        'https://img.buzzfeed.com/buzzfeed-static/static/2022-08/4/21/asset/e31a96016911/sub-buzz-4539-1659648129-11.jpg?resize=990:990'
    },
    {
      id: 2,
      name: 'Ana R',
      city: 'Madrid, España',
      description:
        'Una experiencia increíble con un servicio de transporte muy puntual y confortable.',
      photo:
        'https://th.bing.com/th/id/OIP.GCvayzsGawPDF0kdx5J6AgAAAA?rs=1&pid=ImgDetMain'
    },
    {
      id: 3,
      name: 'Carlos S',
      city: 'Buenos Aires',
      description:
        'El servicio de transporte de xxx superó mis expectativas, viajé de forma segura y cómoda.',
      photo:
        'https://appliancechat.com/wp-content/uploads/2023/01/This-Person-Does-Not-Exist-bloke-297x300.png'
    },
    {
      id: 4,
      name: 'Luisa M',
      city: 'Santiago, Chile',
      description:
        'Increíble experiencia viajando con xxx, los buses son modernos y el personal muy amable.',
      photo:
        'https://cdn.pixabay.com/photo/2021/06/11/12/25/woman-6328460_640.jpg'
    },
    {
      id: 5,
      name: 'Pedro G',
      city: 'Lima, Perú',
      description:
        'Un viaje en bus muy enriquecedor, pude disfrutar del paisaje y la comodidad del transporte.',
      photo: 'https://f.rpp-noticias.io/2019/02/15/753296descarga-7jpg.jpg'
    },
    {
      id: 6,
      name: 'María L',
      city: ' México',
      description:
        'Los buses de xxx son una excelente opción para viajar, disfruté cada momento del recorrido.',
      photo:
        'https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/trans.jpg?resize=500%2C500&ssl=1'
    },
    {
      id: 7,
      name: 'Elena F',
      city: 'Barcelona, España',
      description:
        'Recomiendo ampliamente los servicios de transporte de xxx, una manera cómoda y segura de explorar la ciudad.',
      photo:
        'https://th.bing.com/th/id/OIP.PJ_SjKDnLinFZkGtedBc9gHaHW?pid=ImgDet&w=474&h=470&rs=1'
    },
    {
      id: 8,
      name: 'Ricardo D',
      city: ' Uruguay',
      description:
        'Viajar con xxx fue una experiencia muy placentera, el personal fue muy atento en todo momento.',
      photo:
        'https://i.pinimg.com/736x/35/1f/96/351f969eaba2846d47008cf9e2cc157a.jpg'
    },
    {
      id: 9,
      name: 'Julia C',
      city: 'Bogotá, Colombia',
      description:
        'El servicio de transporte de xxx es excelente, los buses son cómodos y el personal muy amable.',
      photo:
        'https://th.bing.com/th/id/OIP.NER8CbkqvbPkm9pHg5BgqAAAAA?w=320&h=320&rs=1&pid=ImgDetMain'
    },
    {
      id: 10,
      name: 'Diego M',
      city: ' Argentina',
      description:
        'Tuve una experiencia muy positiva viajando con xxx, definitivamente volveré a elegirlos en mi próximo viaje.',
      photo:
        'https://media.licdn.com/dms/image/C4E03AQF0yz3hvk-Rbg/profile-displayphoto-shrink_800_800/0/1624281187973?e=2147483647&v=beta&t=IV8WKBu_74isfS9q_l_sn2QbpJKUmQHYSDMOvWOhL9A'
    },
    {
      id: 11,
      name: 'Laura S',
      city: 'São Paulo, Brasil',
      description:
        'Los buses de xxx son una excelente opción para recorrer la ciudad, lo recomiendo a todos los viajeros.',
      photo:
        'https://th.bing.com/th/id/R.1687e7b929a7d0704c73cca91f3e3e73?rik=Nm9NQ33ypnND9g&riu=http%3a%2f%2f4.bp.blogspot.com%2f-GZ--8Dg4nRM%2fUHT5JxFnwoI%2fAAAAAAAAA_4%2fMuL_WI78oDg%2fs320%2f58b_PQARSMA.jpg&ehk=%2fX6hoiylIhe3qcj0CCAc2U%2fx3vpPf%2f%2biiY6Cs8cE%2fak%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 12,
      name: 'Fernando G',
      city: 'Quito, Ecuador',
      description:
        'Viajar con xxx fue una experiencia única, los paisajes que pude disfrutar desde el bus fueron impresionantes.',
      photo:
        'https://i.pinimg.com/736x/14/db/c6/14dbc67bb2573e80cf9ef5de3918eea5.jpg'
    },
    {
      id: 13,
      name: 'Marta P',
      city: 'Venezuela',
      description:
        'El servicio de transporte de xxx es excelente, pude viajar de forma segura y sin contratiempos.',
      photo:
        'https://freehookup.dating/7c15014f51616d45bd4da8b6068996fd/57600189_small.jpg'
    },
    {
      id: 14,
      name: 'Roberto L',
      city: 'Lisboa, Portugal',
      description:
        'Tuve una experiencia muy agradable viajando con xxx, definitivamente los elegiré en mi próximo viaje.',
      photo:
        'https://media.licdn.com/dms/image/C5603AQHO72t-AWXq4A/profile-displayphoto-shrink_800_800/0/1516812115448?e=2147483647&v=beta&t=lZc62JGz3sN5cmClsH9sxqtqzm2Lvc8fbZfGVAqEk80'
    },
    {
      id: 15,
      name: 'Carolina V',
      city: 'Cali, Colombia',
      description:
        'Los buses de xxx son muy cómodos y seguros, tuve un viaje tranquilo y placentero.',
      photo:
        'https://th.bing.com/th/id/OIP.UaBhO-PyjmDk84eD5r3DqAHaHa?rs=1&pid=ImgDetMain'
    }
  ]);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filledStars = Math.floor(Math.random() * 2) + 4;
  const emptyStars = 5 - filledStars;

  return (
    <div className='mb-7'>
      <div className='text-center mt-10'>
        <h3 className='m-9 font-semibold text-3xl '>Reseñas </h3>
        <p className='max-w-xl mx-auto'>
          Descubre lo que dicen nuestros clientes sobre su experiencia con
          nosotros. Sus opiniones son importantes y nos ayudan a mejorar
          continuamente.{' '}
        </p>
      </div>

      <div className='flex justify-center mt-3 flex-wrap'>
        {currentCards.map((card) => (
          <div key={card.id}>
            <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  m-4 h-56 '>
              <div className='flex justify-between'>
                <div className='flex'>
                  <div className='w-12 daisy-mask daisy-mask-squircle mr-6'>
                    <img src={card.photo} />
                  </div>

                  <div>
                    <p className='font-medium text-lg'>{card.name} </p>
                    <p className='font-normal text-sm'>{card.city}</p>
                  </div>
                </div>

                <div className='flex justify-center items-center'>
                  <div className='flex items-center mt-2 mb-4'>
                    {[...Array(filledStars)].map((_, index) => (
                      <svg
                        key={index}
                        className='mx-1 w-4 h-4 fill-current text-yellow-500'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                      >
                        <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                      </svg>
                    ))}
                    {[...Array(emptyStars)].map((_, index) => (
                      <svg
                        key={index}
                        className='mx-1 w-4 h-4 fill-current text-gray-400'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                      >
                        <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <p className='mb-3 mt-4 font-light'>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div aria-label='Page navigation ' className='flex justify-center w-full'>
        <div className='flex  items-center justify-center md:justify-around w-full gap-10 md:gap-0  '>
          <div className='flex gap-4 '>
            {[...Array(totalPages)].map((_, index) => (
              <div key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`w-3 h-3 text-[#1A202C] transition-colors duration-150 rounded-full focus:outline-none ${currentPage === index + 1 ? ' bg-black w-7 ' : 'bg-slate-500 w-3'}`}
                ></button>
              </div>
            ))}
          </div>

          <div className='flex   md:ml-96'>
            <div>
              <button
                onClick={handlePrevious}
                className={`w-10 h-10 text-[#1A202C] transition-colors duration-150 rounded-full focus:outline-none ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentPage === 1}
              >
                <svg className='w-6 h-6 fill-current' viewBox='0 0 20 20'>
                  <path d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'></path>
                </svg>
              </button>
            </div>

            <div>
              <button
                onClick={handleNext}
                className={`w-10 h-10 text-[#1A202C] transition-colors duration-150 rounded-full focus:outline-none ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentPage === totalPages}
              >
                <svg className='w-6 h-6 fill-current' viewBox='0 0 20 20'>
                  <path d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'></path>
                </svg>
              </button>
            </div>
          </div>

          <div />
        </div>
      </div>
    </div>
  );
}
