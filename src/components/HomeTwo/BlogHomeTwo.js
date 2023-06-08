import React from "react";
import { Link } from "react-router-dom";

// blog item
function BlogItem({ img, tag, date, title }) {
  return (
    <div className="tp-blog-list__item d-flex pl-30 pb-20">
      <div className="tp-blog-list__item-thum w-img">
        <img src={`/assets/img/blog/blog-sm-${img}.jpg`} alt="blog img" />
      </div>
      <div className="tp-blog-list__item-details pt-30 pb-30">
        <div className="list-blog-meta">
          <span>
            <a href="#">{tag}</a> /
          </span>
          <span>
            <a href="#">{date}</a>
          </span>
        </div>
        <h3 className="list-blog-title pt-15 pb-10 d-inline-block">
          <Link to="/blog-details">{title}</Link>
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
  );
}

const BlogHomeTwo = () => {
  return (
    <>
      {/* <!-- blog area start  --> */}
      <div className="tp-blog-area pt-130">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-section-wrapper text-center pb-60">
                <span className="tp-section-subtitle mb-25">
                  Our Latest News & Blog
                </span>
                <h2 className="tp-section-title">
                  Stay updated with our <br />
                  latest posts
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="tp-blog">
                <div className="tp-blog__thumb">
                  <img src="/assets/img/blog/blog-1.jpg" alt="" />
                </div>
                <div className="tp-blog__meta pt-25 pb-15">
                  <span>
                    <a href="#">BUsiness</a> /
                  </span>
                  <span>
                    <a href="#">23.06.2022</a>
                  </span>
                </div>
                <h3 className="tp-blog__title tp-large-title">
                  <Link to="/blog-details">
                    Reasons To Build A CRM-Powered Website For Your Business
                  </Link>
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
            <div className="col-xl-6">
              <div className="tp-blog-list">
                <BlogItem
                  img="1"
                  tag="Business"
                  date="23.06.2022"
                  title="Using QR Codes In Your Business:"
                />
                <BlogItem
                  img="2"
                  tag="Business"
                  date="24.06.2022"
                  title="Using QR Codes In Your Business:"
                />
                <BlogItem
                  img="3"
                  tag="Business"
                  date="25.06.2022"
                  title="Using QR Codes In Your Business:"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      |{/* <!-- blog area end --> */}
    </>
  );
};

export default BlogHomeTwo;
