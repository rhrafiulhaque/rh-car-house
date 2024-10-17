import React from "react";
import Blog from "../Blog/Blog";
import AboutUs from "./AboutUs";
import CarSection from "./CarSection";
import ContactUs from "./ContactUs";
import DiscrountBanner from "./DiscrountBanner";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Hero from "./Hero";
import HomeBrands from "./HomeBrands";
import HowitWorks from "./HowitWorks";
import Navbar from "./Navbar";
import WhyChooseUs from "./WhyChooseUs";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <HowitWorks />
      <HomeBrands />
      <CarSection />
      <WhyChooseUs />
      <FAQ />
      <DiscrountBanner />
      <ContactUs />
      <Blog />
      <Footer />
    </div>
  );
};

export default Homepage;
