import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import "./Logindum.css";



const Logindum = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
  
    const handleClick = (e) => {
      e.preventDefault();
      login(dispatch, { username, password });
    };
    return(
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
                     <h2>Login Form</h2>
                     <form>
                        <div className="inputBox">
                            <input type="text" placeholder="Username"
                             onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="inputBox">
                            <input type="text" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="inputBox">
                            <input type="submit" onClick={handleClick} disabled={isFetching} value="Login"/>
                        </div>
                        <p className="forget">Forgot Password ? <a href="#"> Click Here</a></p>
                        <p className="forget">Don't have an account ? <a href="#"> Sign Up </a></p>
                     </form>
                </div>
            </div>
        </div>
    </section>
        </div>
        
    )
}

export default Logindum;