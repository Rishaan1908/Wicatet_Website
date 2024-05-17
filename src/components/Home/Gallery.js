import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function DisplayGallery() {
  // number of images in the gallery
  const numImages = 6; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % numImages);
      // Change the order of images every 3 seconds
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  // Randomize the order of images
  const randomizeImages = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <Container className="gallery-container">
      <Row>
        {randomizeImages(Array.from({ length: numImages }, (_, index) => index)).map((index) => (
          <Col key={index} md={4} className="mb-4">
            <img
              src={require(`./images/image${index + 1}.jpeg`)}
              className="img-fluid"
              style={{ width: "60%%", height: "80%" }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DisplayGallery;
