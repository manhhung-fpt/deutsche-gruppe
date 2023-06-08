import React from "react";
import FooterThree from "../../common/Footer/FooterThree";
import Menu from "../../common/Menu/Menu";
import PortfolioDetailsBanner from "./PortfolioDetailsBanner";
import PortfolioDetailsSingle from "./PortfolioDetailsSingle";

const PortfolioDetails = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <PortfolioDetailsBanner />
      <PortfolioDetailsSingle />
      <FooterThree />
    </>
  );
};

export default PortfolioDetails;
