import React from "react";
import Image1 from "../Images/self-img.png";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import twitter from "../Images/twitter.png";
import { ImLocation } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { GoMail } from "react-icons/go";

export default function Footer() {
  return (
    <>
      <div className="footer-section" id="contactus">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-4 col-md-4">
              <img src={Image1} loading="lazy" className="img-fluid" />
            </div>
            <div className="col-8 col-md-4 p-0">
              <div>
                <h4>Sachin Traders</h4>
                <p>
                  Sachin Traders Vellore, the renowned Vasad based company, has
                  been associated with premium quality all dal{" "}
                </p>
              </div>
              <div className="d-none d-sm-block">
                <h4>Contact</h4>
                <p>
                  <ImLocation /> No.755/3c, Mullai Garden Sanjeevirayapuram,
                  Mottur Katpadi, Vellore, Tamil Nadu-632007
                </p>
                <p>
                  <BsTelephoneFill /> +91 9159026242
                </p>
                <p>
                  <BsGlobe /> sachintraders3087@gmail.com
                </p>
                <p>
                  <GoMail /> www.sachintraders.com
                </p>
                <p>
                  <b>GST NO : </b>33LKJPS1030C1ZF
                </p>
              </div>
            </div>

            {/* <div className="col-6 col-md-4 col-lg-2">
              <h4>Products</h4>
              <p>Toor Dhal Rejection (red)</p>
              <p>Toor Dhal Rejection ( White )</p>
              <p>Toor Dhal Rejection Bold (red )</p>
              <p>Toor Dhal Rejection Bold ( White )</p>
              <p>Toor Dhal Rejection Broken Khanda (sortex )</p>
              <p>Toor Dhal Rejection Broken Khanda (non -sortex )</p>
              <p>Toor Dhal Rejection (Broken Khanda waste )</p>
            </div> */}

            <div className="col-3 col-md-4 col-lg-2 mt20">
              <h4>Company</h4>
              <a href="#home">Home</a>
              <a href="#aboutus">About Us</a>
              <a href="#product">Product</a>
              <a href="#gallery">Gallery</a>
            </div>
            <div className="col-9 col-md-4 col-lg-2 d-block d-sm-none mt20 ml20">
              <h4>Contact</h4>
              <p>
                <ImLocation /> No.755/3c, Mullai Garden Sanjeevirayapuram,
                Mottur Katpadi, Vellore, Tamil Nadu-632007
              </p>
              <p>
                <BsTelephoneFill /> +91 9159026242
              </p>
              <p>
                <BsGlobe /> sachintraders3087@gmail.com
              </p>
              <p>
                <GoMail /> www.sachintraders.com
              </p>
              <p>
                <b>GST NO : </b>33LKJPS1030C1ZF
              </p>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <h4>Find us on</h4>
              <a
                href="https://www.facebook.com/profile.php?id=100009055536878"
                target="_blank"
              >
                <img src={facebook} loading="lazy" className="img-fluid" />{" "}
                Facebook
              </a>
              <a
                href="https://www.instagram.com/invites/contact/?i=1l7hmswc91axi&utm_content=21ju5af"
                target="_blank"
              >
                <img src={instagram} loading="lazy" className="img-fluid" />{" "}
                Instagram
              </a>
              {/* <a href="">
                <img src={twitter} loading="lazy" className="img-fluid" /> Twitter
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
