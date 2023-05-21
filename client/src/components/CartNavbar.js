import React from "react";
import {Link} from "react-router-dom";
import "./CartNavbar.css";
import complogo from "./asset/logo.png";

function CartNavbar(){
   return(
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
               
                
                <a href="/cart">Cart </a>
            </nav>
       </div>
         

        </>

        
         

   )
}

export default CartNavbar;