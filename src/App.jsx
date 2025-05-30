import React from "react";
import Hero from "./components/Hero/Hero";
import Introduction from "./components/Introduction/Introduction";
import InfoBanner from "./components/InfoBanner/InfoBanner";
import OurServices from "./components/OurServices/OurServices";
import FAQ from "./components/FAQ/FAQ";
import RecentWorks from "./components/RecentWorks/RecentWorks";
import Testimonials from "./components/Testimonials/Testimonials";
import Blogs from "./components/Blogs/Blogs";
import QuoteFooter from "./components/Footer/QuoteFooter";

const App = () => {
  return (
    <div>
      <Hero />
      <Introduction/>
      <InfoBanner/>
      <OurServices/>
      <FAQ/>
      <RecentWorks/>
      <Testimonials/>
      <Blogs/>
      <QuoteFooter/>
    </div>
  );
};

export default App;
