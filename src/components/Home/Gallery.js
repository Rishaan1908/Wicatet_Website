import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function DisplayGallery() {
  const numImages = 6;
  const [images, setImages] = useState([]);

  // Function to randomize images
  const randomizeImages = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Initialize images array and set interval to randomize
  useEffect(() => {
    // Initialize images array
    const initialImages = Array.from({ length: numImages }, (_, index) => index);
    setImages(randomizeImages([...initialImages]));

    const interval = setInterval(() => {
      setImages(randomizeImages([...initialImages]));
    }, 3000); // Randomize order every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="gallery-container">
      <Row>
        {images.map((index) => (
          <Col key={index} md={4} className="mb-4">
            <div style={{ width: "100%", height: "500px", overflow: "hidden" }}>
            <img
              src={require(`./images/image${index + 1}.jpeg`)}
              alt={`Number ${index + 1}`}
              className="img-fluid"
              style={{ width: "100%", height: "auto" }}
            /> 
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DisplayGallery;
