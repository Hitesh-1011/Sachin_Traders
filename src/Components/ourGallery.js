import React from "react";
import galleryImg1 from "../Images/gallery-img-1.png";
import galleryImg2 from "../Images/gallery-img-2.png";
import galleryImg3 from "../Images/gallery-img-3.png";

export default function OurGallery(){
    return(
        <>
            <div className="ourGallery-section" id="gallery">
                <div className="container">
                    <h2>Gallery</h2>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <img loading="lazy" src={galleryImg1} className="img-fluid"/>
                        </div>
                        <div className="col-12 col-sm-6">
                            <img loading="lazy" src={galleryImg2} className="img-fluid margin-8"/>
                            <img loading="lazy" src={galleryImg3} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}