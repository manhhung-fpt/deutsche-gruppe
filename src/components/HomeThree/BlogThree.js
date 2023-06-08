import React from "react";
import blog from "../../data/blogThree.json";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
const BlogThree = () => {

  return (
    <>
      <div className="tp-blog-area-2 grey-bg-4 fix pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="tp-section-wrapper pb-55">
                <span className="tp-section-subtitle mb-25">
                  Our Latest News & Blog
                </span>
                <h2 className="tp-section-title">
                  Stay updated with our <br />
                  latest posts
                </h2>
              </div>
            </div>
            <div className="col-12 col-lg-6 text-lg-end mt-50 bmt-reset">
              <Link to="/blog" className="tp-btn-border">
                View More
                <span>
                  <svg
                    width="22"
                    height="8"
                    viewBox="0 0 22 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3536 4.35356C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464468C17.9763 0.269205 17.6597 0.269205 17.4645 0.464468C17.2692 0.65973 17.2692 0.976312 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53554C17.6597 7.7308 17.9763 7.7308 18.1716 7.53554L21.3536 4.35356ZM-4.37114e-08 4.5L21 4.5L21 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    width="22"
                    height="8"
                    viewBox="0 0 22 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3536 4.35356C21.5488 4.15829 21.5488 3.84171 21.3536 3.64645L18.1716 0.464468C17.9763 0.269205 17.6597 0.269205 17.4645 0.464468C17.2692 0.65973 17.2692 0.976312 17.4645 1.17157L20.2929 4L17.4645 6.82843C17.2692 7.02369 17.2692 7.34027 17.4645 7.53554C17.6597 7.7308 17.9763 7.7308 18.1716 7.53554L21.3536 4.35356ZM-4.37114e-08 4.5L21 4.5L21 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <Slider {...settings} className="tp-blog-acive-2">
            {blog?.blog3.map((item) => (
              <div key={item.id} className="slider-item-2">
                <div className="tp-blog white-bg tp-blog-padding">
                  <div className="tp-blog__thumb">
                    <img src={item.img} alt="" />
                    <a href="#">
                      <span>{item.overly}</span>
                    </a>
                  </div>
                  <div className="tp-blog__meta pt-25 pb-15 pl-30">
                    <span>
                      <a href="#">{item.name}</a> /
                    </span>
                    <span>
                      <a href="#">{item.time}</a>
                    </span>
                  </div>
                  <h3 className="tp-blog__title pl-30 mb-25">
                    <a href="">{item.title}</a>
                  </h3>
                  <a className="tp-btn-sm-black pl-30" href="#">
                    <span>
                      <svg
                        width="36"
                        height="8"
                        viewBox="0 0 36 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64644L32.1716 0.464463C31.9763 0.269201 31.6597 0.269201 31.4645 0.464463C31.2692 0.659726 31.2692 0.976308 31.4645 1.17157L34.2929 4L31.4645 6.82842C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.73079 31.9763 7.73079 32.1716 7.53553L35.3536 4.35355ZM4.37114e-08 4.5L35 4.5L35 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        width="36"
                        height="8"
                        viewBox="0 0 36 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64644L32.1716 0.464463C31.9763 0.269201 31.6597 0.269201 31.4645 0.464463C31.2692 0.659726 31.2692 0.976308 31.4645 1.17157L34.2929 4L31.4645 6.82842C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.73079 31.9763 7.73079 32.1716 7.53553L35.3536 4.35355ZM4.37114e-08 4.5L35 4.5L35 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    View MOre
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default BlogThree;
