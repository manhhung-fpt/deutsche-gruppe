import React from "react";
import Brands from "../common/Brands/Brands";
import FooterTwo from "../common/Footer/FooterTwo";
import FullScreenBtn from "../common/FullScreenBtn";
import Menu from "../common/Menu/Menu";
import Testimonial from "../common/Testimonial/Testimonial";
import BlogHomeTwo from "./BlogHomeTwo";
import GalleryHomeTwo from "./GalleryHomeTwo";
import Services from "./Services";
import SliderHomeTwo from "./SliderHomeTwo";
import TopCategoryHomePageTwo from "./TopCategoryHomePageTwo";
import TopCtaAreaTwo from "./TopCtaAreaTwo";

const HomeTwo = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <TopCtaAreaTwo />
      <SliderHomeTwo />
      <Services />
      <TopCategoryHomePageTwo />
      <GalleryHomeTwo />
      <Testimonial />
      <Brands />
      <BlogHomeTwo />
      <FullScreenBtn />
      <FooterTwo />
    </>
  );
};

export default HomeTwo;
