import React from "react";
import product1 from "../Images/ourProduct-img-1.png";
import product2 from "../Images/ourProduct-img-2.png";
import product3 from "../Images/ourProduct-img-3.png";

export default function OurProduct(){
    return(
        <>
            <div className="ourProduct-section" id="product">
                <div className="container">
                    <h2>Our Product</h2>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="ourProduct-section-card">
                                <img src={product1} className="img-fluid" alt="moon dal"/>
                                <h4>Masoor Dal</h4>
                                <p>Product benefits are any positive impact that a good or service has on the experience of a consumer</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="ourProduct-section-card">
                                <img src={product2} className="img-fluid" alt="moon dal"/>
                                <h4>Masoor Dal</h4>
                                <p>Product benefits are any positive impact that a good or service has on the experience of a consumer</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="ourProduct-section-card">
                                <img src={product3} className="img-fluid" alt="moon dal"/>
                                <h4>Masoor Dal</h4>
                                <p>Product benefits are any positive impact that a good or service has on the experience of a consumer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}