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
import Footer from "./components/Footer/Footer";
import CTA from "./components/CTA/CTA";
import Platform from "./components/Platform/Platform";

const App = () => {
  return (
    <div>
      <Hero />
      <Introduction/>
      <InfoBanner/>
      <OurServices/>
      <Platform/>
      <FAQ/>
      <RecentWorks/>
      <Testimonials/>
      <Blogs/>
      <CTA/>
      <QuoteFooter/>
      <Footer/>
    </div>
  );
};

export default App;
