import React from "react";
import Image1 from "../Images/self-img.png";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import twitter from "../Images/twitter.png";

export default function Footer() {
  return (
    <>
      <div className="footer-section" id="contactus">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-4 col-md-4 col-lg-3">
              <img src={Image1} className="img-fluid" />
            </div>
            <div className="col-4 col-md-4 col-lg-3">
              <div>
                <h4>Sachin Traders</h4>
                <p>
                  Sachin Traders Vellore, the renowned Vasad based company, has
                  been associated with premium quality all dal{" "}
                </p>
              </div>
              <div>
                <h4>Contact</h4>
                <p>No, 47 Gangai Street Katpadi - 632154</p>
                <p>+91 9159026242</p>
                <p>WWW.Sachintraders.com</p>
              </div>
            </div>
            <div className="col-8 col-md-4 col-lg-1">
              <h4>Company</h4>
              <a href="#home">Home</a>
              <a href="#aboutus">About Us</a>
              <a href="#product">Product</a>
              <a href="#gallery">Gallery</a>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <h4>Products</h4>
              <p>Masoor Dhal</p>
              <p>Masoor Dhal</p>
              <p>Masoor Dhal</p>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <h4>Find us on</h4>
              <p>
                <img src={facebook} className="img-fluid" /> Facebook
              </p>
              <p>
                <img src={instagram} className="img-fluid" /> Instagram
              </p>
              <p>
                <img src={twitter} className="img-fluid" /> Twitter
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
