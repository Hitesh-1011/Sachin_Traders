import React from "react";
import galleryImg1 from "../Images/gallery-img-1.png";
import galleryImg2 from "../Images/gallery-img-2.png";
import galleryImg3 from "../Images/gallery-img-3.png";
import galleryImg4 from "../Images/gallery-img-4.png";
import galleryImg5 from "../Images/gallery-img-5.png";
import galleryImg6 from "../Images/gallery-img-6.png";
import galleryImg7 from "../Images/gallery-img-7.png";
import galleryImg8 from "../Images/gallery-img-8.png";
import galleryImg9 from "../Images/gallery-img-9.png";

export default function OurGallery() {
  return (
    <>
      <div className="ourGallery-section" id="gallery">
        <div className="container">
          <h2>Gallery</h2>
          <div className="row">
            <div className="col-12 col-sm-6">
              <img loading="lazy" src={galleryImg1} className="img-fluid" />
            </div>
            <div className="col-12 col-sm-6">
              <img
                loading="lazy"
                src={galleryImg2}
                className="img-fluid margin-8"
              />
              <img loading="lazy" src={galleryImg3} className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-4">
              <img loading="lazy" src={galleryImg4} className="img-fluid" />
            </div>
            <div className="col-12 col-sm-4">
              <img loading="lazy" src={galleryImg5} className="img-fluid" />
            </div>
            <div className="col-12 col-sm-4">
              <img loading="lazy" src={galleryImg6} className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6">
              <img
                loading="lazy"
                src={galleryImg7}
                className="img-fluid height238 margin-8"
              />
              <img loading="lazy" src={galleryImg8} className="img-fluid mb-8px" />
            </div>
            <div className="col-12 col-sm-6">
              <img loading="lazy" src={galleryImg9} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
