import { useState } from "react";
import { Link } from "react-router-dom";
import VideoPopup from "../../common/Modals/VideoPopup";

const ServiceAbout = () => {
  const [isVideoOpen,setIsVideoOpen] = useState(false);
  return (
    <>
      <div className="tp-about-section black-bg p-relative">
        <div
          className="tp-ab-bg d-none d-lg-block"
          //   data-background="assets/img/service/service-bg.jpg"
          style={{
            backgroundImage: `url("assets/img/service/service-bg.jpg")`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 offset-lg-6">
              <div className="tp-ab-text pt-130 pl-150 p-relative">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-30">
                    we increase your business
                  </span>
                  <h2 className="tp-section-title text-white">
                    Enhance your productivity with our expert advice
                  </h2>
                  <p className="mb-30">
                    tellus rutrum tellus pellentesque eu. Sagittis purus sit
                    amet volutpat. Sed ullamcorper tellus rutrum tellus
                    pellentesque eu. Sagittis purus sit amet volutpat. Sed
                    ullamcorper
                  </p>
                  <p>
                    tellus rutrum tellus pellentesque eu. Sagittis purus sit
                    amet volutpat. Sed ullamcorper tellus rutrum tellus
                    pellentesque eu. Sagittis purus sit amet volutpat. Sed
                    ullamcorper
                  </p>

                  <div className="mt-50 mb-130">
                    <Link to="/service" className="tp-btn-white">
                      View More
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
                    </Link>
                  </div>
                </div>
              </div>
              <div className="serive-vd-play d-none d-lg-block">
                <button
                  onClick={()=> setIsVideoOpen(true)}
                  className="sv-popup-video"
                >
                  {" "}
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"EW4ZYb3mCZk"}
      />
      {/* video modal end */}
    </>
  );
};

export default ServiceAbout;
