import React from "react";
import {Link} from "react-router-dom";
import "./CartNavbar.css";
import complogo from "./asset/logo.png";
import { HomeOutlined,LocalMallOutlined,ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";

function CartNavbar(){
    const quan = useSelector(state=>state.cart.quantity)

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
                <a href="/">Home<HomeOutlined fontSize="large"/></a>  
                <a href="/products/Polypropelene"> Products<LocalMallOutlined fontSize="large"/></a>
                
                <a href="/cart">Cart<Badge badgeContent={quan} color="primary">
              <ShoppingCartOutlined fontSize="large" />
            </Badge> </a>
                
            </nav>
       </div>
         

        </>

        
         

   )
}

export default CartNavbar;