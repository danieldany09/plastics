 
 
import Productdum from "./Productdum";
import {useState, useEffect} from "react";
import axios from "axios";
import "./Productsdum.css";
 
 

const Productsdum = ({cat,filters,sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:7000/api/products?category=${cat}`
            : "http://localhost:7000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    
    
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


  return (

    <>
     <div className="product-content">
                <h2 className="product-title">Related Products</h2>
      </div>
    
    <div className="section">
      {cat 
      ? filteredProducts.map((item) => <Productdum item={item} key={item.id} />)
      : products
          .slice(0,9)
          .map((item) => 
        <Productdum item={item} key={item.id} />)}
    </div>
    </>
 
  );
};

export default Productsdum;
