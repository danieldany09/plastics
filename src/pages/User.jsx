import React from "react";
 
import Footer from "../components/Footer";

import UserNavbar from "../components/UserNavbar";
 
import Productsdum from "../components/Productsdum";
 
import Categoriesdum from "../components/Categoriesdum";
import "./Homedum.css";
import UserNavbardum from "../components/usernavbardum";

const User = () => {
  return (
    <div className="header">
     
       <UserNavbardum/>
       <Categoriesdum/>
       <Productsdum/>
       <Footer/> 
       
       
    </div>
  );
};

export default User;
