
import "./Productdum.css"
import {Link} from "react-router-dom";
const Productdum = ({ item }) => {
    return (

        
        <div className="container1">
            <div className="card1">
                <div className="imgBx">
                    <img src={item.img}/>
                    <h2>{item.title}</h2>
                </div>
                <h3></h3>
                 <div className="content">
                    <div className="category">
                       <span>Category: {item.categories[1]}</span>
                    </div>
                    <div className="color">
                        <span>color : {item.color}</span>
                    </div>
                    <Link to={`/product/${item._id}`}>
                       Buy Now
                    </Link>
                 </div>
            </div>

            
        </div>
     




    //   <Container>
    //     <Circle />
    //     <Image src={item.img} />
    //     <Info>
    //       <Icon>
    //         <ShoppingCartOutlined />
    //       </Icon>
    //       <Icon>
    //         <Link to = {`/product/${item._id}`}>
    //         <SearchOutlined />
    //         </Link>
            
    //       </Icon>
    //       <Icon>
    //         <FavoriteBorderOutlined />
    //       </Icon>
    //     </Info>
    //   </Container>
    );
  };
  
  export default Productdum;