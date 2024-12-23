import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Particle from "../Particle";
import ProductCard from "./ProductCard";
import products from "./ProductData";

function Products() {
  const [isLowToHigh, setIsLowToHigh] = useState(true);
  const [size, setSize] = useState(7); // Default to "All" sizes (7)

  // Sorting function for price
  const sortProductsByPrice = (products) => {
    return products.sort((a, b) =>
      isLowToHigh ? a.price - b.price : b.price - a.price
    );
  };

  // Filter products based on size array
  const filterProductsBySize = (products, size) => {
    if (size === 7) {
      return products; // Show all products when "All" is selected
    }
    return products.filter(product => product.sizes.includes(size));
  };

  // Toggle the sort order between Low to High and High to Low
  const toggleSortOrder = () => {
    setIsLowToHigh(!isLowToHigh);
  };

  // Handle size slider change
  const handleSizeChange = (event) => {
    setSize(Number(event.target.value));
  };

  // Filter and sort products based on the selected size and price order
  const filteredProducts = filterProductsBySize(products, size);
  const sortedProducts = sortProductsByPrice([...filteredProducts]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Products </strong>
        </h1>

        {/* Sorting Button */}
        <Button variant="primary" onClick={toggleSortOrder} style={{ marginBottom: "10px" }}>
          Sort by Price: {isLowToHigh ? "Low to High" : "High to Low"}
        </Button>

        {/* Size Slider */}
        <Form.Group controlId="sizeSlider" style={{ marginBottom: "20px" }}>
          <Form.Label style={{ color: "white" }}>
            Size: {size === 7 ? "All" : `${size} inches`}
          </Form.Label>

          <Form.Control
            type="range"
            min="2"
            max="7"
            step="1"
            value={size}
            onChange={handleSizeChange}
            style={{
              width: "30%",
              margin: "10px auto",
            }}
            className="custom-slider"
          />
        </Form.Group>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {sortedProducts.map((product, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProductCard
                id={product.id}
                index={index}
                name={product.name}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
                review={product.review}
                size={product.sizes.join(", ")} // Display all available sizes
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Inline CSS Styles for Slider */}
      <style jsx>{`
       .custom-slider {
          appearance: none;
          width: 60%;
          height: 8px;
          background: #ddd;
          border-radius: 5px;
          outline: none;
        }
        .custom-slider:focus {
          outline: none;
          border-color: #623686; /* Keeps the border color the same when focused */
        }

        .custom-slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: purple;
          cursor: pointer;
        }

        .custom-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: purple;
          cursor: pointer;
        }
      `}</style>
    </Container>
  );
}

export default Products;
