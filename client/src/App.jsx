import Product from "./pages/Product";
import Homedum from "./pages/Homedum";
import ProductListdum from "./pages/ProductListdum";
import Registerdum from "./pages/Registerdum";
import Logindum from "./pages/Logindum";
import Cartdum from "./pages/Cartdum";
import User from "./pages/User";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import ProductPagedum from "./pages/ProductPagedum";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (

    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Home />}/>
    //   <Route path="/products/:category" element={<ProductList />}/>
    //   <Route path="/product/:id" element={<Product />}/>
    //   <Route path="/cart" element={<Cart />}/>
    //   <Route path="/success" element={<Success />}/>
    //   <Route path="/login" element={user ? <Navigate to = "/"/> : <Login/>}/>
    //   <Route path="/register" element={user ? <Navigate to = "/"/> : <Register/>}/>
    // </Routes>
    // </BrowserRouter>
    <Router>
      <Switch>
        <Route exact path="/">
          <Homedum />
        </Route>
        <Route path="/products/:category">
          <ProductListdum/>
        </Route>
        <Route path="/product/:id">
          <ProductPagedum />
        </Route>
        <Route path="/cart">
          <Cartdum />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/login"> {user ? <Redirect to="/user" /> : <Logindum />}</Route>
        {/* <Route path="/login"><Logindum/></Route> */}
        <Route path="/register">
          {user ? <Redirect to="/register" /> : <Registerdum />}
        </Route>
         {/* <Route path="/register"><Registerdum/></Route> */}
      </Switch>
    </Router>
  );
};

export default App;
