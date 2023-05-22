import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  backdrop-filter : blur(15px);
  padding-top:10px;
  margin-top:90px;
  border-radius : 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  ${mobile({flexDirection:"column"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h2``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
 
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  flexDirection:column;
  

`;

const ContactItem = styled.div`
margin: 20px 0px;

  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container className="row">
      <Left>
        <Logo>Kannan Polythene Pipes</Logo>
        <Desc>
        To produce packaging, in building and construction, in textiles, consumer products, transportation, electrical and electronics and industrial machinery for plastics.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook style={{"cursor":"pointer"}}/>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram style={{"cursor":"pointer"}}/>
          </SocialIcon>
          {/* <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon> */}
          {/* <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon> */}
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem><a href="/" style={{textDecoration:"none",color:"black"}}>Home</a></ListItem>
          <ListItem><a href="/products/Polypropelene" style={{textDecoration:"none",color:"black"}}>Products</a></ListItem>
          <ListItem><a href="/cart" style={{textDecoration:"none",color:"black"}}>Cart</a></ListItem>
          
          
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <a href="https://www.google.co.in/maps/dir//8.318824,77.1053673/@8.3190129,77.0974262,15.2z" style={{color:"black"
        }}>< Room style={{marginRight:"10px"}}/></a>  XI/411 Karumaram, Kakkavila
	 Trivandrum -695506
	 Kerala,India.

        </ContactItem>
        <ContactItem>
          <a href=""style={{color:"black"}}><Phone style={{marginRight:"10px"}}/></a>+91 9790663324
        </ContactItem>
        <ContactItem>
          <a href="" style={{color:"black"}}><MailOutline style={{marginRight:"10px"}} /></a> kannanplastics @gmail.com
        </ContactItem>
        <Payment src="https://t3.ftcdn.net/jpg/04/25/38/36/360_F_425383660_cLLE2tW2JDSBJ62sBaiVcnYYWCqWgD88.jpg" />
      </Right>
    </Container>
  );
};

export default Footer;
