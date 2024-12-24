import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Map from './Map';
import './About.css'; // Custom styles

// Import images (replace with your actual image paths)
import image1 from './PHOTO-2024-05-16-18-20-06.jpg';
import image14 from './PHOTO-2024-05-16-18-28-14 2.jpg';
import image3 from './PHOTO-2024-05-16-18-25-49.jpg';
import image4 from './PHOTO-2024-05-16-18-28-15 2.jpg';
import image5 from './PHOTO-2024-08-16-12-04-35.jpg';
import image6 from './PHOTO-2024-08-27-11-13-03.jpg';
import image7 from './PHOTO-2024-05-16-18-28-14 3.jpg';
import image8 from './PHOTO-2024-05-16-18-28-15 3.jpg';
import image9 from './PHOTO-2024-08-16-12-04-45.jpg';
import image10 from './PHOTO-2024-08-27-11-13-13.jpg';
import image11 from './PHOTO-2024-08-27-11-11-27.jpg';
import image12 from './PHOTO-2024-08-27-11-13-57.jpg';
import image13 from './PHOTO-2024-08-14-15-32-32.jpg';
import image2 from './PHOTO-2024-08-27-11-11-59.jpg';

function About() {
  return (
    <Container fluid className="about-section">
      <div className="about-content">
        {/* <h1 className='main-name text-center mb-4'>
          <strong>About Us</strong>
        </h1> */}

        {/* Main layout with left and right sections */}
        <Row className="about-row">
          {/* Left section: About Us, History and Images */}
          <Col md={6} className="about-left">
            {/* About Us Card */}
            <Card className="shadow-lg border-light uniform-padding">
              <Card.Body>
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
              </Card.Body>
            </Card>

            {/* Image Row */}
            <Row className="image-row mt-4">
              <Col md={6}>
                <img 
                  src={image1} 
                  alt="Portrait 1" 
                  className="img-fluid rounded-3 uniform-padding" 
                />
              </Col>
              <Col md={6}>
                <img 
                  src={image2} 
                  alt="Portrait 2" 
                  className="img-fluid rounded-3 uniform-padding" 
                />
              </Col>
            </Row>

            {/* History Card */}
            <Card className="shadow-lg border-light uniform-padding mt-4">
              <Card.Body>
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
              </Card.Body>
            </Card>

            {/* More images after History */}
            <Row className="image-row mt-4">
              <Col md={6}>
                <img 
                  src={image3} 
                  alt="Portrait 3" 
                  className="img-fluid rounded-3 uniform-padding" 
                />
              </Col>
              <Col md={6}>
                <img 
                  src={image4} 
                  alt="Portrait 4" 
                  className="img-fluid rounded-3 uniform-padding" 
                />
              </Col>
            </Row>
            <Row className="image-row mt-4">
              <Col md={6}>
                <img 
                  src={image5} 
                  alt="Portrait 5" 
                  className="img-fluid rounded-3 uniform-padding" 
                />
              </Col>
              <Col md={6}>
                <img 
                  src={image6} 
                  alt="Portrait 6" 
                  className="img-fluid rounded-3 uniform-padding" 
                />
              </Col>
            </Row>
          </Col>

          {/* Right section: Mission Statement and Images */}
          <Col md={6} className="about-right">
            {/* Image Row */}
            <Row className="image-row">
              <Col md={6}>
                <img 
                  src={image7} 
                  alt="Portrait 7" 
                  className="img-fluid rounded-3 uniform-padding" 
                />
              </Col>
              <Col md={6}>
                <img 
                  src={image8} 
                  alt="Portrait 8" 
                  className="img-fluid rounded-3 uniform-padding" 
                />
              </Col>
            </Row>

            {/* Mission Statement Card */}
            <Card className="shadow-lg border-light uniform-padding mt-4">
              <Card.Body>
                <h2>Mission Statement</h2>
                <p>
                  At Wicatet Farms Plant Nursery, our mission is to cultivate and provide the highest quality foliage plants, fostering a connection between people and nature. We are dedicated to delivering exceptional customer service, personalized care, and reliable fulfillment of all plant needs. Through sustainable practices and a commitment to excellence, we aim to enhance the beauty and vitality of both indoor and outdoor spaces for our valued customers.
                </p>
              </Card.Body>
            </Card>

            {/* More images after Mission Statement */}
            <Row className="image-row mt-4">
              <Col md={6}>
                <img 
                  src={image9} 
                  alt="Portrait 9" 
                  className="img-fluid rounded-3 uniform-padding" 
                />
              </Col>
              <Col md={6}>
                <img 
                  src={image10} 
                  alt="Portrait 10" 
                  className="img-fluid rounded-3 uniform-padding" 
                />
              </Col>
            </Row>
            <Row className="image-row mt-4">
              <Col md={6}>
                <img 
                  src={image11} 
                  alt="Portrait 11" 
                  className="img-fluid rounded-3 uniform-padding" 
                />
              </Col>
              <Col md={6}>
                <img 
                  src={image12} 
                  alt="Portrait 12" 
                  className="img-fluid rounded-3 uniform-padding" 
                />
              </Col>
            </Row>
            <Row className="image-row mt-4">
              <Col md={6}>
                <img 
                  src={image13} 
                  alt="Portrait 13" 
                  className="img-fluid rounded-3 uniform-padding" 
                />
              </Col>
              <Col md={6}>
                <img 
                  src={image14} 
                  alt="Portrait 14" 
                  className="img-fluid rounded-3 uniform-padding" 
                />
              </Col>
            </Row>
            {/* Location Map */}
            <div className="mt-4">
              <h2 className="text-center">Location</h2>
              <div className="d-flex justify-content-center">
                <Col md={8} className="d-flex justify-content-center">
                  <Map />
                </Col>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default About;
