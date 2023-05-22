import React from "react";
import Navbardum from "../components/Navbardum";
import Categoriesdum from "../components/Categoriesdum";
import Productsdum from "../components/Productsdum";
import "./Homedum.css";
import Footer from "../components/Footer";
 

const Home = () => {
  return (
    <div className="header">
      
      <Navbardum />
      <Categoriesdum />
      <Productsdum/>
      <Footer/>
      
    </div>
  );
};

export default Home;
