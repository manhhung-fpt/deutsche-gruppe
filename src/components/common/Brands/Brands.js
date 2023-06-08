import React from "react";
import Slider from "react-slick";
import brands from "../../../data/brands.json";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 676,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Brands = ({ style_2 = false }) => {
  return (
    <>
      {/* <!-- brand section start --> */}

      <div className={style_2 ? "tp-brand-area pb-140" : "brand"}>
        <div className="container">
          <div className="tp-brand-area">
            <Slider
              {...settings}
              className="tp-brand-slider tp-brand-silder-actiive tp-brand-border pt-60 pb-60"
            >
              {brands?.brands.map((brand) => (
                <div
                  key={brand.id}
                  className="tp-brand-item text-center scale-1"
                >
                  <img src={brand.img} alt="" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* <!-- brand section end  --> */}
    </>
  );
};

export default Brands;
