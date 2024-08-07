import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/logo.png";
import Gallery from "./Gallery";
import CompanyDescription from "./CompanyDescription";

function Home() {
  return (
    <section>
      <Container fluid className="home-background" id="home">
        <Container className="home-content home-section">
          <p></p>

          <Row className="my-5">
            <Col>
              <CompanyDescription />
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={12}>
              <h1 style={{ textAlign: "center", fontSize: "3em", paddingBottom: 15, fontFamily: 'cursive' }} className="heading">
                  Our Plant Family
              </h1>
              <Gallery />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
