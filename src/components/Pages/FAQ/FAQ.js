import React from "react";
import Contact from "../../common/Contact/Contact";
import FooterThree from "../../common/Footer/FooterThree";
import Menu from "../../common/Menu/Menu";
import Accordion from "./Accordion";
import FaqBanner from "./FaqBanner";

const FAQ = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <FaqBanner />
      <Accordion />
      <Contact />
      <FooterThree />
    </>
  );
};

export default FAQ;
