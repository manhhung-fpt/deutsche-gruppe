import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import testimonialData from "../../../data/TestimonialData.json";

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
      },
    },
  ],
};

const Testimonial = () => {
  const sliderRef = useRef(null);
  return (
    <>
      {/* <!-- testimonial slider start  --> */}
      <div className="testimonial">
        <div className="tp-testimonial-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div
                  className="tp-testimonial"
                  style={{
                    backgroundImage: `url(/assets/img/bg/testimonial.jpg)`,
                  }}
                >
                  <div
                    className={`tp-testimonial-active pt-25 pb-25 p-relative`}
                  >
                    <button
                      onClick={() => sliderRef.current?.slickPrev()}
                      type="button"
                      className="slick-prev slick-arrow d-none d-lg-block"
                    >
                      <span>
                        <i className="fal fa-angle-left"></i>
                      </span>
                    </button>
                    <Slider ref={sliderRef} {...settings}>
                      {testimonialData.testimonialData.map((item) => (
                        <div key={item.id} className="tp-testimonial-item">
                          <div className="tp-section-title-sm-box text-center">
                            <div>
                              <span>{item.title}</span>
                              <h2 className="tp-testi-reivew pt-50 pb-40">
                                {item.text1}
                                <br />
                                {item.text2}
                                <br />
                                {item.text3}
                              </h2>
                              <div className="tp-testi-meta">
                                <h3 className="tp-testi-reviewer">
                                  {item.reviewer}
                                </h3>
                                <span>{item.design}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                    <button
                      onClick={() => sliderRef.current?.slickNext()}
                      type="button"
                      className="slick-next slick-arrow d-none d-lg-block"
                    >
                      <i className="fal fa-angle-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- testimonial slider end  --> */}
    </>
  );
};

export default Testimonial;
