import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Map from "./Map";

function About() {
  return (
    <Container fluid className="about-section">
      <h1 className='main-name'><strong>About Us</strong></h1>

      <Row className="my-5">
        <Col>
          <h2>Description</h2>
          <p>
            [Insert company description here]
          </p>
        </Col>
      </Row>

      <Row className="my-5">
        <Col>
          <h2>Mission Statement</h2>
          <p>
            Our mission is to [insert mission statement here]. We strive to [insert goals or values here].
          </p>
        </Col>
      </Row>

      <Row className="my-5">
        <Col>
          <h2>History</h2>
          <p>
            Our company was founded in [year] with the vision of [insert founding vision here]. Over the years, we have [insert key historical milestones here].
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Location</h2>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center">
        <Col md={8} className="my-5 d-flex justify-content-center">
          <Map />
        </Col>
      </Row>

      <Row className="my-5">
        <Col>
          <h2>Team Members</h2>
          <p>
            Our team consists of [insert brief description of team composition here]. We are proud to have [insert names and roles of key team members here].
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
