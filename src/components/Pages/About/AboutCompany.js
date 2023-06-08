import React from "react";

const AboutCompany = () => {
  return (
    <>
      <div className="about-details-page pt-140 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-details-info pr-65">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-25">
                    About our Company
                  </span>
                  <h2 className="tp-pt-size mb-40">
                    Our business boasts top of the line services
                  </h2>
                </div>
                <div className="about-tb-content">
                  <nav>
                    <div className="nav mb-30" id="nav-tab" role="tablist">
                      <button
                        className="nav-links active"
                        id="mission"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-mission"
                        type="button"
                        role="tab"
                        aria-controls="nav-mission"
                        aria-selected="true"
                      >
                        Our Mission
                      </button>

                      <button
                        className="nav-links"
                        id="nav-vission-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-vission"
                        type="button"
                        role="tab"
                        aria-controls="nav-vission"
                        aria-selected="false"
                      >
                        Our Vission
                      </button>
                      <button
                        className="nav-links"
                        id="nav-value-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-value"
                        type="button"
                        role="tab"
                        aria-controls="nav-value"
                        aria-selected="false"
                      >
                        Our Value
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-mission"
                      role="tabpanel"
                      aria-labelledby="nav-mission"
                    >
                      <p>
                        Dolor volutpat ac tincidunt vitae semper quis lectus
                        nulla at. Nibh nisl id venenatis a condimentum. Libero
                        justo laoreet sit amet. Nisl nisi scelerisque sit
                        ultrices vitae. Dolor sit amet consectetur adipiscing
                        elit pellentesque. Phasellus egestas tellus rutrum
                      </p>

                      <p>
                        ullamcorper morbi tincidunt ornare massa potenti nullam
                        ac tortor vitae purus. faucibus ornare suspendisse.
                        Donec enim diam vulputate ut pharetra sit amet aliquam
                        id. Eu mi bibendum neque egestas congue purus non enim
                        praesent.Donec enim diam vulputate ut pharetra sit amet
                        aliquam id. Eu mi bibendum neque
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-vission"
                      role="tabpanel"
                      aria-labelledby="nav-vission-tab"
                    >
                      <p>
                        Phasellus volutpat ac tincidunt vitae semper quis lectus
                        nulla at. Libero nisl id venenatis a condimentum. Libero
                        justo laoreet sit amet. Nisl nisi scelerisque eu
                        ultrices vitae. Dolor sit amet consectetur adipiscing
                        elit pellentesque. Phasellus egestas tellus rutrum
                      </p>

                      <p>
                        ullamcorper morbi tincidunt ornare massa potenti nullam
                        ac tortor vitae purus. faucibus ornare suspendisse.
                        Donec enim diam vulputate ut pharetra sit amet aliquam
                        id. Eu mi bibendum neque egestas congue purus non enim
                        praesent.Donec enim diam vulputate ut pharetra sit amet
                        aliquam id. Eu mi bibendum neque
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-value"
                      role="tabpanel"
                      aria-labelledby="nav-value-tab"
                    >
                      <p>
                        Neque volutpat ac tincidunt vitae semper quis lectus
                        nulla at. Nibh nisl id venenatis a condimentum. Libero
                        justo laoreet sit amet. Nisl nisi scelerisque eu
                        ultrices vitae. Dolor sit amet consectetur adipiscing
                        elit pellentesque. Phasellus egestas tellus rutrum
                      </p>

                      <p>
                        ullamcorper morbi tincidunt ornare massa potenti nullam
                        ac tortor vitae purus. faucibus ornare suspendisse.
                        Donec enim diam vulputate ut pharetra sit amet aliquam
                        id. Eu mi bibendum neque egestas congue purus non enim
                        praesent.Donec enim diam vulputate ut pharetra sit amet
                        aliquam id. Eu mi bibendum neque
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div className="tp-about-img-box p-relative d-inline-block mb-30">
                <div className="about-page-img">
                  <img src="assets/img/about/about-page.png" alt="" />
                </div>
                <div className="dots-img">
                  <img src="assets/img/about/dot.jpg" alt="" />
                </div>
                <div className="about-info-box d-flex flex-column justify-content-center text-center">
                  <h3 className="box-title">24</h3>
                  <h4 className="box-subtitle">
                    Year of <br />
                    Experience
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
