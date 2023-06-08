import React from "react";

const AboutBanner = () => {
  return (
    <>
      {/* <!-- breadcrumb area start --> */}
      <section
        className="breadcrumb__area include-bg breadcrumb__overlay about_banner"
        // data-background="assets/img/breadcrumb/breadcrumb-bg-2.jpg"
        style={{
          backgroundImage: `url("assets/img/breadcrumb/breadcrumb-bg-2.jpg")`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center p-relative z-index-1">
                <h3 className="breadcrumb__title">About us</h3>
                <div className="breadcrumb__list">
                  <span>
                    <a href="#">Home</a>
                  </span>
                  <span className="dvdr">:</span>
                  <span>About us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb area end --> */}
    </>
  );
};

export default AboutBanner;
