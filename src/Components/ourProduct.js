import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import product1 from "../Images/ourProduct-img-1.png";
import product2 from "../Images/ourProduct-img-2.png";
import product3 from "../Images/ourProduct-img-3.png";
import product4 from "../Images/ourProduct-img-4.png";
import product5 from "../Images/ourProduct-img-5.png";
import product6 from "../Images/ourProduct-img-6.png";
import product7 from "../Images/ourProduct-img-7.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

var productData = [
  {
    productimg: product1,
    productName: "Toor Dhal Rejection (red)",
  },
  {
    productimg: product2,
    productName: "Toor Dhal Rejection (white)",
  },
  {
    productimg: product3,
    productName: "Toor Dhal Rejection Bold (red)",
  },
  {
    productimg: product4,
    productName: "Toor Dhal Rejection Bold (white)",
  },
  {
    productimg: product5,
    productName: "Toor Dhal Rejection Broken Khanda (Sortex)",
  },
  {
    productimg: product6,
    productName: "Toor Dhal Rejection Broken Khanda (Non -Sortex )",
  },
  {
    productimg: product7,
    productName: "Toor Dhal Rejection (Broken Khanda Waste )",
  },
];

export default function OurProduct() {
  return (
    <>
      <div className="ourProduct-section" id="product">
        <div className="container">
          <h2>Our Product</h2>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            autoPlay
            containerClass="container-with-dots"
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {productData.map((data, key) => (
              <div className="ourProduct-section-card">
                <img
                  src={data.productimg}
                  className="img-fluid"
                  alt="moon dal"
                />
                <h4>{data.productName}</h4>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
