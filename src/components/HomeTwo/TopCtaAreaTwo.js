import React from "react";
import { Link } from "react-router-dom";

const TopCtaAreaTwo = () => {
  return (
    <>
      {/* <!-- cta area start --> */}
      <div className="tp-cta-area tp-cta-area-page-two pl-110 pr-200">
        <div className="container-fluid">
          <div className="tp-cta-wrapper pt-95 pb-105">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle tp-subtitle-before mb-25">
                    Our misson is grow your Business
                  </span>
                  <h2 className="tp-section-title tp-section-title-large">
                    We also have a ton of fun in the process. we’re ready to
                    grow your business with us
                  </h2>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-lg-end">
                <Link to="/contact">
                  <div className="tp-theme-btn d-flex align-items-center white-bg">
                    <div className="tp-btn-inner">
                      <p className="mb-0">Let’t Talk</p>
                      <b>Get in Touch</b>
                      <span className="d-inline-block">
                        <svg
                          width="46"
                          height="8"
                          viewBox="0 0 46 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <svg
                          width="46"
                          height="8"
                          viewBox="0 0 46 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- cta end end --> */}
    </>
  );
};

export default TopCtaAreaTwo;
