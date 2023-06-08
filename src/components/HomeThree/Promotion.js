import React from "react";

const Promotion = () => {
  return (
    <>
      {/* <!-- promotion area start  --> */}
      <div className="tp-promotion-area p-relative grey-bg-4">
        <div
          className="tp-promotion-bg grey-bg"
          style={{
            backgroundImage: `url('assets/img/promotion/promotion.jpg')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-110 pb-80 pl-120">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-25">
                    Professional Skills
                  </span>
                  <h2 className="tp-pt-size mb-90">
                    Connecting businesses, people & ideas for the future.
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-45">
                    <h4>Invest Consulting</h4>
                    <span className="tp-progress-count">85%</span>
                    <div className="progress">
                      <div
                        className="progress-bar wow slideInLeft"
                        data-wow-duration="1s"
                        data-wow-delay=".3s"
                        role="progressbar"
                        data-width="85%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{
                          width: "85%",
                          visibility: "visible",
                          animationDuration: "1s",
                          animationDelay: "0.3s",
                          animationName: "slideInLeft",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="tp-progress-item p-relative mb-45">
                    <h4>Business & Finance</h4>
                    <span className="tp-progress-count mb30">90%</span>
                    <div className="progress">
                      <div
                        className="progress-bar wow slideInLeft"
                        data-wow-duration="1s"
                        data-wow-delay=".3s"
                        role="progressbar"
                        data-width="90%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{
                          width: "90%",
                          visibility: "visible",
                          animationDuration: "1s",
                          animationDelay: "0.3s",
                          animationName: "slideInLeft",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="tp-progress-item p-relative mb-45">
                    <h4>Hr Consulting</h4>
                    <span className="tp-progress-count">70%</span>
                    <div className="progress">
                      <div
                        className="progress-bar wow slideInLeft"
                        data-wow-duration="1s"
                        data-wow-delay=".3s"
                        role="progressbar"
                        data-width="70%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{
                          width: "70%",
                          visibility: "visible",
                          animationDuration: "1s",
                          animationDelay: "0.3s",
                          animationName: "slideInLeft",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-promotion-area p-relative grey-bg-4">
        <div
          className="tp-promotion-bg-2"
          style={{
            backgroundImage: `url('/assets/img/promotion/promotion-1.jpg')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info-2 pt-110 pb-120 pl-120">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-25">
                    Live Data Analyisis
                  </span>
                  <h2 className="tp-pt-size mb-90">
                    Long Turms planing for <br />
                    your unlimited Success
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-promotion-graph">
                    <img
                      src="/assets/img/promotion/pt-graph.png"
                      alt="bg img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- promotion area end  --> */}
    </>
  );
};

export default Promotion;
