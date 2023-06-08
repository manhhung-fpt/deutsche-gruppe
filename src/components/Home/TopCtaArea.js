import React from "react";
import { Link } from "react-router-dom";

const TopCtaArea = () => {
  return (
    <>
      {/* <!-- cta area start --> */}
      <div className="tp-cta-area">
        <div className="container">
          <div className="tp-cta-wrapper pt-105 pb-120">
            <div className="row align-items-center justify-content-evenly">
              <div className="col-lg-9">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-25">
                    Gain your business Success
                  </span>
                  <h2 className="tp-section-title">
                    From strategy to delivery, we are here to make sure your
                    business endeavor succeeds. Trust our experts.
                  </h2>
                </div>
              </div>
              <div className="col-lg-3 d-flex justify-content-lg-end">
                <Link to="/team">
                  <div className="tp-theme-btn d-flex align-items-center">
                    <div className="tp-btn-inner">
                      <p className="mb-0">Our Team</p>
                      <b>Meet our Team</b>
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
                          />
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
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- line  --> */}
          <div className="tp-border-line d-block mb-140">
            <hr />
          </div>
          {/* <!-- line  --> */}
        </div>
      </div>
      {/* <!-- cta end end --> */}
    </>
  );
};

export default TopCtaArea;
