import React from "react";
import AboutUsImg from "../Images/aboutUs-img.png";

export default function AboutUs(){
    return(
        <>
            <div className="aboutUs-section" id="aboutus">
                <div className="container">
                    <div className="aboutUs-header">
                        <h2 className="text-center">About Us</h2>
                        <div className="row">
                            <div className="col-12 col-sm-6 text-center">
                                <img src={AboutUsImg} className="img-fluid" alt="aboutUs Image"/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <p>Sachin traders the renowned dal  based company, has been associated with premium quality all dal which is enriched with proteins and nutrients. Sachin traders has been consistently manufacturing and supplying quality dals in Tamil Nadu and all over India. From a humble beginning with a hand mill, the company has come a long way in more than six decades of journey. In 2020, the brand came up with first of its kind fully automated dal plant of Theni district Tamil Nadu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}