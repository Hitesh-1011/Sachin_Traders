import React from "react";
import logo from "../Images/logo.png";

export default function Navbar({colors}){
    // console.log("colors",colors.primary);
    return(
        <>
            <nav style={{background:colors.primary}} class="navbar sticky-top navbar-expand-lg">
                <div class="container-fluid container">
                    <a class="navbar-brand" href="#"><img src={logo} alt="Sachin Store"/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav justify-content-end">
                        <a class="nav-link active" aria-current="page" href="#home">Home</a>
                        <a class="nav-link" href="#aboutus">About Us</a>
                        <a class="nav-link" href="#product">Product</a>
                        <a class="nav-link" href="#gallery">Gallery</a>
                        <a class="nav-link" href="#contactus">Contact us</a>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}