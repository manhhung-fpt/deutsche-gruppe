import React from "react";
import Brands from "../../common/Brands/Brands";
import FooterThree from "../../common/Footer/FooterThree";
import Menu from "../../common/Menu/Menu";
import Testimonial from "../../common/Testimonial/Testimonial";
import TeamAbout from "./TeamAbout";
import TeamBanner from "./TeamBanner";

const TeamPage = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <TeamBanner />
      <TeamAbout />
      <Testimonial />
      <Brands />
      <FooterThree />
    </>
  );
};

export default TeamPage;
