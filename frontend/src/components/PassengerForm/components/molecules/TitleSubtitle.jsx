import TitleForm from '../atoms/TitleForm';
import SubtitleForm from '../atoms/SubtitleForm';

function TitleSubtitle() {
  return (
    <div className='mb-3 md:h-16'>
      <TitleForm title='¿Quiénes Viajan?' />
      <SubtitleForm subtitle='Información de Pasajeros' />
    </div>
  );
}

export default TitleSubtitle;
