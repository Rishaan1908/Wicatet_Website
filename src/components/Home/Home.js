import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/logo.png";
import Gallery from "./Gallery";
import CompanyDescription from "./CompanyDescription";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={12} className="text-center">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />
            </Col>
          </Row>
          <Row className="my-5">
            <Col>
              <CompanyDescription />
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={12}>
              <h1 style={{ textAlign: "center", fontSize: "3em", paddingBottom: 15, fontFamily: 'cursive' }} className="heading">
                Gallery
              </h1>
              <Gallery /> {/* Render the Gallery component here */}
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
