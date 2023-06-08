import React from "react";
import { Link } from "react-router-dom";

const LastedBlog = () => {
  return (
    <>
      {/* <!-- lasted blog start  --> */}
      <div className="tp-lasted-blog pt-140">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-section-wrapper text-center">
                <span className="tp-section-subtitle mb-30">
                  Our Latest News & Blog
                </span>
                <h2 className="tp-section-title mb-70">
                  Stay updated with our <br /> latest posts
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="tp-blog">
                <div className="tp-blog__thumb">
                  <img src="assets/img/blog/post-1.jpg" alt="" />
                </div>
                <div className="tp-blog__meta pt-25 pb-15">
                  <span>
                    <Link to="/">Rasalina</Link>/
                  </span>
                  <span>
                    <Link to="/">BUsiness</Link>/
                  </span>
                  <span>
                    <Link to="/">23.06.2022</Link>
                  </span>
                </div>
                <h3 className="tp-blog__title">
                  <a href="https://ven.vn/minister-receives-german-business-delegation-47449.html">
                    MINISTER RECEIVES GERMAN BUSINESS DELEGATION
                  </a>
                </h3>
                <Link className="tp-btn-sm-black" to="/">
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
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="tp-blog">
                <div className="tp-blog__thumb">
                  <img src="assets/img/blog/post-2.jpg" alt="" />
                </div>
                <div className="tp-blog__meta pt-25 pb-15">
                  <span>
                    <Link to="/">Rasalina</Link>/
                  </span>
                  <span>
                    <Link to="/">BUsiness</Link>/
                  </span>
                  <span>
                    <Link to="/">23.06.2022</Link>
                  </span>
                </div>
                <h3 className="tp-blog__title">
                  <a href="https://hanoitimes.vn/former-german-vice-chancellor-facilitates-us350-million-investment-into-vietnam-315006.html
">
                    FORMER GERMAN VICE CHANCELLOR FACILITATES US$350-MILLION INVESTMENT INTO VIETNAM
                  </a>
                </h3>
                <Link className="tp-btn-sm-black" to="/blog-details">
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
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="tp-blog">
                <div className="tp-blog__thumb">
                  <img src="assets/img/blog/post-3.jpg" alt="" />
                </div>
                <div className="tp-blog__meta pt-25 pb-15">
                  <span>
                    <Link to="/">Rasalina</Link> /
                  </span>
                  <span>
                    <Link to="/">BUsiness</Link> /
                  </span>
                  <span>
                    <Link to="/">23.06.2022</Link>
                  </span>
                </div>
                <h3 className="tp-blog__title">
                  <a href="https://gba-vietnam.org/asien-bruecke-delegation/">
                    BUSINESS ROUNDTABLE DISCUSSION WITH THE ASIEN BRÜCKE DELEGATION
                  </a>
                </h3>
                <Link className="tp-btn-sm-black" to="/blog-details">
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- lasted blog end  --> */}
    </>
  );
};

export default LastedBlog;
