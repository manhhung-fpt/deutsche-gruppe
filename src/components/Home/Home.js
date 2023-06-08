import React from "react";
import Footer from "../common/Footer/Footer";
import Menu from "../common/Menu/Menu";
// import Gallery from "./Gallery";
import Team from "../common/Team/Team";
import Feature from "./Feature";
import Testimonial from "../common/Testimonial/Testimonial";
import Brands from "../common/Brands/Brands";
import LastedBlog from "./LastedBlog";
import FullScreenBtn from "../common/FullScreenBtn";
import TopAbout from "./TopAbout";
// import TopCtaArea from "./TopCtaArea";
import TopFooter from "../common/TopFooter/TopFooter";
import HomeSlider from "./HomeSlider";

const Home = () => {
  return (
    <>
      <Menu />
      <HomeSlider />
      <TopAbout />
      {/* <TopCtaArea /> */}
      {/* <Gallery /> */}
      <Feature />
      <Team />
      {/* <Testimonial /> */}
      <Brands />
      <LastedBlog />
      <FullScreenBtn />
      <TopFooter />
      <Footer />
    </>
  );
};

export default Home;
