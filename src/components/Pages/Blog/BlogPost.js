import React, { useRef,useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import VideoPopup from "../../common/Modals/VideoPopup";
import BlogSidebar from "./BlogSidebar";

const settings = {
  autoplay: true,
  autoplaySpeed: 4000,
  dots: false,
  fade: false,
  arrows: false,
};

const BlogPost = () => {
  const sliderRef = useRef(null);
  const [isVideoOpen,setIsVideoOpen] = useState(false);
  return (
    <>
      <div className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="postbox__wrapper mr-40">
                <article className="postbox__item format-image mb-50 transition-3">
                  <div className="postbox__thumb w-img">
                    <Link to="/blog-details">
                      <img src="/assets/img/blog/blog-9.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="postbox__content">
                    <div className="postbox__meta mb-25">
                      <span>
                        <Link to="#">
                          <i className="fal fa-user"></i>Samrat Islam
                        </Link>
                      </span>
                      <span>
                        <i className="fal fa-calendar-day"></i>MARCH 10, 2020
                      </span>
                      <span>
                        <Link to="#">
                          <i className="fal fa-comment"></i>23 COMMENT
                        </Link>
                      </span>
                    </div>
                    <h3 className="postbox__title">
                      <Link to="/blog-details">
                        Using QR Codes In Your Business: Best Practices And
                        Pitfalls
                      </Link>
                    </h3>
                    <div className="postbox__text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat […]
                      </p>
                    </div>
                    <div className="postbox__read-more">
                      <Link className="tp-btn-border" to="/blog-details">
                        read more
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
                </article>
                <article className="postbox__item format-video mb-50 transition-3">
                  <div className="postbox__thumb postbox__video w-img p-relative">
                    <Link to="/blog-details">
                      <img src="/assets/img/blog/blog-11.jpg" alt="" />
                    </Link>
                    <button
                      onClick={()=> setIsVideoOpen(true)}
                      className="play-btn pulse-btn popup-video"
                    >
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                  <div className="postbox__content">
                    <div className="postbox__meta mb-25">
                      <span>
                        <Link to="#">
                          <i className="fal fa-user"></i>Tushar
                        </Link>
                      </span>
                      <span>
                        <i className="fal fa-calendar-day"></i>MARCH 10, 2020
                      </span>
                      <span>
                        <Link to="#">
                          <i className="fal fa-comment"></i>23 COMMENT
                        </Link>
                      </span>
                    </div>
                    <h3 className="postbox__title">
                      <Link to="/blog-details">
                        Four Ways a Clean Workplace Makes Employees Happy and
                        Healthy
                      </Link>
                    </h3>
                    <div className="postbox__text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat […]
                      </p>
                    </div>
                    <div className="postbox__read-more">
                      <Link className="tp-btn-border" to="/blog-details">
                        read more
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
                </article>

                <article className="postbox__item format-image mb-50 transition-3">
                  <div className="postbox__thumb postbox__slider swiper-container w-img p-relative">
                    <Slider ref={sliderRef} {...settings}>
                      <div className="postbox__slider-item">
                        <img src="/assets/img/blog/blog-slider-1.jpg" alt="" />
                      </div>
                      <div className="postbox__slider-item">
                        <img src="/assets/img/blog/blog-slider-1.jpg" alt="" />
                      </div>
                      <div className="postbox__slider-item">
                        <img src="/assets/img/blog/blog-slider-1.jpg" alt="" />
                      </div>
                    </Slider>
                    <div className="postbox-nav">
                      <button
                        onClick={() => sliderRef.current?.slickNext()}
                        className="postbox-slider-button-next"
                      >
                        <i className="fal fa-angle-right"></i>
                      </button>
                      <button
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="postbox-slider-button-prev"
                      >
                        <i className="fal fa-angle-left"></i>
                      </button>
                    </div>
                  </div>
                  <div className="postbox__content">
                    <div className="postbox__meta mb-25">
                      <span>
                        <Link to="#">
                          <i className="fal fa-user"></i>Salim
                        </Link>
                      </span>
                      <span>
                        <i className="fal fa-calendar-day"></i>MARCH 10, 2020
                      </span>
                      <span>
                        <Link to="#">
                          <i className="fal fa-comment"></i>23 COMMENT
                        </Link>
                      </span>
                    </div>
                    <h3 className="postbox__title">
                      <Link to="/blog-details">
                        How to Clean Your Home Faster and More Efficiently
                      </Link>
                    </h3>
                    <div className="postbox__text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat […]
                      </p>
                    </div>
                    <div className="postbox__read-more">
                      <Link className="tp-btn-border" to="/blog-details">
                        read more
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
                </article>
                <div className="basic-pagination">
                  <nav>
                    <ul>
                      <li>
                        <Link to="/blog">
                          <i className="far fa-long-arrow-left"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog">1</Link>
                      </li>
                      <li>
                        <span className="current">2</span>
                      </li>
                      <li>
                        <Link to="/blog">3</Link>
                      </li>
                      <li>
                        <Link to="/blog">4</Link>
                      </li>
                      <li>
                        <Link to="/blog">
                          <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"EW4ZYb3mCZk"}
      />
      {/* video modal end */}
    </>
  );
};

export default BlogPost;
