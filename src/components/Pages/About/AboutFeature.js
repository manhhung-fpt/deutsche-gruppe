import React,{useState} from "react";
import { Link } from "react-router-dom";
import VideoPopup from "../../common/Modals/VideoPopup";

const AboutFeature = () => {
  const [isVideoOpen,setIsVideoOpen] = useState(false);
  return (
    <>
      <div className="ab-feature-area p-relative">
        <div
          className="ab-fea-bg"
          //   data-background="assets/img/bg/feature-bg.jpg"
          style={{ backgroundImage: `url("assets/img/bg/feature-bg.jpg")` }}
        >
          <div className="serive-vd-play">
            <button
              onClick={()=> setIsVideoOpen(true)}
              className="sv-popup-video"
            >
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-4 offset-lg-8 col-md-6 offset-md-6 col-12">
              <div className="tp-feaure-ct-box black-bg">
                <div className="tp-slider-text tp-ct-position d-inline-block">
                  <span className="mb-25 d-inline-block">
                    Make your new business plan a success!
                  </span>
                  <h3 className="tp-slider-title mb-25">
                    Make your <br />
                    Business Boom
                  </h3>

                  <Link to="/about" className="tp-slider-btn" tabIndex="-1">
                    <span>
                      <svg
                        width="53"
                        height="8"
                        viewBox="0 0 53 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M52.3536 4.35356C52.5488 4.15829 52.5488 3.84171 52.3536 3.64645L49.1716 0.464469C48.9763 0.269207 48.6597 0.269207 48.4645 0.464469C48.2692 0.659731 48.2692 0.976314 48.4645 1.17158L51.2929 4L48.4645 6.82843C48.2692 7.02369 48.2692 7.34027 48.4645 7.53554C48.6597 7.7308 48.9763 7.7308 49.1716 7.53554L52.3536 4.35356ZM-3.11023e-08 4.5L52 4.5L52 3.5L3.11023e-08 3.5L-3.11023e-08 4.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        width="53"
                        height="8"
                        viewBox="0 0 53 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M52.3536 4.35356C52.5488 4.15829 52.5488 3.84171 52.3536 3.64645L49.1716 0.464469C48.9763 0.269207 48.6597 0.269207 48.4645 0.464469C48.2692 0.659731 48.2692 0.976314 48.4645 1.17158L51.2929 4L48.4645 6.82843C48.2692 7.02369 48.2692 7.34027 48.4645 7.53554C48.6597 7.7308 48.9763 7.7308 49.1716 7.53554L52.3536 4.35356ZM-3.11023e-08 4.5L52 4.5L52 3.5L3.11023e-08 3.5L-3.11023e-08 4.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Get in touch
                  </Link>
                </div>
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

export default AboutFeature;
