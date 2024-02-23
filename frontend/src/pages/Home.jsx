import TravelStepsWrapper from '../components/TravelSteps/TravelStepsWrapper.jsx';
import BenefitPictures from '../components/Benefits/BenefitPictures.jsx';
import Hero from '../components/Hero/Hero.jsx';
import FormSearchTravels from '../components/FormSearchTravels/components/organisms/FormSearchTravels.jsx';
import Profits from '../components/Profits/Profits.jsx';
import TravelBenefitsSection from '../components/TravelBenefits/TravelBenefitsSection.jsx';
import Reviews from '../components/ReviewsHome/Reviews.jsx';
import SuscribeEmail from '../components/SuscribeEmail.jsx';


function Home() {
  return (
    <main>
      <Hero />
      <FormSearchTravels />
      <TravelStepsWrapper />
      <Profits />
      <BenefitPictures />
      <TravelBenefitsSection />
      <Reviews />
      <SuscribeEmail />
    </main>
  );
}

export default Home;
