import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

function DisplayGallery() {
  const numImages = 6;
  const [images, setImages] = useState([]);

  // Initialize images array
  useEffect(() => {
    const initialImages = Array.from({ length: numImages }, (_, index) => index);
    setImages(initialImages);
  }, []); 
  return (
    <Carousel interval={2000} pause = {false}>
  {images.map((index) => (
    <Carousel.Item key={index}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img
          src={require(`../Products/ProductImages/image${index + 1}.jpeg`)}
          alt={`Number ${index + 1}`}
          style={{ width: "50%", height: "auto" }}
        />
      </div>
    </Carousel.Item>
  ))}
</Carousel>
  );
}

export default DisplayGallery;