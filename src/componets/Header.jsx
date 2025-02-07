import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";
import Searchbar from "./Searchbar";

function Header({ insidehome }) {
  const userWishlist = useSelector((state) => state.wishlistReducer);
  const Cartitems = useSelector((state) => state.cartreduces); // Ensure correct reducer name
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [barshow, setBarShow] = useState(true);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close search bar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setBarShow(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Navbar expand="md" className="bg-dark sticky-top shadow-sm py-3">
      <Container className="d-flex justify-content-between align-items-center">
        
        {/* Brand Logo */}
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-white fw-bold fs-3 d-flex align-items-center">
          Fushion <i className="fa-solid  fa-store ms-2 text-warning"></i>
          </Link>
        </Navbar.Brand>

        {/* Navbar Right Side */}
        <Nav className="d-flex flex-row align-items-center me-4 gap-4">
          
          {/* Search Bar */}
          {insidehome && (
            barshow ? (
              <div className="d-flex align-items-center">
                {isMobile ? (
                  <i
                    onClick={() => setBarShow(false)}
                    className="fa-solid text-light fs-4 fa-magnifying-glass"
                    style={{ cursor: "pointer" }}
                  ></i>
                ) : (
                  <Searchbar />
                )}
              </div>
            ) : (
              
              <div
              ref={searchRef}
              className="position-absolute start-50 translate-middle-x d-flex justify-content-center align-items-center bg-dark shadow z-3"
              style={{ height: "100px", width: "100%", }}
            >
              <Searchbar widthbar="450px" />
            </div>
            
              
            )
          )}

          {/* Wishlist Icon */}
          <Nav.Link>
            <Link to="/Wishlist" className="text-decoration-none text-light position-relative">
              <i className="fa-solid fa-heart fs-5"></i>
              <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                {userWishlist?.length || 0}
              </Badge>
            </Link>
          </Nav.Link>

          {/* Cart Icon */}
          <Nav.Link>
            <Link to="/cart" className="text-decoration-none text-light position-relative">
              <i className="fa-solid fa-cart-shopping fs-5"></i>
              <Badge bg="warning" pill className="position-absolute top-0 start-100 translate-middle">
                {Cartitems?.length || 0}
              </Badge>
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
