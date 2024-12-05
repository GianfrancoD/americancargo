import "./App.css";
import { AboutUs } from "./modules/about/about-us";
import { Footer } from "./modules/footers/footer";
import { Hero } from "./modules/heros/hero";
import { Navbar } from "./modules/navbar/nav";
import { Offices } from "./modules/offices/office";
import { Services } from "./modules/servis/services";
import { ShippingCalculator } from "./modules/shipping-calculator/calculator";
import { SimpleSteps } from "./modules/simple-steps/simple";
import { SocialMedia } from "./modules/social/social-media";
import { Tracking } from "./modules/tracking/trackings";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Tracking />
      <SimpleSteps />
      <ShippingCalculator />
      <Offices />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
