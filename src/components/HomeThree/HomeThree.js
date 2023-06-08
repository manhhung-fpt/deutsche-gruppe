import React from "react";
import Brands from "../common/Brands/Brands";
import Footer from "../common/Footer/Footer";
import FooterThree from "../common/Footer/FooterThree";
import FullScreenBtn from "../common/FullScreenBtn";
import Menu from "../common/Menu/Menu";
import Team from "../common/Team/Team";
import Testimonial from "../common/Testimonial/Testimonial";
import AboutThree from "./AboutThree";
import BlogThree from "./BlogThree";
import CategoryThree from "./CategoryThree";
import ContactThree from "./ContactThree";
import PortfolioThree from "./PortfolioThree";
import Promotion from "./Promotion";
import SliderHomeThree from "./SliderHomeThree";

const HomeThree = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <SliderHomeThree />
      <AboutThree />
      <CategoryThree />
      <FullScreenBtn />
      <PortfolioThree />
      <Promotion />
      <Team />
      <Testimonial />
      <Brands />
      <ContactThree />
      <BlogThree />
      <FooterThree />
    </>
  );
};

export default HomeThree;
