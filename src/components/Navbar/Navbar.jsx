import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import weblogo from './logo.png';
import "./navbar.css";

const NavBar = () => {
  const { cartList } = useSelector((state) => state.cart);
  const [expand, setExpand] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Fixed header on scroll
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 100) {
        setIsFixed(true);
      } else if (window.scrollY <= 50) {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // Body scroll lock when overlay is open
  useEffect(() => {
    if (isSignInOpen) {
      document.body.classList.add('auth-modal-open');
    } else {
      document.body.classList.remove('auth-modal-open');
    }
    
    return () => {
      document.body.classList.remove('auth-modal-open');
    };
  }, [isSignInOpen]);

  const toggleSignInOverlay = () => {
    setSignInOpen(!isSignInOpen);
    if (!isSignInOpen) {
      setIsSignUp(false);
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log('Sign up submitted', formData);
    } else {
      console.log('Sign in submitted', formData);
    }
    toggleSignInOverlay();
  };

  return (
    <>
      <Navbar
        expand="md"
        className={`navbar ${isFixed ? 'fixed' : ''}`}
      >
        <Container className="navbar-container">
          <Navbar.Brand>
            <Link to="/">
              <img src={weblogo} alt="Website Logo" className="navbar-logo" />
            </Link>
          </Navbar.Brand>

          {/* Mobile Cart and Toggle */}
          <div className="d-flex align-items-center">
            <div className="media-cart">
              <button 
                aria-label="Open Sign In Popup"
                onClick={toggleSignInOverlay}
                className="sign-in-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="nav-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <Link
                aria-label="Go to Cart Page"
                to="/cart"
                className="cart"
                data-num={cartList.length}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="nav-icon"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </Link>
            </div>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpand(prev => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
          </div>

          <Navbar.Collapse id="basic-navbar-nav" in={expand}>
            <Nav className="ms-auto">
              <Nav.Item>
                <Link
                  aria-label="Go to Home Page"
                  className="navbar-link"
                  to="/"
                  onClick={() => setExpand(false)}
                >
                  <span className="nav-link-label">Home</span>
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  aria-label="Go to Shop Page"
                  className="navbar-link"
                  to="/shop"
                  onClick={() => setExpand(false)}
                >
                  <span className="nav-link-label">Shop</span>
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  aria-label="Go to About Page"
                  className="navbar-link"
                  to="/aboutus"
                  onClick={() => setExpand(false)}
                >
                  <span className="nav-link-label">About Us</span>
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  aria-label="Go to Contact Page"
                  className="navbar-link"
                  to="/contactus"
                  onClick={() => setExpand(false)}
                >
                  <span className="nav-link-label">Contact Us</span>
                </Link>
              </Nav.Item>
              
              <Nav.Item className="expanded-cart">
                <button
                  aria-label="Open Sign In Popup"
                  onClick={toggleSignInOverlay}
                  className="sign-in-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="nav-icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <Link
                  aria-label="Go to Cart Page"
                  to="/cart"
                  className="cart"
                  data-num={cartList.length}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="nav-icon"
                  >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sign In/Up Overlay */}
      <div className={`auth-overlay ${isSignInOpen ? 'open' : ''}`}>
        <div className="auth-overlay-content">
          <button
            aria-label="Close Sign In Popup"
            onClick={toggleSignInOverlay}
            className="auth-close-btn"
          >
            &times;
          </button>
          
          <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
          
          <div className="auth-tabs">
            <button 
              className={`tab-button ${!isSignUp ? 'active' : ''}`} 
              onClick={() => setIsSignUp(false)}
            >
              Sign In
            </button>
            <button 
              className={`tab-button ${isSignUp ? 'active' : ''}`} 
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="auth-input"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            )}
            
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="auth-input"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="auth-input"
              value={formData.password}
              onChange={handleInputChange}
              required
              minLength="6"
            />
            
            {isSignUp && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="auth-input"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                minLength="6"
              />
            )}
            
            <button type="submit" className="auth-submit-btn">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
            
            <div className="auth-switch">
              {isSignUp ? (
                <p>
                  Already have an account?{' '}
                  <button 
                    type="button" 
                    className="auth-switch-btn"
                    onClick={() => setIsSignUp(false)}
                  >
                    Sign In
                  </button>
                </p>
              ) : (
                <p>
                  Don't have an account?{' '}
                  <button 
                    type="button" 
                    className="auth-switch-btn"
                    onClick={() => setIsSignUp(true)}
                  >
                    Sign Up
                  </button>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NavBar;