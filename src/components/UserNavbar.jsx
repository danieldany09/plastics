 
import React from "react";
 
import logo from "./asset/image.png";
import complogo from "./asset/logo.png";
import "./Navbardum.css";
import { useSelector } from "react-redux";


 

const UserNavbar = () => {
  return (
    <>
        <div className="header-navbar">
            <div className="logo">
            <div className="header-navbar-logo">
            <img src={complogo}/>
            </div>
            <div className="logo-content">
                <h4>SK Plastics</h4>
            </div>
            </div>
             
            <nav className="navbar">
                <a href="/">Home</a>  
                <a href="/products/Polypropelene"> Products</a>
                
                <a href="/cart">Cart </a>
                
            </nav>
       </div>
        <div className="header-content">

            <div className="header--content-message"> 
                <h1>Make Your Own Plastic Things</h1>
                <p>To produce packaging, in building and construction, in textiles, consumer products, transportation, electrical and electronics and industrial machinery.</p>
            </div>
            <div className="header-content-img">
                <img  src={logo} alt="no"/>
            </div>
            
            
            
        </div>
        <div className="header-button">
         
            <div className="header-content-register-btn">
               
                    <a  href="#">Explore</a>
                 
               
            </div>
        </div>
        <div className="services-content">
            <h2 className="services-content-title">Our Services :</h2>
            {/* <div className="services-contents">
            <div className="services-content1">
                <p>You must be willingly and consistently able to bring new ideas, cost savings, and responsiveness to the client.</p>
                <p>It is this proactive attitude that has allowed us to become our customers’ preferred  plastic granules supplier. Our vision is clear… to provide our customers with the best possible Plastic Products by constantly improving our processes and techniques</p>
             </div>
            <div className="services-content2">
                <p>SK Plastic Products Inc. is a 50-year-old family-owned business. We are an industry-leading plastic products manufacturer engaged in the fabrication and precision machining of custom plastic products and components. </p>
                 <p>Our skilled workforce, state-of-the-art equipment, and a strong commitment to quality enable our plastic products company to consistently develop solutions for customers’ most difficult applications. If you’re looking for a custom plastic parts manufacturer or you need a provider of custom plastic manufacturing services</p>  
            </div>
            <div className="services-content3">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicin dantium assu   rendis est? Corrupti aut magni dignissimos molestiae ut perferendis aspernatur voluptate?</p>
                <p>Lorem ipsum dolor, sit amet consectetur  m? Nulla laudantium assumenda aperiam, tempora pariatur perferendis est? Corrupti aut magni dignissimos molestiae ut perferendis aspernatur voluptate?</p>
                 
            </div>
            </div> */}
            

            <div className="row">
  <div class="col-lg-4" >
    <div class="card">
      <div class="card-body">
        {/* <h5 class="card-title">Special title treatment</h5> */}
        <p class="card-text">It is this proactive attitude that has allowed us to become our customers’ preferred  plastic granules supplier. Our vision is clear… to provide our customers with the best possible Plastic Products by constantly improving our processes and techniques</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>

  <div class="col-lg-4">
    <div class="card">
      <div class="card-body">
        {/* <h5 class="card-title">Special title treatment</h5> */}
        <p class="card-text">It is this proactive attitude that has allowed us to become our customers’ preferred  plastic granules supplier. Our vision is clear… to provide our customers with the best possible Plastic Products by constantly improving our processes and techniques</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>

  <div class="col-lg-4" >
    <div class="card">
      <div class="card-body">
        {/* <h5 class="card-title">Special title treatment</h5> */}
        <p class="card-text">It is this proactive attitude that has allowed us to become our customers’ preferred  plastic granules supplier. Our vision is clear… to provide our customers with the best possible Plastic Products by constantly improving our processes and techniques</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  </div>

  </div>


            
        </div>
        

        </>
  );
};

export default UserNavbar;
