import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {BrowserRouter as Router} from "react-router-dom";
import "../navbar/navbar.css";


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
    return(
      <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="home">
              <h2 style={{color:"white", fontWeight:"bolder"}}>ගල්ස්</h2>
            </Navbar.Brand>
            
             
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#products" className={activeLink === 'products' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('products')}>Products</Nav.Link>
                <Nav.Link href="#Service" className={activeLink === 'Service' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Service')}>Service</Nav.Link>
                <Nav.Link href="#Feedback" className={activeLink === 'Feedback' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Feedback')}>Feedback</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>

          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <span className="aws">Already have an account? </span>
                <Nav.Link href="#login" className={activeLink === 'login' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('login')}>Login/Signup</Nav.Link>
                 
              </Nav>
            </Navbar.Collapse>
          </Container>
          



       </Navbar>
     </Router>
    )
  }