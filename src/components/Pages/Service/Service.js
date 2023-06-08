import React from "react";
import Brands from "../../common/Brands/Brands";
import Contact from "../../common/Contact/Contact";
import Footer from "../../common/Footer/Footer";
import Menu from "../../common/Menu/Menu";
import Testimonial from "../../common/Testimonial/Testimonial";
import OurService from "./OurService";
import ServiceAbout from "./ServiceAbout";
import ServiceBanner from "./ServiceBanner";

const Service = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <ServiceBanner />
      <OurService />
      <ServiceAbout />
      <Contact />
      <Testimonial />
      <Brands />
      <Footer />
    </>
  );
};

export default Service;
