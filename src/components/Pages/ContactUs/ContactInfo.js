import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-from-section pt-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ct-info__box text-center pt-50 pb-50 mb-30">
                <span className="mb-25 d-inline-block">
                  <svg
                    width="42"
                    height="62"
                    viewBox="0 0 42 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.002 2.06609C31.4232 2.06609 39.9024 10.4099 39.9024 20.6667C39.9024 23.9286 39.0239 27.1421 37.3616 29.9679L21 57.8659L4.63647 29.966C2.97608 27.144 2.09764 23.9286 2.09764 20.6667C2.09764 10.4099 10.5768 2.06609 21 2.06609H21.002ZM21.002 27.898C25.0554 27.898 28.3506 24.6535 28.3506 20.6667C28.3506 16.6799 25.0535 13.4354 21.002 13.4354C16.9485 13.4354 13.6514 16.6799 13.6514 20.6667C13.6514 24.6535 16.9485 27.898 21.002 27.898ZM21.002 0C9.40293 0 0 9.25474 0 20.6667C0 24.4364 1.03011 27.958 2.82048 31.001C9.92003 43.1068 13.9005 49.8941 21 62L39.1795 31.001C40.9699 27.958 42 24.4364 42 20.6667C42 9.25474 32.5971 0 21 0H21.002ZM21.002 25.8319C18.1027 25.8319 15.751 23.5196 15.751 20.6667C15.751 17.8156 18.1027 15.5015 21.002 15.5015C23.9012 15.5015 26.251 17.8156 26.251 20.6667C26.251 23.5196 23.9012 25.8319 21.002 25.8319Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <h3 className="ct-info__box-title">Address line</h3>
                <p className="p-0">
                  Bowery St, New York, NY <br /> 10013,USA
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ct-info__box text-center pt-50 pb-50 mb-30">
                <span className="mb-25 d-inline-block">
                  <svg
                    width="35"
                    height="58"
                    viewBox="0 0 35 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.0377 0H2.96231C1.3273 0 0 1.30348 0 2.90917V55.0908C0 56.6985 1.3273 58 2.96231 58H32.0377C33.6727 58 35 56.6985 35 55.0908V2.90917C35 1.30348 33.6727 0 32.0377 0ZM32.8131 55.0908C32.8131 55.5099 32.4664 55.8504 32.0397 55.8504H2.96436C2.53766 55.8504 2.19096 55.5099 2.19096 55.0908V45.1183H32.8152V55.0908H32.8131ZM32.8131 42.9686H2.18891V8.63483H32.8131V42.9686ZM32.8131 6.4872H2.18891V2.90917C2.18891 2.49012 2.53561 2.14763 2.96231 2.14763H32.0377C32.4644 2.14763 32.8111 2.49012 32.8111 2.90917V6.4872H32.8131Z"
                      fill="black"
                    />
                    <path d="M14 49H21V51H14V49Z" fill="currentColor" />
                  </svg>
                </span>
                <h3 className="ct-info__box-title">Phone Number</h3>
                <p className="p-0">
                  <a href="tel:+1255-568-6523">+1255 - 568 - 6523</a> <br />
                  <a href="tel:+1255-568-6523">+1255 - 568 - 6523</a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ct-info__box text-center pt-50 pb-50 mb-30">
                <span className="mb-25 d-inline-block">
                  <svg
                    width="49"
                    height="56"
                    viewBox="0 0 49 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M48.818 23.0144L27.5018 1.26962C26.7004 0.451961 25.6342 0 24.5 0C23.3658 0 22.2996 0.450085 21.4982 1.26962L0 23.1982V56H49V23.2019L48.818 23.0162V23.0144ZM3.13971 22.8231L22.8842 2.68176C23.7482 1.80034 25.2537 1.80034 26.1176 2.68176L46.7904 23.7739L32.7022 38.1466L27.5018 32.8412C26.7004 32.0236 25.6342 31.5716 24.5 31.5716C23.3658 31.5716 22.2996 32.0236 21.4982 32.8412L16.2206 38.2235L2.13235 23.8508L3.13971 22.8231ZM14.8346 39.6356L14.6893 39.7857L14.6875 39.7838L1.9614 52.7669V26.5025L14.8364 39.6356H14.8346ZM3.5239 53.999L4.57721 52.9244H4.58088L22.8842 34.2534C23.7482 33.372 25.2537 33.372 26.1176 34.2534L45.4761 53.999H3.5239ZM47.0404 27.1927V52.7688L34.0882 39.5606L47.0404 26.3469V27.1927Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <h3 className="ct-info__box-title">Mail Adress</h3>
                <p className="p-0">
                  <a href="mailto:email@example.com">email@example.com</a>{" "}
                  <br />
                  <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tp-ct-form white-bg pl-110 pr-110 pt-80 pb-130">
                <form id="contact-form" action="assets/mail.php" method="POST">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name*"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email here"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your number*"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject*"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Enter your Massage*"
                  ></textarea>
                  <div className="text-center">
                    <button type="submit" className="tp-btn-border">
                      Send Massage{" "}
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
                    </button>
                  </div>
                </form>
                <p className="ajax-response mt-20 text-center"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-ct-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6317.73017726894!2d90.36757560194341!3d23.832698085391147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1653563681792!5m2!1sen!2sbd"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
