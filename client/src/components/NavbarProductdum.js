import React from "react";
import {Link} from "react-router-dom";
import "./NavbarProductdum.css";
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
                <h4>SK Plastics</h4>
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
         

        </>

        
         

   )
}

export default Navbardum;