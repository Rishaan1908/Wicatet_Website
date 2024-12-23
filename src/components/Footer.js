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
            Designed and Developed by{" "}
            <a href="https://www.linkedin.com/in/parthkapila/" target="_blank" rel="noopener noreferrer">
              Parth Kapila
            </a>
            ,{" "}
            <a href="https://www.linkedin.com/in/rishaan-ponna/" target="_blank" rel="noopener noreferrer">
              Rishaan Ponna
            </a>
            ,{" "}
            <a href="https://www.linkedin.com/in/gaurav-gsingh/" target="_blank" rel="noopener noreferrer">
              Gaurav Singh
            </a>
            , and{" "}
            <a href="https://www.linkedin.com/in/anjan-nanisetti/" target="_blank" rel="noopener noreferrer">
              Anjan Nanisetti
            </a>
          </h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>C:+1 352-973-2244</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
