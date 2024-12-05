import "./App.css";
import { AboutUs } from "./modules/about/about-us";
import { Hero } from "./modules/heros/hero";
import { Navbar } from "./modules/navbar/nav";
import { Services } from "./modules/servis/services";
import { SimpleSteps } from "./modules/simple-steps/simple";
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
    </div>
  );
}

export default App;
