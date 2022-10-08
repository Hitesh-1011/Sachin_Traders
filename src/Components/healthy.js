import React from "react";
import healthyImg1 from "../Images/health-img-1.png";
import healthyImg2 from "../Images/health-img-2.png";
import healthyImg3 from "../Images/health-img-3.png";
import healthyImg4 from "../Images/health-img-4.png";

export default function Healthy(){
    return(
        <>
            <div className="healthy-section">
                <div className="container">
                   <h2>Healthy Consumtion of our Dhal</h2>
                   <p> Dal possesses excellent antioxidant properties that make it beneficial for the heart, liver and kidneys. In addition, it has a low glycemic index and high dietary fibre content that may be helpful as a good food substance for patients with diabetes and those on weight control diets.</p>
                   <div className="row">
                        <div className="col-6 col-sm-3 text-center">
                            <img src={healthyImg1} loading="lazy" alt="health-1"/>
                            <p>Safety</p>
                        </div>
                        <div className="col-6 col-sm-3 text-center">
                            <img src={healthyImg2} loading="lazy" alt="health-1"/>
                            <p>Hygine</p>
                        </div>
                        <div className="col-6 col-sm-3 text-center">
                            <img src={healthyImg3} loading="lazy" alt="health-1"/>
                            <p>Eco-Friendly</p>
                        </div>
                        <div className="col-6 col-sm-3 text-center">
                            <img src={healthyImg4} loading="lazy" alt="health-1"/>
                            <p>Organic</p>
                        </div>
                   </div>
                </div>
            </div>
        </>
    )
}