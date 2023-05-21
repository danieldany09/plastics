import React from "react";

import {Link} from "react-router-dom";
import "./Navbardum.css";
import logo from "./asset/image.png";
import complogo from "./asset/logo.png";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";

function Navbardum(){
  const quantity = useSelector(state=>state.cart.quantity)

   return(
    <>
        <div className="header-navbar">
            <div className="logo">
            <div className="header-navbar-logo">
            <img src={complogo}/>
            </div>
            <div className="logo-content">
                <h4>Kannan Polythene Pipes</h4>
              </div>
            </div>
             
            <nav className="navbar">
                <a href="/">Home</a>  
                <a href="/products/Polypropelene"> Products</a>
                
                <a href="/cart">Cart </a>
                <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
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
        <div className="header-content-login-btn">
            <a  href="/login">Login</a>
        </div>
        <div className="header-content-register-btn">
            <a  href="/register">Register</a>
        </div>
        </div>
        <div className="services-content">
            <h2 className="services-content-title">Services</h2>
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

        
         

   )
}

export default Navbardum;