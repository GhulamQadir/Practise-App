import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

var menu = document.querySelector(".menu-list")
var menuBtn = document.querySelector(".menu-btn")
var cancelBtn = document.querySelector(".cancel-btn")
var navbar = document.querySelector('.navbar')
var body = document.querySelector('body')


class Header extends React.Component{
  menuBtn = () =>{
    menu.classList.add("active")
    menuBtn.classList.add("hide")
    body.classList.add("disabledScroll")
}

cancelBtn = () =>{
    menu.classList.remove("active")
    menuBtn.classList.remove("hide")
    body.classList.remove("disabledScroll")
}

// window.onscroll = () =>{
//     this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
// }
    render(){
      
        return(
            <div>
    <Navbar className="navBar" collapseOnSelect expand="lg" bg="light" variant="dark">
  <Navbar.Brand><img src="https://www.seekpng.com/png/detail/141-1418999_the-vintage-wardrobe-clothes-shop-logo-png.png"height="50"width="160px" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link className="navLink" to="/">Home</Link>
      <Link className="navLink" to="/">Product</Link>
      <Link className="navLink" to="/">About Us</Link>
      <Link className="navLink" to="/">Contact Us</Link>
       </Nav>

  </Navbar.Collapse>
</Navbar>

</div>

       )    
        
    }
}
export default Header;
