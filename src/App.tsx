// src/app/page.tsx o donde estés definiendo tus rutas
import { useState } from "react";
import "./App.css";
import { AboutUs } from "./modules/about/about-us";
import { ComplaintsContacts } from "./modules/contact/complaint";
import { FeaturedImages } from "./modules/focus/focus";
import { Footer } from "./modules/footers/footer";
import { Hero } from "./modules/heros/hero";
import RootLayout from "./modules/layout";
import { TermsModal } from "./modules/modals/modalsFooters";
import { Navbar } from "./modules/navbar/nav";
import { Offices } from "./modules/offices/office";
import { Services } from "./modules/servis/services";
import { ShippingCalculator } from "./modules/shipping-calculator/calculator";
import { SimpleSteps } from "./modules/simple-steps/simple";
import { SocialMedia } from "./modules/social/social-media";
import { Tracking } from "./modules/tracking/trackings";
import { WhatsAppButton } from "./modules/WhatsAppButton";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(!isModalOpen);

  const handleFormSubmit = (data: {
    claimTitle: string;
    name: string;
    trackingNumber: string;
    nationality: string;
    complaint: string;
  }) => {
    console.log("Datos de la reclamación:", data);
  };

  return (
    <RootLayout>
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

      <WhatsAppButton phoneNumber="+51927613970" />

      {/* <section
        id="complaints"
        className="py-0 bg-gradient-to-b from-white to-blue-50"
      >
        <ComplaintsContacts onSubmit={handleFormSubmit} />
      </section> */}

      <SocialMedia />
      <Footer openModal={openModal} />
      <TermsModal
        isOpen={isModalOpen}
        onClose={openModal}
        title="Reclamaciones"
      >
        <ComplaintsContacts onSubmit={handleFormSubmit} />
      </TermsModal>
    </RootLayout>
  );
}

export default App;
