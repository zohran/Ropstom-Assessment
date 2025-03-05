import './App.css';
import Testimonials from './components/clients';
import CurrentStates from './components/current-states';
import Footer from './components/footer';
import { Hero } from './components/hero';
import Partnaship from './components/partnaship';
import PromoBanner from './components/promo-banner';
import Stats from './components/stats';
import Steps from './components/steps';

function App() {

  return (
    <div className="min-h-screen flex flex-col overflow-y-auto">
      <Hero/>
      <Stats/>
      <PromoBanner/>
      <Testimonials/>
      <Steps/>
      <CurrentStates/>
      <Partnaship/>
      <Footer/>
    </div>
  );
}

export default App;