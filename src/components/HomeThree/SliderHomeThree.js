import React, { useRef } from "react";
import Slider from "react-slick";
import slider from "../../data/SliderHomeThree.json";

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

const SliderHomeThree = () => {
  const sliderRef = useRef(null);
  return (
    <>
      {/* <!-- slider-3 --> */}
      <div className="slider-home-three">
        <div className="tp-slider-area-3 p-relative">
          <Slider ref={sliderRef} {...settings} className="tp-silder-acive-3">
            {slider?.SliderHomeThree.map((item) => (
              <div key={item.id}>
                <div
                  className="tp-slider-item-3 tp-slider-height-3 silder-overlay"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div className="tp-slider-text white-box">
                    <span className="text-white">{item?.description}</span>
                    <h3 className="tp-slider-title tp-sl-lg-text mt-40 mb-55">
                      {item.title1} <br /> {item.title2}
                    </h3>

                    <a href="#" className="tp-slider-btn">
                      <span>
                        <svg
                          width="53"
                          height="8"
                          viewBox="0 0 53 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M52.3536 4.35356C52.5488 4.15829 52.5488 3.84171 52.3536 3.64645L49.1716 0.464469C48.9763 0.269207 48.6597 0.269207 48.4645 0.464469C48.2692 0.659731 48.2692 0.976314 48.4645 1.17158L51.2929 4L48.4645 6.82843C48.2692 7.02369 48.2692 7.34027 48.4645 7.53554C48.6597 7.7308 48.9763 7.7308 49.1716 7.53554L52.3536 4.35356ZM-3.11023e-08 4.5L52 4.5L52 3.5L3.11023e-08 3.5L-3.11023e-08 4.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <svg
                          width="53"
                          height="8"
                          viewBox="0 0 53 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M52.3536 4.35356C52.5488 4.15829 52.5488 3.84171 52.3536 3.64645L49.1716 0.464469C48.9763 0.269207 48.6597 0.269207 48.4645 0.464469C48.2692 0.659731 48.2692 0.976314 48.4645 1.17158L51.2929 4L48.4645 6.82843C48.2692 7.02369 48.2692 7.34027 48.4645 7.53554C48.6597 7.7308 48.9763 7.7308 49.1716 7.53554L52.3536 4.35356ZM-3.11023e-08 4.5L52 4.5L52 3.5L3.11023e-08 3.5L-3.11023e-08 4.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      Get in touch
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="slider-arrow-3 d-flex justify-content-between align-items-center">
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
      {/* <!-- slider -3 --> */}
    </>
  );
};

export default SliderHomeThree;
