import React from "react";

const TopFooter = () => {
  return (
    <>
      <div className="tp-footer__area black-bg">
        <div className="tp-footer">
          {/* <!-- footer top --> */}
          <div className="tp-footer__top pt-90 pb-60">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h3 className="tp-footer__top-title">
                    Have a project in mind? Let’s work together.
                  </h3>
                </div>
                <div className="col-lg-7">
                  <div className="tp-insta d-flex justify-content-lg-end">
                    <div className="tp-insta__item p-relative ml-20">
                      <img src="assets/img/footer/footer-sm-1.jpg" alt="" />
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div className="tp-insta__item p-relative ml-20">
                      <img src="assets/img/footer/footer-sm-2.jpg" alt="" />
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div className="tp-insta__item p-relative ml-20">
                      <img src="assets/img/footer/footer-sm-3.jpg" alt="" />
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    <div className="tp-insta__item p-relative ml-20">
                      <img src="assets/img/footer/footer-sm-4.jpg" alt="" />
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- footer top end  --> */}
        </div>
      </div>
    </>
  );
};

export default TopFooter;
