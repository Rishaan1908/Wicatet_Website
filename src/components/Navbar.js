import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaSeedling } from "react-icons/fa";

function NavigationBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setNavColour(window.scrollY >= 20);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", icon: <AiOutlineHome />, label: "Home" },
    { to: "/about", label: "About" },
    { to: "/product", icon: <FaSeedling />, label: "Products" },
    { to: "/contact", label: "Contact Us" },
    { to: "/faq", label: "FAQs" },
    { to: "/login", icon: <AiOutlineUser />, label: "" },
  ];

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container className="d-flex flex-column align-items-center">
        <Navbar.Brand href="/" className="d-flex flex-column align-items-center">
          <img src={logo} className="img-fluid logo" alt="brand logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpand(!expand)} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="navbar-items-container">
            <Nav className="navbar-items">
              {navItems.map(({ to, icon, label }, index) => (
                <Nav.Item key={index}>
                  <Nav.Link as={Link} to={to} onClick={() => setExpand(false)}>
                    {icon && <span style={{ marginBottom: "2px" }}>{icon}</span>} {label}
                  </Nav.Link>
                </Nav.Item>
              ))}
              <Nav.Item className="fork-btn">
                <Button href="#" target="_blank" className="fork-btn-inner">
                  <CgGitFork style={{ fontSize: "1.2em" }} />
                </Button>
              </Nav.Item>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
