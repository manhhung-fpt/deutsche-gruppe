import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- footer area start --> */}
      <footer>
        <div className="tp-footer__area black-bg">
          <div className="tp-footer">
            {/* <!-- main-footer start  --> */}
            <div className="tp-footer__main">
              <div className="container">
                <div className="tp-footer-border pt-60 pb-30">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="tp-footer__widget  pb-30">
                        <h3 className="tp-footer__widget-title">
                          Our Location
                        </h3>
                        <ul>
                          <li>
                            <a href="#">London</a>
                          </li>
                          <li>
                            <a href="#">America</a>
                          </li>
                          <li>
                            <a href="#">Constarica</a>
                          </li>
                          <li>
                            <a href="#">Germany</a>
                          </li>
                          <li>
                            <a href="#">India</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="tp-footer__widget pb-30">
                        <h3 className="tp-footer__widget-title">Our Service</h3>
                        <ul>
                          <li>
                            <a href="#">Tax strategy</a>
                          </li>
                          <li>
                            <a href="#">Financial advices</a>
                          </li>
                          <li>
                            <a href="#">Insurance strategy</a>
                          </li>
                          <li>
                            <a href="#">Manage investment</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                      <div className="tp-footer__widget  pb-30">
                        <h3 className="tp-footer__widget-title">Quick Links</h3>
                        <ul>
                          <li>
                            <a href="#">Our Team</a>
                          </li>
                          <li>
                            <a href="#">Faq</a>
                          </li>
                          <li>
                            <a href="#">Portfolio</a>
                          </li>
                          <li>
                            <a href="#">Service</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="tp-footer__widget  pb-30">
                        <h3 className="tp-footer__widget-title">Quick Links</h3>
                        <ul>
                          <li>
                            <a href="#">
                              27 Division St, New York, NY 10002, USA
                            </a>
                          </li>
                          <li>
                            <a href="tel:+88015569569365">(+880)52462545632</a>
                          </li>
                          <li>
                            <a href="mailto:support@example.com">
                              support@example.com
                            </a>
                          </li>
                          <li>
                            <span> Office Hours: 9AM - 4PM</span>
                          </li>
                          <li>
                            <span> Friday - Wekend Day</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- main footer end  --> */}
          </div>
        </div>

        {/* <!-- footer copy right --> */}
        <div className="top-footer-copyright pt-30 black-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-12">
                <div className="tp-copyrigh-text mb-30">
                  <span>
                    © {new Date().getFullYear()} Arvilax - Business Consulting . All Rights Reserved.
                  </span>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="tp-footer-social-icon mb-30 text-md-end">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer copyright end  --> */}
      </footer>
      {/* <!-- footer area end --> */}
    </>
  );
};

export default Footer;
