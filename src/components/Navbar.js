// Ensure the route "/account" is defined in your router configuration.

import React, { useState, useEffect, useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/full_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaSeedling } from "react-icons/fa";
import { WishlistContext } from "../components/Products/WishlistContext";

function NavigationBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const { user, logout } = useContext(WishlistContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 20) {
        setNavColour(true);
      } else {
        setNavColour(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={logo} className="img-fluid logo" alt="brand" />
          <span className="ms-4">Wicatet Farms Plant Nursery</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => setExpand(false)}>
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/product" onClick={() => setExpand(false)}>
                <FaSeedling style={{ marginBottom: "2px" }} /> Products
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/contact" onClick={() => setExpand(false)}>
                Contact Us
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/faq" onClick={() => setExpand(false)}>
                FAQ
              </Nav.Link>
            </Nav.Item>

            {user ? (
              <>
                <Nav.Item>
                  <Nav.Link as={Link} to="/account" onClick={() => setExpand(false)}>
                    <AiOutlineUser style={{ marginBottom: "2px" }} /> Account
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={handleLogout}>
                    Logout
                  </Nav.Link>
                </Nav.Item>
              </>
            ) : (
              <>
                <Nav.Item>
                  <Nav.Link as={Link} to="/login" onClick={() => setExpand(false)}>
                    <AiOutlineUser style={{ marginBottom: "2px" }} /> Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/signup" onClick={() => setExpand(false)}>
                    Signup
                  </Nav.Link>
                </Nav.Item>
              </>
            )}

            <Nav.Item>
              <Nav.Link as={Link} to="/wishlist" onClick={() => setExpand(false)}>
                Wishlist
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
