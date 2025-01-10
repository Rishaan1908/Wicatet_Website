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
    return products.filter((product) => product.size.includes(size));
  };

  // Toggle the sort order between Low to High and High to Low
  const toggleSortOrder = () => {
    setIsLowToHigh(!isLowToHigh);
  };

  // Handle size dropdown change
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
        <Button variant="primary" onClick={toggleSortOrder} style={{ 
          marginBottom: "10px", 
          width: "250px",
          }}>


          Sort by Price: {isLowToHigh ? "Low to High" : "High to Low"}
        </Button>

        {/* Size Dropdown */}
        <Form.Group controlId="sizeDropdown" style={{ marginBottom: "20px" }}>
          <Form.Control
            as="select"
            value={size}
            onChange={handleSizeChange}
            style={{
              width: "250px",
              margin: "10px auto",
              backgroundColor: "#623686",
              borderColor: "#623686",
              color: "white",
              textAlign: "center",
            }}
          >
            <option value={7}>All Sizes</option>
            <option value={2}>2 inches</option>
            <option value={3}>3 inches</option>
            <option value={4}>4 inches</option>
            <option value={5}>5 inches</option>
            <option value={6}>6 inches</option>
          </Form.Control>
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
                size={product.size.join(", ")} // Display all available sizes
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Products;
