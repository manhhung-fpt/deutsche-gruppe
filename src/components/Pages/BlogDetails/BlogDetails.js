import React from "react";
import FooterThree from "../../common/Footer/FooterThree";
import Menu from "../../common/Menu/Menu";
import BlogDetailsBanner from "./BlogDetailsBanner";
import BlogDetailsPost from "./BlogDetailsPost";

const BlogDetails = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <BlogDetailsBanner />
      <BlogDetailsPost />
      <FooterThree />
    </>
  );
};

export default BlogDetails;
