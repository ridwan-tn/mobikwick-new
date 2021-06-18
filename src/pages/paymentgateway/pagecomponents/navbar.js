import React from 'react';
import {Navbar,Nav,Image,Button} from 'react-bootstrap';
import './navbar.css';
import MenuIcon from '@material-ui/icons/Menu';

class Head extends React.Component {
  state={
    divcontainer:false,
  }
  
    render() {
      var Handlechange = e =>{
        this.setState( {divcontainer:!this.state.divcontainer})
      }
      const x=this.state.divcontainer;
  return (
    <div>
    <Navbar bg="white" expand="lg" className="Headernav">
  <Navbar.Brand className="brandt" href="#home" ><Image className="navimage" src="https://zaakpay.com/assets/images/zaakpay-logo-blue.png" /></Navbar.Brand>
  <Navbar.Toggle className=" ml-10 mb-4 togbtn"  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="" id="responsive-navbar-nav">
    <Nav className="mr-auto" variant="dark">
      <Nav.Link href="#home">Product</Nav.Link>
      <Nav.Link className="links" href="#link">Pricing</Nav.Link>
      <Nav.Link className="links" href="#home">Developers</Nav.Link>
      <Nav.Link className="links" href="#link">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <Nav className="left">
  <Button className="leftb" variant="primary"  active>
Login
  </Button>
  <Button className="rightb"  variant="primary" active>
Create Account
  </Button>
    </Nav>
</Navbar>
<div className="responsivenavbar">
 <MenuIcon className="menuicon" onClick={Handlechange} />
      {x&&(<div style={{borderTop: "1px solid #b8b9ba",lineHeight:"10px",fontWeight:"570",color:"#919294"}}>
      <p style={{marginLeft:"0px",fontSize:"17px",marginTop:"13px"}}>Product</p>
      <p style={{marginLeft:"0px",fontSize:"17px"}}>Pricing</p>
      <p style={{marginLeft:"7px",fontSize:"17px"}}>Developers</p>
      <p style={{marginLeft:"2px",fontSize:"17px"}}>Contact</p>
      </div>)}
  </div>
</div>
  );
}
}

export default Head;
