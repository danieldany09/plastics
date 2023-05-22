 
import NavbarProductdum from "../components/NavbarProductdum";
import Productsdum from "../components/Productsdum";
 
import { useLocation } from "react-router";
import { useState } from "react";
import "./ProductListdum.css";
import Footer from "../components/Footer";
import UserNavbardum from "../components/usernavbardum";

 

const ProductListdum = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
     <div className="product">
      <NavbarProductdum />
      
      <h2 className="category">Category : {cat}</h2>
       
        <div className="filter-products row">
          <div className="filter-color col-4">
            <span className="filter-products-heading-color">Filter Products Color:</span>
            <select name="color" className ="color" onChange={handleFilters}>
              <option>white</option>
              <option disabled>Color</option>
              <option>black</option>
              <option>red</option>
              <option>blue</option>
              <option>yellow</option>
              <option>green</option>
            </select>
          </div>

          <div className="filter-size col-4">
            <span className="filter-products-heading-size">Filter Products Gram:</span>
            <select name="size" onChange={handleFilters} className="size">
              <option disabled>Size</option>
              <option>g</option>
              
            </select>
          </div>
          
         <div className="filter-sort col-4">
          <span className="filter-products-heading-sort">Sort Products:</span>
          <select classname="sort" onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
          </div>
         
       
        </div>
         
     
          
      <Productsdum cat={cat} filters={filters} sort={sort} />
      <Footer/>
       
      </div>
  );
};

export default ProductListdum;
