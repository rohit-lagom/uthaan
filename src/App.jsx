import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import Platform from "./components/Platform/Platform";
import Testimonials from "./components/Testimonials/Testimonials";
import Blogs from "./components/Blogs/Blogs";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import Problem from "./components/Problem/Problem";
import Solution from "./components/Solution/Solution";
import PolicyFit from "./components/PolicyFit/PolicyFit";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import StakeholderWins from "./components/StakeHolders/StakeHolders";
import PilotMetrics from "./components/PilotMetrics/PilotMetrics";
import Roadmap from "./components/Roadmap/Roadmap";

const App = () => {
  return (
    <div>
      <Hero />
      <Problem />
      <Solution />
      <PolicyFit />
      <HowItWorks />
      <StakeholderWins />
      <PilotMetrics />
      <Platform />
      <Benefits />
      <Roadmap />
      <Testimonials />
      <Blogs />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
