import React from "react";
import Hero from "./components/Hero/Hero";
import Introduction from "./components/Introduction/Introduction";
import InfoBanner from "./components/InfoBanner/InfoBanner";
import OurServices from "./components/OurServices/OurServices";
import FAQ from "./components/FAQ/FAQ";

const App = () => {
  return (
    <div>
      <Hero />
      <Introduction/>
      <InfoBanner/>
      <OurServices/>
      <FAQ/>
    </div>
  );
};

export default App;
