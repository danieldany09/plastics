import React from "react"
import "./CategoryItemdum.css"
import {Link} from "react-router-dom";

const CategoryItemdum =({item}) =>{
    return(
                    
       
                    <div className="box">
                        
                            <div className="content">
                                <div >
                                     <Link to={`/products/${item.cat}`}>
                                     <img className="box--img" src={item.img}/>

                                         </Link>
                                </div>
                               
                               
                                <h3>{item.title} </h3>
                                 <p>Category : {item.cat}</p>
                                
                                  <button>See Product</button> 
                               
                             
                            </div>
                        
                    </div>
                   
                    
      
             
        

        
    )
}


export default CategoryItemdum;