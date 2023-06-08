import React from "react";
import Brands from "../../common/Brands/Brands";
import Contact from "../../common/Contact/Contact";
import FooterThree from "../../common/Footer/FooterThree";
import Menu from "../../common/Menu/Menu";
import Testimonial from "../../common/Testimonial/Testimonial";
import PriceBanner from "./PriceBanner";
import PriceDetails from "./PriceDetails";

const Price = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <PriceBanner />
      <PriceDetails />
      <Testimonial />
      <Brands style_2={true} />
      <Contact />
      <FooterThree />
    </>
  );
};

export default Price;
