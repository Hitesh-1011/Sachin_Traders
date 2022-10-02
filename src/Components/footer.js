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
            <div className="col-5 col-md-4 col-lg-3">
              <img src={Image1} className="img-fluid" />
            </div>
            <div className="col-7 col-md-4 col-lg-3">
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
              <p>Toor Dhal Rejection (red)</p>
              <p>Toor Dhal Rejection ( White )</p>
              <p>Toor Dhal Rejection Bold (red )</p>
              <p>Toor Dhal Rejection Bold ( White )</p>
              <p>Toor Dhal Rejection Broken Khanda (sortex )</p>
              <p>Toor Dhal Rejection Broken Khanda (non -sortex )</p>
              <p>Toor Dhal Rejection (Broken Khanda waste )</p>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <h4>Find us on</h4>
              <a
                href="https://www.facebook.com/profile.php?id=100009055536878"
                target="_blank"
              >
                <img src={facebook} className="img-fluid" /> Facebook
              </a>
              <a
                href="https://www.instagram.com/invites/contact/?i=1l7hmswc91axi&utm_content=21ju5af"
                target="_blank"
              >
                <img src={instagram} className="img-fluid" /> Instagram
              </a>
              {/* <a href="">
                <img src={twitter} className="img-fluid" /> Twitter
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
