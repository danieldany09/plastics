 
 
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import "./ProductPagedum.css";
import Footer from "../components/Footer";
import { HomeOutlined,LocalMallOutlined,ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

import complogo from "../components/asset/logo.png"




const ProductPagedum = () =>{
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();
    
    const quan = useSelector(state=>state.cart.quantity)

  
    useEffect(() => {
      const getProduct = async () => {
        try {
          const res = await publicRequest.get("/products/find/" + id);
          setProduct(res.data);
        } catch {}
      };
      getProduct();
    }, [id]);
  
    const handleQuantity = (type) => {
      if (type === "dec") {
        quantity > 1 && setQuantity(quantity - 1);
      } else {
        setQuantity(quantity + 1);
      }
    };
  
    const handleClick = () => {
      dispatch(
        addProduct({ ...product, quantity, color, size })
      );
    };
    return(
        <>
        {/* <div className="product-container">
        
       
        
        
        <div className="image">
            <img src= {product.img}/>
        </div>
        <div className="product-content">
            <h2 className="title">Product Name : {product.title}</h2>
            <p className="description">Description :{product.desc}</p>
            
            <div className="quantity">
            <button onClick={() => handleQuantity("dec")}>-</button>Quantity : {quantity}<button onClick={() => handleQuantity("inc")}>+</button>
            </div>
             
            <p className="price">Price :Rs.{product.price}</p>
           
            <button onClick={handleClick}>Add to Cart</button>

        </div>
    </div> */}


<div className="header">
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
<div className="product-container">
<div className="image">
    <img src= {product.img}/>
</div>
<div className="product-content">
    <h2 className="title">Product: {product.title}</h2>
    <p className="description">Description :{product.desc}</p>
    <p className="color">Color:{product.color}</p>
    <p className="size">Weight : Kg</p>

    
    <p className="price">Price :Rs.{product.price}</p>
    <div className="quantity">
            <button onClick={() => handleQuantity("dec")}>-</button>Quantity : {quantity}<button onClick={() => handleQuantity("inc")}>+</button>
            </div>
             
    <button onClick={handleClick}>Add to Cart</button>

</div>
</div>

<Footer/> 
</div>
</>
    )
}

export default ProductPagedum;