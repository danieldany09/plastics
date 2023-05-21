import React from "react";
 
import Footer from "../components/Footer";
import UserNavbar from "../components/UserNavbar";
 
import Productsdum from "../components/Productsdum";
 
import Categoriesdum from "../components/Categoriesdum";
import "./Homedum.css";

const User = () => {
  return (
    <div className="header">
     
       <UserNavbar/>
       <Categoriesdum/>
       <Productsdum/>
       <Footer/> 
       
       
    </div>
  );
};

export default User;
