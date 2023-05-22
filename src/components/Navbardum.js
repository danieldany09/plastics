import React from "react";

import {Link} from "react-router-dom";
import "./Navbardum.css";
import logo from "./asset/image.png";
import complogo from "./asset/logo.png";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined,HomeOutlined,LocalMallOutlined } from "@material-ui/icons";
// import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Navbardum(){
 
  const quantity = useSelector(state=>state.cart.quantity)
  const history = useHistory();

  
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
                <a href="/">Home <HomeOutlined fontSize="large"/></a>  
                <a href="/products/Polypropelene"> Products<LocalMallOutlined fontSize="large"/></a>
                
                <a href="/cart">Cart <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined fontSize="large"/>
            </Badge></a>
                
            {/* <a href="/" className="logout" onClick={logOut}>SIGNOUT</a> */}
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
                        <p class="card-text" style={{padding:"1rem"}}>The primary service you'll provide is selling a wide range of plastic granules to customers. Ensure you have a diverse inventory with different types of plastic granules, such as HDPE, LDPE, PVC, PP, ABS, and others .Soon we will sell alll kind of plastic granules materials.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="card">
                      <div class="card-body">
                        {/* <h5 class="card-title">Special title treatment</h5> */}
                        <p class="card-text"style={{padding:"1rem"}}> Provide packaging services for the plastic granules, ensuring they are properly sealed and labeled to maintain their quality during transportation and storage. Offer different packaging options, such as bags, boxes, depending on customer preferences.</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4" >
                    <div class="card">
                      <div class="card-body">
                        {/* <h5 class="card-title">Special title treatment</h5> */}
                        <p class="card-text"style={{padding:"1rem"}}>Provide efficient delivery and logistics services to ensure prompt and reliable distribution of the plastic granules to customers. Maintain a fleet of vehicles or collaborate with reliable transportation partners to handle deliveries efficiently and also we will give assurance</p>
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