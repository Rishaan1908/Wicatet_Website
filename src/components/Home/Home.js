import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/logo.webp";
import Map from "./Map";
import Gallery from "./Gallery"; // Import the Gallery component
import CompanyDescription from "./CompanyDescription";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, fontFamily: 'cursive' }} className="heading">
                Wicatet Farms
              </h1>

              <h1 className="heading-name">
                <strong className="main-name">Plant Nursery</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                {/* Additional content */}
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>

          <Row>
              <Col>
                <CompanyDescription/>
              </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Map /> {/* Render the Map component here */}
            </Col>
          </Row>

          <Row>
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
