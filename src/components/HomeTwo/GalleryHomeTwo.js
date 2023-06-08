import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ImagePopup from "../common/Modals/ImagePopup";

// gallery item
function GalleryItem({index, cls = "", img, title }) {
  const gl_img = `assets/img/gallery/gallery-${img}.jpg`;
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const images = [
    '/assets/img/gallery/gallery-4.jpg',
    '/assets/img/gallery/gallery-5.jpg',
    '/assets/img/gallery/gallery-6.jpg',
    '/assets/img/gallery/gallery-7.jpg',
    '/assets/img/gallery/gallery-8.jpg',
    '/assets/img/gallery/gallery-9.jpg',
    '/assets/img/gallery/gallery-10.jpg',
  ];
  return (
    <React.Fragment>
      <div className={`tp-img-gl-item ${cls} w-img p-relative`}>
        <button onClick={()=> handleImagePopup(index)} className="tp-gallery">
          <img src={gl_img} alt="gl_img" />
        </button>
        <div className="tp-gl-tag">
          <a href="#">
            <span>{title}</span>
          </a>
        </div>
      </div>
      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={images}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </React.Fragment>
  );
}

const GalleryHomeTwo = () => {
  return (
    <>
      {/* <!-- image gallery  start --> */}
      <div className="tp-image-gallery grey-bg-4 pl-75 pr-75 pt-130 pb-140">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <div className="tp-section-wrapper text-center pb-55">
                <span className="tp-section-subtitle mb-25">
                  OUR word gallery
                </span>
                <h2 className="tp-section-title">Explore Our Creative Work</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 tp-col-8 col-sm-12">
              <GalleryItem index={0} cls="tp-gl-img-size" img="4" title="Data Analysis" />
            </div>
            <div className="col-xl-4 tp-col-4 col-sm-12">
              <GalleryItem index={1} cls="mb-30" img="5" title="Web design" />
              <GalleryItem index={2} img="6" title="Logo" />
            </div>
          </div>
          <div className="row gt-25">
            <div className="col-xl-3 tp-col-3 col-sm-12">
              <GalleryItem index={3} img="7" title="Branding" />
            </div>
            <div className="col-xl-9 tp-col-9 col-sm-12">
              <GalleryItem index={4} img="8" title="Graphic" />
            </div>
          </div>
          <div className="row gt-25">
            <div className="col-md-6 col-sm-12">
              <GalleryItem index={5} img="9" title="Web design" />
            </div>
            <div className="col-md-6 col-sm-12">
              <GalleryItem index={6} img="10" title="Other" />
            </div>
          </div>
        </div>
        <div className="text-center mt-60">
          <Link to="/service" className="tp-btn-border">
            Explore More
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
                />
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
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
      {/* <!-- image gallery end  --> */}
    </>
  );
};

export default GalleryHomeTwo;
