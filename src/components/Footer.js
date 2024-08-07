import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h3>
            Designed and Developed by&nbsp;
            <a href="https://www.linkedin.com/in/parth-kapila" target="_blank" rel="noopener noreferrer" className="footer-link">Parth Kapila</a>,&nbsp; 
            <a href="https://www.linkedin.com/in/rishaan-ponna" target="_blank" rel="noopener noreferrer" className="footer-link">Rishaan Ponna</a>,&nbsp;
            <a href="https://www.linkedin.com/in/gauav-gsingh/" target="_blank" rel="noopener noreferrer" className="footer-link">Gaurav Singh</a>,&nbsp;
            <a href="https://www.linkedin.com/in/anjan-nanisetti-5792b3266/" target="_blank" rel="noopener noreferrer" className="footer-link">Anjan Nanisetti</a>
          </h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
