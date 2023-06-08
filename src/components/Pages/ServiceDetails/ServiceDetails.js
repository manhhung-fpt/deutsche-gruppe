import React from "react";
import Contact from "../../common/Contact/Contact";
import FooterThree from "../../common/Footer/FooterThree";
import Menu from "../../common/Menu/Menu";
import ServiceDetailsAbout from "./ServiceDetailsAbout";
import ServiceDetailsBanner from "./ServiceDetailsBanner";

const ServiceDetails = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <ServiceDetailsBanner />
      <ServiceDetailsAbout />
      <Contact />
      <FooterThree />
    </>
  );
};

export default ServiceDetails;
