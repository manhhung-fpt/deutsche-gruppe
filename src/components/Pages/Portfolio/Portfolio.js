import React from "react";
import FooterThree from "../../common/Footer/FooterThree";
import Menu from "../../common/Menu/Menu";
import PortfolioBanner from "./PortfolioBanner";
import PortfolioItems from "./PortfolioItems";

const Portfolio = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <PortfolioBanner />
      <PortfolioItems />
      <FooterThree />
    </>
  );
};

export default Portfolio;
