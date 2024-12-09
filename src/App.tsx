import "./App.css";
import { AboutUs } from "./modules/about/about-us";
import { FeaturedImages } from "./modules/focus/focus";
import { Footer } from "./modules/footers/footer";
import { Hero } from "./modules/heros/hero";
import { Navbar } from "./modules/navbar/nav";
import { Offices } from "./modules/offices/office";
import { Services } from "./modules/servis/services";
import { ShippingCalculator } from "./modules/shipping-calculator/calculator";
import { SimpleSteps } from "./modules/simple-steps/simple";
import { SocialMedia } from "./modules/social/social-media";
import { Tracking } from "./modules/tracking/trackings";
import { WhatsAppButton } from "./modules/WhatsAppButton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="hero" className="py-0">
        <Hero />
      </section>

      <section id="quiénes-somos" className="py-0">
        <AboutUs />
      </section>

      <section id="servicios" className="py-0">
        <Services />
      </section>

      <section id="seguimiento" className="py-0">
        <Tracking />
      </section>

      <section id="pasos-simples" className="py-0">
        <SimpleSteps />
      </section>

      <section id="calculadora" className="py-0">
        <ShippingCalculator />
      </section>

      <FeaturedImages />

      <section id="oficinas" className="py-0">
        <Offices />
      </section>

      <WhatsAppButton phoneNumber="+51927612947" />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
