 
import { mobile } from "../responsive";
import "./Registerdum.css";
 

const Registerdum = () => {
  return (
    <div className="body">
        
    <section>
<div className="color"></div>
<div className="color"></div>
<div className="color"></div>
<div className="boxes">
    <div className="square"  ></div>
    <div className="square"  ></div>
    <div className="square"  ></div>
    <div className="square"  ></div>
    <div className="square"  ></div>
    <div className="container-cc">
        <div className="form">
             <h2>SignUp Form</h2>
             <form>
                <div className="inputBox">
                    <input type="text" placeholder="Username"
                      
                    />
                </div>
                <div className="inputBox">
                    <input type="password" placeholder="Password"
                    
                    />
                </div>
                <div className="inputBox">
                    <input type="submit" value="SignUp"/>
                </div>
                 
             </form>
        </div>
    </div>
</div>
</section>
</div>
     
  );
};

export default Registerdum;
