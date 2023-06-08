import { useRef } from "react";
import slider2 from "../../data/SliderHomePageTwo.json";
import Slider from "react-slick";

const settings = {
  autoplay: true,
  autoplaySpeed: 4000,
  dots: false,
  fade: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false,
      },
    },
  ],
};

const SliderHomeTwo = () => {
  const sliderRef = useRef(null);
  return (
    <>
      {/* <!-- slider-2 --> */}
      <div className="slider-home-two">
        <div className="tp-slider-area-2 p-relative">
          <div className="tp-silder-acive-2 ">
            <Slider ref={sliderRef} {...settings}>
              {slider2?.slider2.map((item) => (
                <div key={item.id} className="tp-slider-item-2 w-img">
                  <img src={item?.img} alt="img" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="slider-arrow-2 d-flex justify-content-between align-items-center">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              type="button"
              className="slick-prev slick-arrow"
            >
              <span>
                <i className="fal fa-angle-left"></i>
              </span>
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              type="button"
              className="slick-next slick-arrow"
            >
              <span>
                <i className="fal fa-angle-right"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- slider -2 --> */}
    </>
  );
};

export default SliderHomeTwo;
