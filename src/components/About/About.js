import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Map from "./Map";

function About() {
  return (
    <Container fluid className="about-section">
      <div className="about-content">
        <h1 className='main-name'><strong>About Us</strong></h1>

        <Row className="my-5">
          <Col>
            <h2>About Us</h2>
            <p>
              Welcome to Wicatet Farms Plant Nursery, your go-to wholesale foliage nursery in beautiful Eustis, Florida. We specialize in growing and shipping a diverse selection of greenhouse plants for both indoor and outdoor use, ensuring our customers receive vibrant, attractive, and hardy plants all year round.
            </p>
            <p>
              At Wicatet Farms, we pride ourselves on offering attentive and reliable customer service. Our dedicated team is committed to meeting your unique needs and preferences, including special requests. We believe in providing personalized care, and our size allows us to do just that while having the resources to meet even the most challenging plant requirements.
            </p>
            <p>
              Whether you're looking for lush indoor foliage or robust outdoor greenery, you can trust Wicatet Farms Plant Nursery to deliver quality plants and exceptional service. Thank you for choosing us as your trusted plant partner.
            </p>
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <h2>Mission Statement</h2>
            <p>
              At Wicatet Farms Plant Nursery, our mission is to cultivate and provide the highest quality foliage plants, fostering a connection between people and nature. We are dedicated to delivering exceptional customer service, personalized care, and reliable fulfillment of all plant needs. Through sustainable practices and a commitment to excellence, we aim to enhance the beauty and vitality of both indoor and outdoor spaces for our valued customers.
            </p>
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <h2>History</h2>
            <p>
              Founded in 2018, Wicatet Farms Plant Nursery began with a passion for horticulture and a vision to provide top-quality foliage to plant enthusiasts and businesses alike. Nestled in the heart of Eustis, Florida, our nursery started as a small operation with a commitment to growing vibrant, healthy plants.
            </p>
            <p>
              Over the years, we have expanded our facilities and our plant varieties, continuously improving our cultivation techniques to ensure the best possible products. Despite our growth, we have remained true to our roots, offering personalized care and attentive service to each of our customers.
            </p>
            <p>
              Today, Wicatet Farms Plant Nursery is proud to be a trusted name in the industry, known for our dedication to quality, sustainability, and customer satisfaction. As we look to the future, we remain committed to our founding principles, striving to bring the beauty and benefits of plants to more homes and businesses.
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
      </div>
    </Container>
  );
}

export default About;

