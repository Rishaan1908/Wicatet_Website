import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h3>Designed and Developed by Parth Kapila, Rishaan Ponna, Gaurav Singh, Anjan Nanisetti</h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>C:+1 000-000-000</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
