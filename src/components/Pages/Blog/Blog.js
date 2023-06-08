import React from "react";
import FooterThree from "../../common/Footer/FooterThree";
import Menu from "../../common/Menu/Menu";
import BlogBanner from "./BlogBanner";
import BlogPost from "./BlogPost";

const Blog = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <BlogBanner />
      <BlogPost />
      <FooterThree />
    </>
  );
};

export default Blog;
