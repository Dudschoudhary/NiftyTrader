import "./App.css";
import './styles/style.css';  
import SimpleSlider from "./Components/ExploreFeatures";
// import ExploreFeatures from './Components/ExploreFeatures';
// import Footer from './Components/Footer';
import Frame1 from "./Components/Frame1";

import HeaderPage from "./Components/Header";
import PricingPlan from "./Components/PricingPlan";
import StockScreening from "./Components/StockScreening";
import AccordionFql from "./Components/AccordionFql";
import BottomSection from "./Components/BottomSection";
import Footer from "./Components/Footer";

// import Testimonial from "./Components/Testimonial";
// import StockScreening from './Components/StockScreening';

function App() {
  return (
    <>
      <HeaderPage />
      <StockScreening />
      <SimpleSlider />
      
      <Frame1 />
      <PricingPlan/>
      <AccordionFql/>
      <BottomSection />
      <Footer />
      {/* <Testimonial/> */}
    </>
  );
}

export default App;
