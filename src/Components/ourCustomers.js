import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var clientData = [
    {
        customerReview:"Amazing product..It is so delicious ,when you cook..all time favorite dal after bought..Smell good, easy to cook",
        customerName:"Hrithik Ahmad",
    },
    {
        customerReview:"Amazing product..It is so delicious ,when you cook..all time favorite dal after bought..Smell good, easy to cook",
        customerName:"Hrithik",
    },
    {
        customerReview:"Amazing product..It is so delicious ,when you cook..all time favorite dal after bought..Smell good, easy to cook",
        customerName:"Ahmad",
    },
]

export default function OurCustormers(){
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return(
        <>
            <div className="ourCustomers-section">
                <h2>Our Customer Says</h2>
                <div className="ourCustomers-section-bg">
                    <div className="container">
                    <Slider {...settings}>
                        {clientData.map((data, key) => (
                                <div className="custormers-review-container">
                                    <p>"{data.customerReview}"</p>
                                    <h4>{data.customerName}</h4>
                                </div>
                                )
                            )
                        }
                    </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}